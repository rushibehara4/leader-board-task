import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPlayerModal({ onAddPlayer }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [milliseconds, setMilliseconds] = useState("");
  const [nameError, setNameError] = useState("");
  const [timeError, setTimeError] = useState("");

  const handleClose = () => {
    setShow(false);
    // Reset fields and errors
    setName("");
    setMinutes("");
    setSeconds("");
    setMilliseconds("");
    setNameError("");
    setTimeError("");
  };

  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    let valid = true;

    // Validate name
    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    // Validate time
    if (!minutes || !seconds || !milliseconds) {
      setTimeError("Time (MM:SS:SSS) is required");
      valid = false;
    } else {
      setTimeError("");
    }

    if (!valid) {
      return;
    }

    const formattedTime = `${minutes.padStart(2, "0")}:${seconds.padStart(
      2,
      "0"
    )}:${milliseconds.padStart(3, "0")}`;
    const newPlayer = { name, time: formattedTime, rank: 0, prize: 0 };
    onAddPlayer(newPlayer);
    handleClose();
    toast.success("Player Added Successfully");
  };

  return (
    <>
      <Button
        variant="secondary"
        onClick={handleShow}
        className="add-player-button"
      >
        Add Player Details
      </Button>

      <ToastContainer />

      <Modal show={show} onHide={handleClose} className="modal-container">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Add New Player</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form>
            <Form.Group className="form-group" controlId="formPlayerName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter player's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!nameError}
                className="mb-3"
              />
              <Form.Control.Feedback type="invalid">
                {nameError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-group" controlId="formPlayerTime">
              <Form.Label>Time</Form.Label>
              <div className="d-flex flex-column">
                <Form.Control
                  type="text"
                  placeholder="MM"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="form-control mb-1"
                  isInvalid={!!timeError}
                />
                <Form.Control
                  type="text"
                  placeholder="SS"
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                  className="form-control mb-1"
                  isInvalid={!!timeError}
                />
                <Form.Control
                  type="text"
                  placeholder="SSS"
                  value={milliseconds}
                  onChange={(e) => setMilliseconds(e.target.value)}
                  className="form-control mb-1"
                  isInvalid={!!timeError}
                />
                <Form.Control.Feedback type="invalid" className="w-100">
                  {timeError}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="add-player-button-modal"
          >
            Add Player
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPlayerModal;
