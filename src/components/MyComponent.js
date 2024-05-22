import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    usersList: [
      { id: 1, name: "Nguyen Van An", age: 20 },
      { id: 2, name: "Nguyen Van B", age: 18 },
      { id: 3, name: "Nguyen Van C", age: 29 },
    ],
  };

  handleAddNewUesrs = (userObj) => {
    this.setState({
      usersList: [userObj, ...this.state.usersList],
    });
  };

  handleDeleteUser = (userId) => {
    let usersListClone = [...this.state.usersList];
    usersListClone = usersListClone.filter((item) => item.id !== userId);
    this.setState({
      usersList: usersListClone, //update
    });
  };

  render() {
    const test = { name: "Jisoo", age: 29 }; //object variable
    //JSX -> html inside js
    return (
      <>
        {/* convert object/array to string */}
        {JSON.stringify(test)}
        <div className="a">
          <AddUserInfor handleAddNewUesrs={this.handleAddNewUesrs} />
          <DisplayInfor
            usersList={this.state.usersList}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
