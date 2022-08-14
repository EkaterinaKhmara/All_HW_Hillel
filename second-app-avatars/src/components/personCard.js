import { Component } from "react";
import './personCard.css';

class PersonCard extends Component {

  render() {
    return (
        <div className="Card">

        <div className="PicBox">
          <img src = {this.props.data.src} alt="" /> 
        </div>

        <div className="InfoBox">
          <span><p>Name: </p>{this.props.data.name}</span>
          <span><p>Age: </p>{this.props.data.age}</span>
          <span><p>Sex: </p>{this.props.data.sex}</span>
        </div>

      </div>
    )
  }
}

export default PersonCard;