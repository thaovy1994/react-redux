import React, { useState } from "react";

// class AddUserInfor extends React.Component {
const AddUserInfor = (props) => {
  // state = {
  //   name: "",
  //   address: "DAN",
  //   age: "",
  // };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("DAN");
  const [age, setAge] = useState("");

  const handleClick = (event) => {
    setAge(Math.floor(Math.random() * 100 + 1));
    // this.setState({
    //   age: Math.floor(Math.random() * 100 + 1),
    // });
  };

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUesrs({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <form onSubmit={handleOnSubmit}>
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => {
            handleOnChangeName(event);
          }}
        />
        <br />
        <label>Your age:</label>
        <input
          value={age}
          type="text"
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
