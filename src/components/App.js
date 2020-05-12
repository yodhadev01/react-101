import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

//data send into props
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList data={"sending props via function test"}/>
    <Footer />
  </div>
)

export default App