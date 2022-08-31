import './Contacts.css';
import ModalWindow from '../../components/ModalWindow.js';
import { Link } from 'react-router-dom';


function Contacts({ contacts, delCont, modElem, setModElem, handleCurElem }) {
    const delContItem = (e) => {
        setModElem({
            modal: true,
            elemId: e.target.id,
        })
        if (e.target.name == 'yes') {
            setModElem({
                ...modElem,
                modal: false,
            })
            delCont(modElem.elemId);
        }
        if (e.target.name == 'no') {
            setModElem({
                modal: false,
            })
        }
    }

    return (
        <div>
            <ModalWindow delCont={delContItem} modText='Are you sure?' modElem={modElem} />
            <div className="Contacts">
                <div className='colName'>
                    <h3>Name</h3>
                    {contacts.map(e => {
                        return <span key={e.id}>{e.name.split(' ')[0]}</span>
                    })}
                </div>
                <div>
                    <h3>Surname</h3>
                    {contacts.map(e => {
                        return <span key={e.id}>{e.name.split(' ')[1]}</span>
                    })}
                </div>
                <div>
                    <h3>Number phone</h3>
                    {contacts.map(e => {
                        return <span key={e.id}>{e.phone.replace(/[^0-9]/g,'')}</span>
                    })}
                </div>
                <div className='colFunc'>
                    <h3>.</h3>
                    {contacts.map(e => {
                        return (
                            <span key={e.id} className='butSpan'>
                                <button type='button' onClick={delContItem} id={e.id}>Delete</button>
                                <button type='button' className='editBut'>
                                    <Link onClick={handleCurElem} id={e.id} key={e.id} to={`/${e.id}`}>Edit</Link>
                                </button>
                            </span>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Contacts;