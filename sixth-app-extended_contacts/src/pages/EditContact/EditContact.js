import { Link } from "react-router-dom";
import React from 'react';
import { useState, useEffect } from "react";

function EditContact({ addInfo, addNewContact, contForEdit, setContact }) {

    const [input, setInput] = useState({
        name: contForEdit.name,
        surname: contForEdit.surname,
        phone: contForEdit.phone.replace(/[^0-9]/g,''),
        id: contForEdit.id,
    });

    useEffect(() => {
        setContact({
            ...input
        })
    }, [contForEdit])

    const inputOnChange = (e) => {
        addInfo(e);
        if (e.target.name == 'name') {
            setInput({
                ...input,
                name: e.target.value,
            })
        }
        if (e.target.name == 'surname') {
            setInput({
                ...input,
                surname: e.target.value,
            })
        }
        if (e.target.name == 'phone') {
            setInput({
                ...input,
                phone: e.target.value,
            })
        }
    }

    return (
        <div className="Item">
            <div id='Error'>Error. Complete all fields.</div>
            <div className="BoxWrap">
                <h2>Edit contact</h2>
                <h3>Name</h3>
                <input value={input.name} name="name" onChange={inputOnChange} type="text" />
            </div>
            <div className="BoxWrap">
                <h3>Surname</h3>
                <input value={input.surname} name="surname" onChange={inputOnChange} type="text" />
            </div>
            <div className="BoxWrap">
                <h3>Number phone</h3>
                <input value={input.phone} name="phone" onChange={inputOnChange} type="number" />
            </div>
            <button name='contacts' onClick={addNewContact} className='butSave'>Save</button>
            <button name='contacts' className='butCancel'> <Link to="/">Back</Link> </button>
        </div>
    )
}

export default EditContact;