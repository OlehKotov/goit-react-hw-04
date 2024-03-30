const LoadMoreBtn = ({ onAddPage }) => {
  const handleClick = () => {
    onAddPage();
  };

  return <button onClick={handleClick}>Load More</button>;
};

export default LoadMoreBtn;
