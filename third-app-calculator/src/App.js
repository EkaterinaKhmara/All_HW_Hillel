import { Component } from 'react';
import './App.css';
import Calculator from './Components/Buttons.js';
import Result from './Components/Result.js';

class App extends Component {

  stateAll = false;

  constructor(props) {
    super(props);

    this.state = {
      prevState: '',
      curState: '',
      symbolState: '',
      resState: '',
    }
  }

  updateResult = (btn) => {
    const symbolRegexer = /[/+--*%^√sqrtcossintg]/;
    const numRegexer = /[0-9]/;

    if (btn === 'C') {
      this.stateAll = false;
      this.setState({
        resState: '',
        prevState: '',
        curState: '',
        symbolState: ''
      })
    }
    else if (btn === '.') {
      this.stateAll = false;
      if (this.state.curState === '') {
        if (this.itemCounter(this.state.prevState, '.') > 0) return;
          this.setState({
            prevState: this.state.prevState + btn,
            resState: this.state.resState + btn
          })
        } else {
          if (this.itemCounter(this.state.curState, '.') > 0) return;
            this.setState({
              curState: this.state.curState + btn,
              resState: this.state.resState + btn
          })
        }
    }
    else if (btn.match(numRegexer)) {
      if (this.stateAll) {
        this.reset();
        this.setState({
          prevState: btn,
          resState: btn
        });
      } else {
        if (this.state.symbolState === '') {
          this.setState({
            prevState: this.state.prevState + btn,
            resState: this.state.resState + btn
          })
        }
        else if (this.state.prevState !== '' && this.state.curState === '' && this.state.symbolState !== '') {
          this.setState({
            curState: this.state.curState + btn,
            resState: this.state.resState + btn
          })
        } else {
          this.setState({
            curState: this.state.curState + btn,
            resState: this.state.resState + btn
          })
        }
      } 
        this.stateAll = false;
    }
    else if (btn.match(symbolRegexer)) {
      this.stateAll = false;
        if (btn === '√' && this.state.prevState === '') {
          this.setState({
            prevState: 2,
            symbolState: this.state.symbolState + btn,
            resState: this.state.resState + btn
          })
        } 
        else if (this.state.symbolState !== '' && this.state.curState === '') { 
          this.setState({
            symbolState: btn,
            resState: this.state.resState.slice(0, -1) + btn
          })
        } else if(this.state.prevState !== '' && this.state.symbolState !== '' && this.state.curState !== '') {
          this.setState({
            resState: this.calc(+this.state.prevState, +this.state.curState, this.state.symbolState) + btn,
            prevState: this.calc(+this.state.prevState, +this.state.curState, this.state.symbolState),
            symbolState: btn,
            curState: ''
          })
        } 
        else if (this.state.symbolState !== '') {
          this.setState({
            prevState: this.calc(+this.state.prevState, +this.state.curState, this.state.symbolState),
            resState: this.calc(+this.state.prevState, +this.state.curState, this.state.symbolState) + btn
          })
            if (this.state.prevState !== '' && this.state.curState !== '') {
              this.setState({
                symbolState: btn
              })
            }
            else if (this.state.curState === '') {
              this.setState({
                curState: this.state.curState + btn
              })
            }
          } 
          else if(this.state.symbolState === '') {
            this.setState({
              symbolState: this.state.symbolState + btn,
              resState: this.state.resState + btn
            })
          } else {
            this.setState({
              symbolState: this.state.symbolState
            })
          }
    }
    else if (btn === '=') {
      this.stateAll = true;
      this.reset();
      this.setState({
        resState: this.calc(+this.state.prevState, +this.state.curState, this.state.symbolState),
        prevState: this.calc(+this.state.prevState, +this.state.curState, this.state.symbolState)
      })
    }
    else if (btn === 'DEL') {
      if(this.stateAll){
        this.reset();
        this.stateAll = false;
        return
      }
      this.stateAll = false;
      this.state.resState = this.state.resState.substring(0, this.state.resState.length - 1)
          if (this.state.resState.match(symbolRegexer)) {
            if (!this.state.curState.length) {
              this.setState({
                curState: ''
              })
            } else {
              this.setState({
                curState: this.state.curState.slice(0, -1)
              })
            }
            this.setState({
              resState: this.state.resState,
            })
          } else {
            this.setState({
              symbolState: '',
              prevState: this.state.resState,
              curState: ''
            })
          }
    } else {
      this.setState({
        resState: this.state.resState + btn
      })
    }
  }

  itemCounter = (item, det) => {
    let count = 0;
    for (let i = 0; i < item.length; i++) {
      if(item[i] === det){
        count++;
      }
    }
    return count;
  }

  reset = () => {
    this.setState({
      resState: '',
      curState: '',
      prevState: '',
      symbolState: ''
    })
  }

  calc = (prev, cur, symbol) => {
    let res;
    switch (symbol) {
      case '+':
        res = prev + cur;
        break;
      case '-':
        res = prev - cur;
        break;
      case '*':
        res = prev * cur;
        break;
      case '/':
        res = prev / cur;
        break;
      case '%':
        res = prev / 100 * cur;
        break;
      case '^':
        res = prev ** cur;
        break;
      case '√':
        res = cur ** (1 / prev)
        break;
      case 'Sin':
        res = Math.sin(cur);
        break;
      case 'Cos':
        res = Math.cos(cur);
        break;
      case 'Tg':
        res = Math.tan(cur);
        break;
      case '':
        res = prev;
        break;
      default:
        res = 'error'
        break;
    }
    return res;
  }

  render() {
    return (
      <div className="Main">
        <Result result={this.state.resState} />
        <Calculator onClick={this.updateResult} />
      </div>
    )
  }
}

export default App;