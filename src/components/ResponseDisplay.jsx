const ResponseDisplay = ({ response }) => {
  return (
    response && (
      <div className="search-results">
        <p className="answer response-paragraph">პასუხი: {response}</p>
      </div>
    )
  );
};

export default ResponseDisplay;
