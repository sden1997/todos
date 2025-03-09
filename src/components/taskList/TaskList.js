import { Component } from "react";
import PropTypes from 'prop-types';

import Task from '../task/Task'

import './taskList.css'

class TaskList extends Component {

    render() {

        const {todos, onUpdateItem, onDelete} = this.props;

        return (
            <ul className="todo-list">
                {todos.map((item) => (
                    <Task 
                        key={item.id}
                        item={item}
                        onUpdateItem={onUpdateItem}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        )
    }
}


TaskList.propTypes = {
    todos: PropTypes.any,
    onUpdateItem: PropTypes.func,
    onDelete: PropTypes.func
}


export default TaskList;