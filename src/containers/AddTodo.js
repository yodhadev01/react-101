import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'//will fetch index.js file if no file specified


/*if connect method doesnt contain mapStateToProps, mapDispatchToProps 
then default args recived in function is dispatch*/ 
const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)