import SelectBlock from "./SelectBlock";
import ImageBlock from "./ImageBlock";

const SelectPhotoPage = ({ form, handleSelect, handleClose }) => {
  return (
    <div className="container">
      <SelectBlock handleSelect={handleSelect}/>
      <ImageBlock form={form} handleClose={handleClose} />
    </div>
  );
};

export default SelectPhotoPage;