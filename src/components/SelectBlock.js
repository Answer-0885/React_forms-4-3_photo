const SelectBlock = ({ handleSelect }) => {
  return (
    <div className="container-select">
      <input type="file" onChange={handleSelect} multiple/>
      <div className="blockSelect">Click to select</div>
    </div>
  );
};

export default SelectBlock;