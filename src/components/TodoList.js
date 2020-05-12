import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

/*
here is you pass mapStateToProps, mapDispatchToProps in connect method 
then it will not work like containers/todo.js 
(TodoList.js was calling from container/VisiblleTodoList.js)

here props(a) is accepting redux values and parent function Data 
parent data send from components/App.js 
*/
const TodoList = (a) => {
  let todos =  a.todos
  let toggleTodo = a.toggleTodo
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  )
  }

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList