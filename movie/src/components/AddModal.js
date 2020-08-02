import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function AddModal(props) {
  const [todosmovie, setodosmovie] = useState({});
  const hendleChange = (el) => {
    setodosmovie({ ...todosmovie, [el.target.name]: el.target.value });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button variant="primary" onClick={handleShow}>
        <h1>+</h1>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modalInput">
              <label>Title:</label>
              <input
                type="text"
                name="name"
                className="clinput"
                value={todosmovie.name}
                onChange={hendleChange}>
              </input>
            </div>
            <div className="modalInput">
              <label>Image:</label>
              <input
                type="text"
                name="image"
                className="clinput"
                value={todosmovie.image}
                onChange={hendleChange}>
              </input>
            </div>
            <div className="modalInput">
              <label>Rating:</label>
              <input
                type="text"
                name="rating"
                className="clinput"
                value={todosmovie.rating}
                onChange={hendleChange}>
              </input>
            </div>
            <div className="modalInput">
              <label>Year :</label>
              <input
                type="text"
                name="year"
                className="clinput"
                value={todosmovie.year}
                onChange={hendleChange}>
              </input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close</Button>
          <Button variant="primary"
            onClick={() => {
              props.addM(todosmovie);
              handleClose();
            }}>
            Add Movie
        </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
