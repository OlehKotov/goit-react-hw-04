import css from './LoadMoreBtn.module.css'


const LoadMoreBtn = ({ onAddPage }) => {
  const handleClick = () => {
    onAddPage();
  };

  return <button onClick={handleClick} className={css.loadBtn}>Load More</button>;
};

export default LoadMoreBtn;
