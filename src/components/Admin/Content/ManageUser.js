import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { getAllUser } from "../../../services/apiServices";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalUpdateUser from "./ModalUpdateUser";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    let res = await getAllUser();
    if (res.data.EC === 0) {
      setUsersList(res.data.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  // case: no change data.
  const resetUpdateData = () => {
    setDataUpdate({});
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
          <TableUser
            usersList={usersList}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDelete={handleClickBtnDelete}
          />
        </div>
        <ModalCreateUser
          show={showModalAddUser}
          setShow={setShowModalAddUser}
          fetchUserList={fetchUserList}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchUserList={fetchUserList}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          fetchUserList={fetchUserList}
          dataDelete={dataDelete}
        />
      </div>
    </div>
  );
};

export default ManageUser;
