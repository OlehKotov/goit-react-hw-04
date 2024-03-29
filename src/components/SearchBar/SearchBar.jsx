const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    // evt.preventDefault();
    // const form = evt.target;
    // const searchImage = form.elements.searchImage.value;
    // if(form.elements.searchImage.value.trim() === "") {
		// 	alert("Please enter search term!")
		// 	return;
		// }
    onSetSearchQuery(values);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchImage"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
