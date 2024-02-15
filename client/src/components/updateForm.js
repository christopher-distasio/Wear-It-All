import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const UpdateForm = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle form submission logic here (e.g., send data to the server)
    onClose();

    // Reset form fields after submission
    setImage(null);
    setPrice("");
    setTitle("");
    setZipcode("");
    setDescription("");
  };

  return (
    <Container>
      <main>
        <h3
          style={{
            fontSize: "25px",
            color: "#7aada0",
          }}
        >
          Update Form
        </h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formImage">
            <Form.Label>
              <p>Click to upload image into inventory</p>
            </Form.Label>
            <div
              className="image-upload-field"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {image ? (
                <img src={image} alt="Uploaded" style={{ maxWidth: "100%" }} />
              ) : (
                <p className="hidden">
                  Drag and Drop image here to upload into inventory
                </p>
              )}
            </div>
            <Form.Control
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formZipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Button className="updateButton" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </main>
    </Container>
  );
};

export default UpdateForm;
