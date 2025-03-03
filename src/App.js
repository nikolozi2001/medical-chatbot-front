import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const getResponse = async () => {
    if (!value) {
      setError("გთხოვთ ჩაწეროთ შეკითხვა");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
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

      setResponse(data.text);
      setValue("");
    } catch (error) {
      console.error("Error fetching response:", error);
      setError("შეცდომაა, გთხოვთ სცადოთ ხელახლა");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <p>რისი ცოდნა გსურთ?</p>
      <div className="input-container">
        <input
          value={value}
          placeholder="ჩაწერეთ შეკითხვა..."
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && !loading && <button onClick={getResponse}>მკითხე</button>}
        {loading && <p>დაელოდეთ...</p>}
      </div>
      {error && <p className="error">{error}</p>}

      {response && (
        <div className="search-results">
          <p className="answer">პასუხი: {response}</p>
        </div>
      )}
    </div>
  );
};

export default App;
