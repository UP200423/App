import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

function SubirImagen({id}) {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  console.log(id);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Por favor, selecciona una imagen.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('id', id);

    try {
      const response = await fetch('http://localhost:3000/api/subirImagen', {
        method: 'POST',
        body: formData,
      });

      console.log(response);

      if (response.ok) {
        // La imagen se subió con éxito, puedes mostrar un mensaje o hacer alguna acción.
        alert('Imagen subida exitosamente.');
      } else {
        // Si ocurrió algún error en el backend, maneja la respuesta acá.
        console.log(formData)
        console.log(selectedFile);
        alert('Ocurrió un error al subir la imagen.');
      }
    } catch (error) {
      // En caso de que ocurra un error en la petición fetch.
      console.error('Error al enviar la imagen:', error);
    }
    setModalShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Subir Imagen
      </Button>

      <Modal
        show = {modalShow}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="AddModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar Imagen al Producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <h4>Seleccionar Imagen</h4> 
            <br></br>
            <div style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
              {selectedImage && <img src={selectedImage} alt="Vista previa" style={{ width: '100%', height: 'auto' }} />}
            </div>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Subir Imagen</button>
            <br></br><br></br>
            <Button variant="danger" onClick={() => setModalShow(false)}>
                            Cancelar
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SubirImagen;
