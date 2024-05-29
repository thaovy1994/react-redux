import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div classNameName="manage-user-container">
      <div classNameName="tittle">Manage User</div>
      <div classNameName="user-content">
        <button>Add new user</button>
      </div>
      <div classNameName="">
        Table User
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
