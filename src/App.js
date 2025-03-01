import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const surpriseOptions = [
    "ვინ არის საუკეთესო გასტროენტეროლოგი?",
    "რა გზას მივმართო თავის ტკივილის დროს?",
    "რომელი კლინიკაა ყველაზე კარგი?",
    "რა უნდა ვიცოდეთ გაღიზიანებული ნაწლავის სინდრომის დროს?",
  ];

  const surprise = () => {
    const randomValue = Math.floor(Math.random() * surpriseOptions.length);
    setValue(surpriseOptions[randomValue]);
  };

  const getResponse = async () => {
    if (!value) {
      setError("გთხოვთ ჩაწეროთ შეკითხვა");
      return;
    }
    setLoading(true);
    try {
      const formattedHistory = chatHistory.map((item) => ({
        role: item.role,
        parts: [item.parts].flat(),
      }));

      const options = {
        method: "POST",
        body: JSON.stringify({
          history: formattedHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/chat", options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      console.log(data);

      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        {
          role: "კითხვა",
          parts: [value],
        },
        {
          role: "პასუხი",
          parts: [data.text],
        },
      ]);
      setValue("");
    } catch (error) {
      console.error("Error fetching response:", error);
      setError("შეცდომაა, გთხოვთ სცადოთ ხელახლა");
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setChatHistory([]);
    setError("");
    setValue("");
  };

  return (
    <div className="app">
      <p>
        რისი ცოდნა გსურთ?
        <button
          className="surprise"
          onClick={surprise}
          disabled={chatHistory.length > 0}
        >
          კითხვის გენერირება!
        </button>
      </p>
      <div className="input-container">
        <input
          value={value}
          placeholder="ჩაწერეთ შეკითხვა..."
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && !loading && <button onClick={getResponse}>მკითხე</button>}
        {error && <button onClick={clear}>გასუფთავება</button>}
        {loading && <p>დაელოდეთ...</p>}
      </div>
      {error && <p className="error">{error}</p>}

      <div className="search-results">
        {chatHistory.map((chatItem, _index) => (
          <div key={_index}>
            <p className="answer">
              {chatItem.role} : {chatItem.parts.join(" ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
