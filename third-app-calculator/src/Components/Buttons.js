import React, { Component } from 'react';
import './Buttons.css';

class Calculator extends Component {

    render() {
        return (     
            <div className="Digits">
                
                <div className="Box">           
                    <button value="C" onClick={e => this.props.onClick(e.target.value)} className="Orange">C</button>           
                    <button value="DEL" onClick={e => this.props.onClick(e.target.value)} className="Orange">DEL</button>
                    <button value="√" onClick={e => this.props.onClick(e.target.value)} className="Orange">√</button>
                    <button value="^" onClick={e => this.props.onClick(e.target.value)} className="Orange">^</button>
                </div>

                <div className="Box">
                    <button value="Sin" onClick={e => this.props.onClick(e.target.value)} className="Orange">Sin</button>
                    <button value="Cos" onClick={e => this.props.onClick(e.target.value)} className="Orange">Cos</button>
                    <button value="Tg" onClick={e => this.props.onClick(e.target.value)} className="Orange">Tg</button>
                    <button value="%" onClick={e => this.props.onClick(e.target.value)} className="Orange">%</button> 
                </div>

                <div className="Box">
                    <button value="7" onClick={e => this.props.onClick(e.target.value)}>7</button>
                    <button value="8" onClick={e => this.props.onClick(e.target.value)}>8</button>
                    <button value="9" onClick={e => this.props.onClick(e.target.value)}>9</button>
                    <button value="+" onClick={e => this.props.onClick(e.target.value)} className="Orange">+</button>
                </div>

                <div className="Box">
                    <button value="4" onClick={e => this.props.onClick(e.target.value)}>4</button>
                    <button value="5" onClick={e => this.props.onClick(e.target.value)}>5</button>
                    <button value="6" onClick={e => this.props.onClick(e.target.value)}>6</button>
                    <button value="-" onClick={e => this.props.onClick(e.target.value)} className="Orange">-</button>
                </div>

                <div className="Box">           
                    <button value="1" onClick={e => this.props.onClick(e.target.value)}>1</button>
                    <button value="2" onClick={e => this.props.onClick(e.target.value)}>2</button>
                    <button value="3" onClick={e => this.props.onClick(e.target.value)}>3</button>
                    <button value="*" onClick={e => this.props.onClick(e.target.value)} className="Orange">*</button>
                </div>

                <div className="Box">
                    <button value="." onClick={e => this.props.onClick(e.target.value)} className="Orange">.</button>
                    <button value="0" onClick={e => this.props.onClick(e.target.value)} >0</button>
                    <button value="=" onClick={e => this.props.onClick(e.target.value)} className="Orange">=</button>
                    <button value="/" onClick={e => this.props.onClick(e.target.value)} className="Orange">/</button>
                </div>

            </div>
        );
    }
}

export default Calculator;