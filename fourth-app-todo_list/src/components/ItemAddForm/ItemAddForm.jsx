import React, { Component } from 'react'
import { PRIORITIES, STATUSES } from '../../constants/itemConstants';
import { generateOptions } from '../../helpers/itemGenerators';
import './ItemAddForm.css'

export default class ItemAddForm extends Component {
  state = {
    title: '',
    description: '',
    priority: PRIORITIES.LOW,
    status: STATUSES.TODO,
  };

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  saveItem = () => {
    const {title, description, status, priority} = this.state; 

    this.props.onAdd( { title, description, status, priority } );

    this.state.title = '';
    this.state.description = '';
  }

  render() {
    const {
      title,
      description,
      status,
      priority,
    } = this.state;

    return (
      <div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <textarea
              placeholder="Description"
              cols="45" rows="5"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </p>
          <div className='SelDiv'>
          <span className='Ptext'>
            <p>Priority </p>
            {generateOptions('priority', priority, PRIORITIES, this.handleChange)}
          </span>
          <span className='Ptext'>
            <p>Status </p>
            {generateOptions('status', status, STATUSES, this.handleChange)}
          </span>
          </div>
          <p>
            <button type="button" onClick={this.saveItem}>Save</button>
          </p>
        </form>
      </div>
    )
  }
}
