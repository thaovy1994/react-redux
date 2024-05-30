import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div classNameName="manage-user-container">
      <div classNameName="title">Manage User</div>
      <div classNameName="user-content">
        <button>Add new user</button>
      </div>
      <div classNameName="">Table User</div>
      <ModalCreateUser />
    </div>
  );
};

export default ManageUser;
