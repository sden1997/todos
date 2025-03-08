import { Component } from "react";
import PropTypes from 'prop-types';

import Task from '../task/Task'

import './taskList.css'

class TaskList extends Component {

    render() {

        const {todos, onUpdateItem, onDelete} = this.props;
        const elements = todos.map((item) => {
            return (
                <Task 
                key={item.id}
                item={item}
                onUpdateItem={onUpdateItem}
                onDelete={onDelete}
                />
            )
        })

        return (
            <ul className="todo-list">
                {elements}
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