//https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook

import { useState } from "react";
import AddFieldsForm from "./AddFieldsForm";

export default function AddFields() {
  const addInput = () => {
    setArr([
      ...arr,
      {
        value: "",
        id: parseInt(1 + Math.random() * (1000 - 1), 10)
      }
    ]);
  };
  const [arr, setArr] = useState([]);
  const handleChange = (e, id, name) => {
    const { value } = e.target;
    e.preventDefault();
    const temp = [...arr];
    temp[id] = {
      ...temp[id],
      [name]: value
    };

    setArr(temp);
  };
  const removeArrFields = (index) => {
    const rows = [...arr];
    rows.splice(index, 1);
    setArr(rows);
  };
  return (
    <div>
      <button onClick={addInput}>Add Form</button>
      <div>
        {arr.map((item, index) => (
          <AddFieldsForm onChange={(e) => handleChange(e, index, "value")} />
        ))}
      </div>
      <div>
        {arr.length !== 0 ? (
          <button onClick={() => removeArrFields()}>X</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}