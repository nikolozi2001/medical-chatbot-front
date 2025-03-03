const ResponseDisplay = ({ response }) => {
  return (
    response && (
      <div className="search-results">
        <p className="answer">პასუხი: {response}</p>
      </div>
    )
  );
};

export default ResponseDisplay;
