import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteUser } from "../../../services/apiServices";

const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => setShow(false);

  const handleSubmitDeleteUser = async () => {
    let res = await deleteUser(dataDelete.id);
    console.log(">>> check res", res);
    if (res.data && res.data.EC === 0) {
      toast.success(res.data.EM);
      handleClose();
      props.setCurrentPage(1); //get user at page 1
      await props.fetchUserListPaginate(1);
    }
    if (res.data && res.data.EC !== 0) {
      toast.error(res.data.EM);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static" //modal do not be closed when click outside modal
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete{" "}
          <b>{dataDelete && dataDelete.email ? dataDelete.email : ""} </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitDeleteUser}>
            Confirm !
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
