function Search(props) {
  return (
    <div>
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={props.recherche}
      />
    </div>
  );
}

export default Search;
