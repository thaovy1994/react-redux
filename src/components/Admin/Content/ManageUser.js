import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { getAllUser } from "../../../services/apiServices";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [showModalAddUser, setShowModalAddUser] = useState(false);
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
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalAddUser(true)}
          >
            <FcPlus /> Add new user
          </button>
        </div>
        <div className="table-user-container">
          <TableUser usersList={usersList} />
        </div>
        <ModalCreateUser
          show={showModalAddUser}
          setShow={setShowModalAddUser}
          fetchUserList={fetchUserList}
        />
      </div>
    </div>
  );
};

export default ManageUser;
