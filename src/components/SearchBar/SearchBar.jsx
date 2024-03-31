import toast, { Toaster } from "react-hot-toast";
import css from './SearchBar.module.css'
const notify = () =>
  toast.error("Notification: Please Enter Text for Image Search");

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchTerm = form.elements.searchImage.value;
    if (searchTerm.trim() === "") {
      notify();
      return;
    }
    onSearch(searchTerm);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.headerForm}>
        <input
          type="text"
          name="searchImage"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
