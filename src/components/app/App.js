import { Component } from 'react';

import NewTaskForm from '../newTaskForm/NewTaskForm';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';

import { getFilteredItems } from '../../helpers/getFilteredItems';

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
        const filteredTodos = getFilteredItems(todos, filter)

        return(
            <div className='todoapp'>
                <NewTaskForm onAdd={this.onAdd}/>
                <div className='main'>
                    <TaskList 
                    todos={filteredTodos}
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