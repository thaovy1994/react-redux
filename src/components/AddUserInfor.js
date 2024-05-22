import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "DAN",
    age: "",
  };
  //Dùng arrow function tại đây để hàm dùng đc biến this
  //or dùng arrow function ở hàm dc ánh xạ ở nút button
  handleClick = (event) => {
    this.setState({
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnChangeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  handleOnSubmit = (event) => {
    //Ngăn reload trang
    event.preventDefault();
    this.props.handleAddNewUesrs({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        <form onSubmit={this.handleOnSubmit}>
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChangeName(event);
            }}
          />
          <br />
          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
