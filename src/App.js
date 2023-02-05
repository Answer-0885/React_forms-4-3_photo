import { useState } from "react";
import SelectPhotoPage from "./components/SelectPhotoPage";
import "./App.css";

function App() {
  const [form, setForms] = useState([]);

  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", (evt) => {
        resolve(evt.currentTarget.result);
      });
      fileReader.addEventListener("error", (evt) => {
        reject(new Error(evt.currentTarget.error));
      });
      fileReader.readAsDataURL(file);
    });
  };
  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map((file) => fileToDataUrl(file)));
    setForms([...form, urls]);

  };
  const handleClose = (url) => {
    const updateForm = form.filter((urlImage) => urlImage !== url);
    setForms(updateForm);
  };

  return (
    <SelectPhotoPage
      form={form}
      multiple
      handleSelect={handleSelect}
      handleClose={handleClose}
    />
  );
}

export default App;