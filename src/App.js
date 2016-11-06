// src/App.js
// import React from 'react'
// import Title from './components/Title'
// import './App.sass'
//
// class App extends React.Component {
//   render() {
//     return (
//       <Title label="Scoreboard" />
//     )
//   }
// }
//
// export default App

import React from 'react'
import Scoreboard from './containers/Scoreboard'

class App extends React.Component {
  render() {
    const { players } = this.props

    return (
      <div className="app">
        <Scoreboard players={ players } />
      </div>
    )
  }
}

export default App
