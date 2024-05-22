import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  const { usersList } = props;
  console.table(usersList);

  return (
    <div className="display-infor-container">
      {true && (
        <>
          {usersList.map((user) => {
            return (
              <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                <h4 style={{ paddingTop: "5px" }}>My name is {user.name}</h4>
                <h4>My age is {user.age}</h4>
                <button onClick={() => props.handleDeleteUser(user.id)}>
                  Delete
                </button>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
