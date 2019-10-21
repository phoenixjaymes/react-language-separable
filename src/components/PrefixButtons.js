import React from 'react';

const PrefixButtons = ({ prefixes, handlePrefixClick }) => (
  <div className="prefix-box">
    {prefixes !== undefined && (
      prefixes.map((prefix) => (
        <button key={prefix.id} type="button" onClick={() => handlePrefixClick(prefix.name)}>{prefix.name}</button>
      )))}
  </div>
);

export default PrefixButtons;
