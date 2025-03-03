const InputForm = ({ value, setValue, getResponse, error, loading }) => {
  return (
    <div className="input-container">
      <input
        value={value}
        placeholder="ჩაწერეთ შეკითხვა..."
        onChange={(e) => setValue(e.target.value)}
      />
      {!error && !loading && <button onClick={getResponse}>მკითხე</button>}
      {loading && <p>დაელოდეთ...</p>}
    </div>
  );
};

export default InputForm;
