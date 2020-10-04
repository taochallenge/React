import React, { Component } from 'react'
import List from './List';
import Input from './Input';

export default class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            inpValue: '',
            todos:[]
        }
    }
    handleChange = (e)=>{
        this.setState({inpValue:e.target.value});
    }
    componentDidMount(){
        let todos = localStorage.getItem('todos');
        if(todos){
            this.setState({
                todos: JSON.parse(todos)
            })
        }
    }

    componentDidUpdate(){
        localStorage.setItem(
            'todos',
            JSON.stringify(this.state.todos)
        )
    }
    addTodo = () => {
        if(this.state.inpValue){
            this.setState({
                todos: 
                [
                    {
                        title:this.state.inpValue,
                        done: false
                    },
                    ...this.state.todos
                ]
            })
            this.setState({inpValue:''});//添加完成后删除输入框里的东西
        }
    }
    delTodo = (idx)=>{
        this.setState({
            todos:this.state.todos.filter((item,index)=>index!=idx)
        });
    };
    toggle = (index)=>{
        let newTodos = JSON.parse(JSON.stringify(this.state.todos));
        newTodos[index].done = !newTodos[index].done;
        this.setState({
            todos:newTodos
        });
    };
    
    render() {
        const {todos,inpValue} = this.state;
        return (
            <div>
                <Input 
                    inpValue={inpValue} 
                    handleChange={this.handleChange}
                    addTodo={this.addTodo}
                />
                <List 
                    todos={todos} 
                    toggle={this.toggle}
                    delTodo={this.delTodo}
                />
            </div>
        )
    }
}
