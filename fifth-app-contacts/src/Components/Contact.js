import './Contact.css';

export default function Contact({ contacts, delCont }) {

    return (
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
                    return <span key={e.id}>{e.phone.split('x')}</span>
                })}
            </div>
            <div className='colFunc'>
                <br></br>
                <br></br>
                <br></br>
                {contacts.map(e => {
                    return <span key={e.id} className='butSpan'>
                                <button type='button' onClick={delCont} id={e.id} key={e.id}>Delete</button>
                            </span>
                })}
            </div>
        </div>
    )
}