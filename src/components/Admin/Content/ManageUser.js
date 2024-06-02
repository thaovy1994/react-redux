import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalAdd(true)}
          >
            <FcPlus /> Add new user
          </button>
        </div>
        <div className="table-user-container">
          <TableUser />
        </div>
        <ModalCreateUser show={showModalAdd} setShow={setShowModalAdd} />
      </div>
    </div>
  );
};

export default ManageUser;
