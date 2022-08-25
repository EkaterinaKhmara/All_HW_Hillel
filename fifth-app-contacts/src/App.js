import './App.css';
import Contact from './Components/Contact.js';
import { useState, useEffect } from 'react';

const tabs = {
  contacts: 'contacts',
  addContact: 'addContact',
};

function App() {

  const [curTab, setCurTab] = useState(tabs.contacts);

  let [data, setData] = useState([]);
  const [contact, setContact] = useState({
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

  const showTab = (e) => {
    if (e.target.name === 'contacts') {
      setCurTab(tabs.contacts)
    }
    if (e.target.name === 'addContact') {
      setCurTab(tabs.addContact)
    }
  }

  const addInfo = (e) => {
    if (e.target.name === 'name') {
      setContact({
        ...contact,
        name: e.target.value
      })
    }
    if (e.target.name === 'surname') {
      setContact({
        ...contact,
        surname: e.target.value
      })
    }
    if (e.target.name === 'phone') {
      setContact({
        ...contact,
        phone: e.target.value
      })
    }
  }

  const delCont = (e) => {
    let el = data.find(item => item.id === +e.target.id);
    setData(data.filter(e => e !== el));
  }
  
  const divError = () => {
    document.getElementById('Error').style.display = 'block'
  }

  const addNewContact = () => {
    if (name && surname && phone) {
      const contact = {
        id: Date.now(),
        name: name + ' ' + surname,
        phone: phone,
      }
      data.push(contact);
      setContact({
        name: null,
        surname: null,
        phone: null,
      })
      setCurTab(tabs.contacts);
    } else {
      divError()
    }
  }

  return (
    <div className="App">
      <div className="Panel">
          <button name='contacts' onClick={showTab}>All Contacts</button>
          <button name='addContact' onClick={showTab}>Add NEW contact</button>
      </div>
      <div className="Box">
        <div className="Item">
          {curTab === 'contacts' && <Contact delCont={delCont} contacts={data} />}
        </div>
        {curTab === 'addContact' && <div className="Item">
          <div className="BoxWrap">
          <div id='Error'>Error. Complete all fields.</div>
            <h3>First Name</h3>
            <input name="name" onChange={addInfo} type="text" />
          </div>
          <div className="BoxWrap">
            <h3>Last Name</h3>
            <input name="surname" onChange={addInfo} type="text" />
          </div>
          <div className="BoxWrap">
            <h3>Phone</h3>
            <input name="phone" onChange={addInfo} type="number" />
          </div>
          <button name='contacts' className='butSave' onClick={addNewContact}>Save</button>
          <button name='contacts' className='butCancel' onClick={showTab}>Cancel</button>
        </div>}
      </div>
    </div>
  );
}

export default App;
