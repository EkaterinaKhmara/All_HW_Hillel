import { Component } from 'react';
import ItemAddForm from './components/ItemAddForm/ItemAddForm';
import ItemCard from './components/ItemCard/ItemCard';
// this can be used instead of state items (then we have to use forceUpdate)
// import items from './db/db.json';


export default class App extends Component {
  state = {
    items: {
      1: {
        "id": "1",
        "title": "Title",
        "description": "Description",
        "status": "To do",
        "priority": "Minor"
      },
      2: {
        "id": "2",
        "title": "Title1",
        "description": "Description1",
        "status": "To do",
        "priority": "High"
      },
      3: {
        "id": "3",
        "title": "Title2",
        "description": "Description2",
        "status": "To do",
        "priority": "Low"
      }
    },
  };

  handleItemsUpdate = (id, { title, description, status, priority }) => {
    const searchItem = {
      ...this.state.items[id],
    };

    if (title) {
      searchItem.title = title;
    }

    if (description) {
      searchItem.description = description;
    }

    if (status) {
      searchItem.status = status;
    }

    if(priority) {
      searchItem.priority = priority;
    }

    this.setState({
      items: {
        ...this.state.items,
        [id]: searchItem,
      }
    });
  };

  handleAddItem = item => {
    const id = Date.now();
    const newItem = {
      id,
      ...item,
    };
    this.setState({ items: {
      ...this.state.items,
      [id]: newItem,
    } })
  };

  render() {
    return (
      <div>
        <ItemAddForm
            onAdd={this.handleAddItem}
            onUpdate={this.handleItemsUpdate}
          />

        <div className="cards-block">
          {Object.values(this.state.items).map(item => (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              status={item.status}
              priority={item.priority}
              onUpdate={this.handleItemsUpdate}
            />
          ))}
        </div>
      </div>
    )
  }
}