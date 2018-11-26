import React, { Component } from 'react';
import TodoItem from '../todo-item/TodoItem'
export default class TodoList extends Component {
    render()  {
            const todoNode = this.props.todos.map( (todo) => {
                return (<TodoItem thing={todo} key={todo.id} todo={todo} {...this.props} />)
            })

            return (<ul>{todoNode}</ul>)
    }
}