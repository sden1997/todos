import { Component } from "react";
import PropTypes from 'prop-types';


import './tasksFilter.css'



class TasksFilter extends Component {

   
    render() {

        const {filter, onFilterSelect} = this.props

        const buttonsData = [
            {name: 'All', label: 'All'},
            {name: 'Active', label: 'Active'},
            {name: 'Completed', label: 'Completed'},

        ]

        const buttons = buttonsData.map(({name, label}) => {
            const active = filter === name;
            const clazz = active ? 'selected' : null
            return (
                <li key={name}>
                    <button
                        type="button"
                        className={clazz}
                        onClick={() => onFilterSelect(name)}>
                    {label}
                    </button>
                </li>
             
            )
        })


        return (
            <ul className="filters">
                {buttons}
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