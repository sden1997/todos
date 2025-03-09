import { Component } from "react";
import PropTypes from 'prop-types';

import { buttonsData } from "./tasksFilter.constants";
import './tasksFilter.css'



class TasksFilter extends Component {
    render() {

        const {filter, onFilterSelect} = this.props

        return (
            <ul className="filters">
                {buttonsData.map(({name, label}) => (
                    <li key={name}>
                    <button
                        type="button"
                        className={filter === name ? 'selected' : null}
                        onClick={() => onFilterSelect(name)}>
                    {label}
                    </button>
                    </li>
                ))}
            </ul>
        )
    }
}

TasksFilter.propTypes = {
    filter: PropTypes.string,
    onFilterSelect: PropTypes.func
}

TasksFilter.defaultProps = {
    filter: 'All'
}

export default TasksFilter;