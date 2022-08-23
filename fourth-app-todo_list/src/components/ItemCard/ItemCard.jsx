import { Component } from 'react'
import { func, string } from 'prop-types';
import { generateOptions } from '../../helpers/itemGenerators';
import { PRIORITIES, STATUSES } from '../../constants/itemConstants';
import './ItemCard.css'
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

export default class ItemCard extends Component {

  state = {
    titleEditMode: false,
    descriptionEditMode: false,
    priorityEditMode: false,
    statusEditMode: false,
    isOnDelete: false
  };

  handleDeleteClick = () => {
      this.setState({ isOnDelete: true });
  }

  handleEditModeOn = (event) => {
    this.setState({
      [`${event.target.getAttribute('name')}EditMode`]: true,
    });
  }

  handleBlur = (event) => {
    this.setState({
      [`${event.target.getAttribute('name')}EditMode`]: false,
    });
    console.log(this.props.title);
  }

  handleChange = (event) => {
    this.props.onUpdate(this.props.id, { [event.target.name]: event.target.value });
  }


//  emptyOrNo = () => {
//    if (!this.state.title){
//     this.state.title = 'dfdf'
//     console.log(this.props.title);
//   }
//  }



  render() {

    const {
      titleEditMode,
      descriptionEditMode,
      priorityEditMode,
      statusEditMode,
    } = this.state;

    let {
      title,
      description,
      status,
      priority,
    } = this.props;

    if(!title.length){
      title = 'My NEW task'
    } 
    
    if(!description.length){
      description = 'Lorem ipsum dolor imet blablabla'
    }

    return (
      !this.state.isOnDelete && <div className="ItemCard">
        {!this.state.titleEditMode && <p onClick={this.handleEditModeOn} name="title">{title}</p>}
        {titleEditMode && (
          <p>
            <input
              type="text"
              value = {title} 
              name="title"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
            />
          </p>
        )}

        {!descriptionEditMode && <p onClick={this.handleEditModeOn} name="description">{description}</p>}
        {descriptionEditMode && (
          <p>
            <textarea
              onBlur={this.handleBlur}
              value={description}
              name="description"
              onChange={this.handleChange}
            />
          </p>
        )}
        <div className='SelDiv'>
          {!priorityEditMode && <p onClick={this.handleEditModeOn} name="priority">{priority}</p>}
          {priorityEditMode && (
            <p
              defaultValue={priority}
              onBlur={this.handleBlur}
              name="priority"
              onChange={this.handleChange}>
              {generateOptions('priority', priority, PRIORITIES)}
            </p>
          )}

          {!statusEditMode && <p onClick={this.handleEditModeOn} name="status">{status}</p>}
          {statusEditMode && (
            <p
              defaultValue={status}
              name="status"
              onBlur={this.handleBlur}
              onChange={this.handleChange}>
              {generateOptions('status', status, STATUSES)}
            </p>
          )}
        </div>
        <button value={this.state.isOnDelete} onClick={this.handleDeleteClick}>Delete</button>
      </div>
    );
  }
}

ItemCard.propTypes = {
  id: (string, Number),
  title: string,
  description: string,
  priority: string,
  status: string,
  onUpdate: func,
};


ItemCard.defaultProps = {
  title: 'My NEW task',
  description: 'Lorem ipsum dolor imet blablabla',
  status: 'To do',
  priority: 'High',
};

