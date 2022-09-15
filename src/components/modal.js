import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({show, setShow, handleSubmit, user, setUser}) {
  const handleClose = () => setShow(false);

  const handleChangeValuesToEdit = (value) => {
    setUser((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
  }))
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>
            <form className="register--container">
            <h1 className="register--title">Editar Usuário</h1>
            <input 
            type="text" 
            name="name" 
            value={user?.name}
            placeholder="Nome" 
            className="form-control form-control-lg mb-3"
            id="validationCustom01"
            onChange={handleChangeValuesToEdit}
            required
            />
            <input 
            type="date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            max={new Date().toISOString().split("T")[0]} 
            name="birthday"
            value={user?.birthday} 
            placeholder="Data de Nascimento" 
            className="form-control form-control-lg mb-3"
            onChange={handleChangeValuesToEdit}
            required
            />
            <input 
            type="email" 
            name="email"
            value={user?.email} 
            placeholder="E-mail" 
            className="form-control form-control-lg mb-3"
            onChange={handleChangeValuesToEdit}
            required
            />
            <input 
            type="password" 
            name="password"
            placeholder="Senha" 
            className="form-control form-control-lg mb-3"
            onChange={handleChangeValuesToEdit}
            minlength="6"
            required
            />
            
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" size="lg" onClick={()=> {handleSubmit(); handleClose()}}>
            Editar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;