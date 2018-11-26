import React, { Component } from 'react';

export default class TodoItem extends Component {

    render() {
        return (
            <div >

                <li class="listofitems">{this.props.thing.text}
                    <button onClick={() => {
                        console.log("delete")
                        this.props.deleteTodo(this.props.thing.id)

                    }}>
                        Finished
                </button></li>

            </div>
        )

    }
}