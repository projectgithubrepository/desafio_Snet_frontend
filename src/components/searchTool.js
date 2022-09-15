import React, { useState } from "react";
import Button from './button'
import axios from 'axios';

function SearchTool({setFilteredUsers}) {
    const [searchName, setSearchName] = useState()

    function handleFilterByName() {
        axios.get(`http://localhost:5000/users?name=${searchName}`).then((users) => {
            setFilteredUsers(users.data)
        })
    }

    return (
        <div className="d-flex justify-content-center gap-1 mb-1">
            <input 
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="rounded px-2 " 
                placeholder="digite o nome do usuário"
                style={{fontSize: "large"}}
            />
            <Button
                text="Pesquisar"
                type="button"
                classType="btn btn-primary btn-lg pt-2 pb-0"
                style={{fontWeight: "bold"}}
                handleClick={handleFilterByName}
            />
        </div>
        
    );
}

export default SearchTool;