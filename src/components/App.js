import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <h1>Hello, Fuckers</h1>

    );
  }
}
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <SideBoard />
    <MainBoard />
  </div>
)

export default App
