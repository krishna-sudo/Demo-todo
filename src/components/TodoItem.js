import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return{
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     console.log('test')
        //     return{
        //         textDecoration: 'none'
        //     }
        // }


        // using conditional operator
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted gray',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }        
    }
    render() {
        const { id,title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title} 
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//Define proptypes
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired
}

//add style to button
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
}

export default TodoItem
