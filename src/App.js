import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from './components/button'
import UsersTableList from './components/usersTableList'
import ModalComponent from './components/modal'
import SearchTool from './components/searchTool'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [values, setValues] = useState();
  const [data, setData] = useState();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});

  const handleChangeValues = (value) => {
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
  }))
  }

  const handleRegisterUser = (event) => {
    event.preventDefault()
    axios.post("https://apidesafiosnet.herokuapp.com/users", values).then(() => {
      handleGetUsers()
    })
  }

  const handleDeleteUser = (user) => {
    axios.post("https://apidesafiosnet.herokuapp.com/deleteUsers", user).then(() => {
      handleGetUsers()
    })
  }

  const handleGetUsers = () => {
    axios.get("https://apidesafiosnet.herokuapp.com/users").then((users) => {
        setData(users.data)
    })
  }

  const handleEditUser = () => {
    axios.patch("https://apidesafiosnet.herokuapp.com/users", userToEdit).then(() => {
      handleGetUsers()
    })
  }

  const handleOpenModal = (user) => {
    setUserToEdit(user)
    setOpenEditModal(true)
  }

  useEffect(() => {
    handleGetUsers()
  }, [])

  return (
    <div className="App--container">
      <ModalComponent handleSubmit={handleEditUser} user={userToEdit} setUser={setUserToEdit} show={openEditModal} setShow={setOpenEditModal} />
      <form onSubmit={(e)=> handleRegisterUser(e)} className="register--container">
        <h1 className="register--title">Registro de Usuários</h1>
        <input 
          type="text" 
          name="name" 
          placeholder="Nome" 
          className="form-control form-control-lg mb-3"
          id="validationCustom01"
          onChange={handleChangeValues}
          required
        />
        <input 
          type="date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          max={new Date().toISOString().split("T")[0]} 
          name="birthday" 
          placeholder="Data de Nascimento" 
          className="form-control form-control-lg mb-3"
          onChange={handleChangeValues}
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="E-mail" 
          className="form-control form-control-lg mb-3"
          onChange={handleChangeValues}
          required
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Senha" 
          className="form-control form-control-lg mb-3"
          onChange={handleChangeValues}
          minLength="6"
          required
        />
      
        <Button
        text="Cadastrar"
        type="submit"
        classType="btn btn-primary btn-lg pt-2 pb-0 float-end"
        style={{fontWeight: "bold"}}
        handleClick={() => {return}}
        />
        
      </form>

      <span className="data--container">
        <h1 className="register--title">Listagem de Usuários</h1>
        
        <SearchTool setFilteredUsers={setData}/>

        <table className="table table-success table-striped lead">
          <thead className="align-middle">
              <tr>
              <th scope="col">Matrícula</th>
              <th scope="col">Nome</th>
              <th scope="col">Data de Nascimento</th>
              <th scope="col">E-mail</th>
              <th></th>
              <th></th>
              <th></th>
              </tr>
          </thead>
          
          <tbody>
            {data?.map((user) => {
              return (
                <UsersTableList
                key={user?._id}
                id={user?._id}
                name={user?.name}
                birthday={user?.birthday}
                email={user?.email}
                onClickRemove={() => handleDeleteUser(user)}
                onClickEdit={() => handleOpenModal(user)}
                />
              )
            })}
          </tbody>
        </table>
      </span>
    </div>
  );
}

export default App;
