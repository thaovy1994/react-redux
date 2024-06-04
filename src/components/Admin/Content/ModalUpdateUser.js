import _ from "lodash";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiServices";

const ModalUpdateUser = (props) => {
  const { show, setShow, dataUpdate, resetUpdateData } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setpreviewImage("");
    resetUpdateData();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setpreviewImage] = useState("");

  useEffect(() => {
    //Check xem func is empty or not:
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setUsername(dataUpdate.username);
      setRole(dataUpdate.role);
      setImage("");
      if (dataUpdate.image) {
        setpreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);

  const handleUploadImage = (event) => {
    //case - have upload files:
    if (event.target && event.target.files && event.target.files[0]) {
      setpreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      setpreviewImage(null);
    }
  };

  const handleSubmitUpdateUser = async () => {
    //call api & submit data:
    let res = await putUpdateUser(dataUpdate.id, username, role, image);
    console.log(">>> check res", res);
    if (res.data && res.data.EC === 0) {
      toast.success(res.data.EM);
      handleClose();
      await props.fetchUserListPaginate(props.currentPage);
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
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled={true}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled={true}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
                value={role}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <FcPlus />
                Upload File Image
              </label>
              <input
                type="file"
                id="labelUpload"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </div>

            <div className="col.md-12 img-preview">
              {previewImage ? <img src={previewImage} /> : <span>Image</span>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
