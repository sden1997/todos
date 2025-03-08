import { Component } from 'react';

import NewTaskForm from '../newTaskForm/NewTaskForm';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';

class App extends Component {

    state = {
        todos: [],
        filter: 'All'
        }

        maxId = 0;

    onAdd = (value) => {
        const data = {
            value,
            checked: false,
            id: ++this.maxId,
            date: new Date(),
        }
        this.setState(({todos}) => {
            const newTodos = [...todos, data];
            return {
                todos: newTodos
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({todos}) => ({
            todos: todos.filter(item => item.id !== id)
        }))
    }

    filteredItems = () => {
        const {todos, filter} = this.state;
        return (
            todos.filter(({checked}) => {
                if (filter === 'All') {
                    return true
                } else if (filter === 'Completed') {
                    return checked === true
                } else {
                    return checked === false
                }
            })
        )
    }

    onUpdateItem = (id, field, newValue) => {
        this.setState(({todos}) => ({
            todos: todos.map((item) => {
                if (item.id === id) {
                    return {...item, [field]: newValue}
                };
                return item;
            })
        }))
    }

    clearCompleted = () => {
        this.setState(({todos}) => {
            const completedTodos = todos.filter(item => !item.checked)
            return {
                todos: completedTodos
            }
        })
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }


    render() {
        const {todos, filter} = this.state
        const numberLefts = todos.filter(item => !item.checked).length

        return(
            <div className='todoapp'>
                <NewTaskForm onAdd={this.onAdd}/>
                <div className='main'>
                    <TaskList 
                    todos={this.filteredItems()}
                    onUpdateItem={this.onUpdateItem}
                    onDelete={this.deleteItem}/>
                    <Footer 
                    numberLefts={numberLefts}
                    clearCompleted={this.clearCompleted}
                    onFilterSelect={this.onFilterSelect}
                    filter={filter}/>
                </div>
            </div>
        )
    }
}


export default App