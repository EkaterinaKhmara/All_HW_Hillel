import './ModalWindow.css';
import React from 'react'

function ModalWindow({ delCont, modElem, modText }) {
    return (
        <div className={modElem.modal ? 'Modal Visible' : 'Modal' }>
            <div className="ModBox"></div>
            <div className="BoxText">
                <h3>{modText}</h3>
                <div>
                    <button name='yes' onClick={delCont} type='button'>Yes</button>
                    <button name="no" onClick={delCont} type='button'>No</button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;