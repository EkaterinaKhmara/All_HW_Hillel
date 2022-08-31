import './App.css';
import Contacts from './pages/Contacts/Contacts.js'
import AddContact from './pages/AddContact/AddContact.js';
import EditContact from './pages/EditContact/EditContact.js';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {

  let navigate = useNavigate();

  let [data, setData] = useState([]);

  const [contact, setContact] = useState({
    id: null,
    name: null,
    surname: null,
    phone: null,
  });

  const { name, surname, phone } = contact;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json()).then(data => {
        setData(data);
      });
  }, []);

  const [curContact, setCurContact] = useState(false);

  const addInfo = e => setContact({ ...contact, [e.target.name]: e.target.value });

  const [modElem, setModElem] = useState({
    modal: false,
    elemId: null,
  });

  const delCont = (e) => {
    let elem = data.find(el => el.id == e);
    setData(data.filter(e => e != elem));
  }

  const handleCurElem = (e) => {
    let curId = e.target.id;
    let curEl = data.find(el => el.id == curId);
    let newData = data.filter(el => el.id != curId);
    setData([...newData])
    setContact({
      id: curId,
    })
    setCurContact({
      id: curEl.id,
      name: curEl.name.split(' ')[0],
      surname: curEl.name.split(' ')[1],
      phone: curEl.phone,
    })
  }
   
  const home = () => {
    navigate('/')
  }

  const divError = () => {
    document.getElementById('Error').style.display = 'block'
  }

  const addNewContact = () => {
    if (name && surname && phone) {
      const newContact = {
        id: Date.now(),
        name: name + ' ' + surname,
        phone: phone,
      }
      if (contact.id != null) {
        newContact.id = +contact.id;
      }
      data.push(newContact);
      sortData(data)
      setContact({
        id: null,
        name: null,
        surname: null,
        phone: null,
      })
      home();
    } else {
      divError()
    }
    setData(uniqData(data));
  }

  const uniqData = (data) => {
    return [...new Set(data.map(el => JSON.stringify(el)))].map(res => JSON.parse(res))
  }

  const sortData = (data) => {
    data.sort(function (x, y) {
      return (x.id - y.id);
    })
  }

  return (
      <div className="App">
        <div className="Panel">
            <button> <Link to="/">Contacts</Link> </button>
            <button> <Link to="/addContact">Add Contact</Link> </button>
        </div>
        <div className="Box BoxItem">
          <Routes>
            <Route path="/" element={<Contacts delCont={delCont} contacts={data} modElem={modElem}
              handleCurElem={handleCurElem} setModElem={setModElem} />} />
            <Route path="/addContact" element={<AddContact modElem={modElem} setModal={setModElem}
              addInfo={addInfo} addNewContact={addNewContact} />} />
            <Route path="/:id" element={<EditContact modElem={modElem} setModal={setModElem} setContact={setContact} 
              contForEdit={curContact} addInfo={addInfo} addNewContact={addNewContact} />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;