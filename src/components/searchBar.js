import React from 'react';
import PropTypes from "prop-types";

const SearchBar = ({input,onChange,placeholder}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={input}
     placeholder={placeholder}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

SearchBar.propTypes = {
  input:PropTypes.string,
  onChange:PropTypes.func,
  placeholder:PropTypes.string,
};

export default SearchBar