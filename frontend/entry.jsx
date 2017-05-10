import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import store from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<Root/>, root)
  console.log('hi')
  window.store = store
})
