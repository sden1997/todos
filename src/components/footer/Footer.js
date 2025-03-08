import { Component } from "react";
import PropTypes from 'prop-types';

import './footer.css';
import TasksFilter from "../tasksFilter/TasksFilter";


class Footer extends Component {
    render() {

        const {numberLefts, clearCompleted, onFilterSelect, filter} = this.props

        return (
            <footer className="footer">
                <span className="todo-count">{numberLefts} items left</span>
                <TasksFilter filter={filter} onFilterSelect={onFilterSelect}/>
                <button type="button" className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            </footer>
        )
    }
}

Footer.defaultProps = {
    numberLefts: 0,
    filter: 'All'
}

Footer.propTypes = {
    numberLefts: PropTypes.number,
    clearCompleted: PropTypes.func,
    onFilterSelect: PropTypes.func,
    filter: PropTypes.string
}

export default Footer;