import './AddContact.css'
import { Link } from 'react-router-dom';
import React from 'react'

function AddContact({ addInfo, addNewContact }) {

    return (
        <div className="Item">
            <div id='Error'>Error. Complete all fields.</div>
            <div className="BoxWrap">
                <h2>Add contact</h2>
                <h3>Name</h3>
                <input name="name" onChange={addInfo} type="text" />
            </div>
            <div className="BoxWrap">
                <h3>Surname</h3>
                <input name="surname" onChange={addInfo} type="text" />
            </div>
            <div className="BoxWrap">
                <h3>Number phone</h3>
                <input name="phone" onChange={addInfo} type="number" />
            </div>
            <button name='contacts' onClick={addNewContact} className='butSave'>Save</button>
            <button name='contacts' className='butCancel'> <Link to="/">Back</Link> </button>
        </div>
    )
}

export default AddContact;