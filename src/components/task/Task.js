import { Component } from "react";
import PropTypes from 'prop-types';

import { formatDistanceToNow } from "date-fns";

import './task.css'

class Task extends Component {

    state = {
        mode: 'read',
        value: '',
    }

    handleEdit = () => { // Метод для начала редактирования
        this.setState({
            mode: 'edit',
            value: this.props.item.value
        })
    }

    handleSubmit = (event) => { // Метод для обработки отправки формы
        event.preventDefault();
        const {onUpdateItem, item} = this.props;
        if (this.state.value.trim()) { // Проверка на пустое значение
            onUpdateItem(item.id, 'value' , this.state.value); // Вызов функции для обновления задачи
            this.setState({ // Сброс состояния
                mode: 'read',
                value: ''
            })
        }
    }

    handleChange = (event) => { // Метод для изменения значения в поле ввода
        this.setState({
            value: event.target.value
        })
    }


    render() {
        const {onUpdateItem, item, onDelete} = this.props;
        const {value, id, checked, date} = item;
        
        let className = null;
        if (checked) {
            className = 'completed'
        }
        if (this.state.mode === 'edit') {
            className = 'editing'
        }

        return (
            <li className={className}>
                <div className="view">
                    <input 
                    id={id}
                    className="toggle" 
                    type="checkbox"
                    onChange={(event) => onUpdateItem(id, 'checked', event.target.checked)} 
                    checked={checked}/>
                    <label htmlFor={id}>
                        <span className="description">{value}</span>
                        <span className="created">created {formatDistanceToNow(date)} ago</span>
                    </label>
                    <button className="icon icon-edit" onClick={this.handleEdit}/>
                    <button className="icon icon-destroy" onClick={() => onDelete(id)}/>
                </div>
                { this.state.mode === 'edit' ? (
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="edit"
                            value={this.state.value}
                            onChange={this.handleChange}
                            autoFocus
                            onBlur={() => this.setState({ mode: 'read' })} // Закрытие редактирования при потере фокуса
                            />

                    </form>
                ) : null}
            </li>
        )
    }
}

Task.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
        checked: PropTypes.bool,
        date: PropTypes.instanceOf(Date), 
    }),
    onUpdateItem: PropTypes.func,
    onDelete: PropTypes.func
}



export default Task;