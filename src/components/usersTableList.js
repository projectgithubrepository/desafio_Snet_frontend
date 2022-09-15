import React from "react";
import Button from './button'

function UsersTableList({ id, name, birthday, email, password, onClickRemove, onClickEdit }) {
  return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{birthday}</td>
                <td>{email}</td>
                <td>{password}</td>
                
                <td>
                  <Button
                  text="Editar"
                  type="button"
                  classType="btn btn-warning btn-lg pt-2 pb-0"
                  style={{width: "100%", fontWeight: "bold"}}
                  handleClick={onClickEdit}
                  />
                </td>
                <td>
                  <Button
                  text="Remover"
                  type="button"
                  classType="btn btn-danger btn-lg pt-2 pb-0"
                  style={{width: "100%", fontWeight: "bold"}}
                  handleClick={onClickRemove}
                  />
                </td>
            </tr>
        </>
  );
}

export default UsersTableList;

