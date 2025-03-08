import { Component } from "react";
import PropTypes from 'prop-types';


import './newTaskForm.css'


class NewTaskForm extends Component {

        state = {
            value: '',
        }

    onSubmit = (event) => {
        event.preventDefault();
        const {value} = this.state
        if (value.trim()) {
            this.props.onAdd(value)
            this.setState({
                value: ''
            })
        }
    }

    onValueChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }


    render() {

        return (
            <form className="header" onSubmit={this.onSubmit}>
                <h1>Todos</h1>
                <label>
                <input className="new-todo" 
                    type="text"
                    placeholder="What needs to be done?" 
                    autoFocus
                    onChange={this.onValueChange} 
                    value={this.state.value} />
                </label>
            </form>           
        )
    }
}

NewTaskForm.propTypes = {
    onAdd: PropTypes.func
}



export default NewTaskForm;