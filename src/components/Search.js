import React from 'react';

function Search(props) {
  return (
    <div>
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={props.value}
      ></input>
    </div>
  );
}

export default Search;
