import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
  const [usersList, setUsersList] = useState([
    { id: 1, name: "Nguyen Van An", age: 20 },
    { id: 2, name: "Nguyen Van B", age: 18 },
    { id: 3, name: "Nguyen Van C", age: 29 },
  ]);

  const handleAddNewUesrs = (userObj) => {
    setUsersList([userObj, ...usersList]);
  };

  const handleDeleteUser = (userId) => {
    let usersListClone = [...usersList];
    usersListClone = usersListClone.filter((item) => item.id !== userId);
    setUsersList(usersListClone);
  };

  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUesrs={handleAddNewUesrs} />
        <DisplayInfor
          usersList={usersList}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
