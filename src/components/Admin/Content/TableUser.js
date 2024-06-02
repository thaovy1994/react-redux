import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiServices";

const TableUser = (props) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    let res = await getAllUser();
    if (res.data.EC === 0) {
      setUsersList(res.data.DT);
    }
  };
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {usersList &&
            usersList.length > 0 &&
            usersList.map((user, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <th>{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-secondary">Detail</button>
                    <button className="btn btn-warning mx-3">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {usersList && usersList.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not Found Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
