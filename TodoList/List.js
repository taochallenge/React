import React, { Component } from 'react'

export default class List extends Component{
    renderTodos=(done)=>{
        return this.props.todos.map((todo,idx)=>{
            if(done==todo.done){
                return <li key={todo.title}>
                    <input 
                        onClick={()=>this.props.toggle(idx)}
                        checked={done} 
                        type='checkbox'
                    />
                    <span dangerouslySetInnerHTML={{__html:todo.title}}></span>
                    <button 
                        onClick={()=>this.props.delTodo(idx)}
                    >
                        删除
                    </button>
                </li>
            }
        })
    };
    render(){
        let arr1 = this.props.todos.filter(item=>!item.done);
        let arr2 = this.props.todos.filter(item=>item.done);
        return (
            <div>
                <h2>正在进行{arr1.length}</h2>
                <ul>
                    {this.renderTodos(false)}
                </ul>
                <h2>已经完成{arr2.length}</h2>
                <ul>
                    {this.renderTodos(true)}
                </ul>
            </div>
        )   
    }
}

