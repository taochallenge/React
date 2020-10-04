import React, { Component } from 'react'

export default class Input extends Component{
    render(){
        return (
            <div>
                <label htmlFor='inp'>
                    todoList
                </label>
                <input 
                    type='text'
                    id='inp'
                    ref={inp=>this.input = inp}
                    value={this.props.inpValue}
                    onChange={this.props.handleChange}
                    placeholder="添加ToDo"
                /> 
                <button onClick={this.props.addTodo}>
                    添加
                </button>
            </div>
        ) 
    }
}
