import { useState } from "react";

export default function AddFieldsForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phonenumber: ""
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data checking", data);
    setData({ name: "", email: "", phonenumber: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={data.phonenumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}

//https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook
