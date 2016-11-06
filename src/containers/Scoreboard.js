// import React from 'react'
//
// class Scoreboard extends React.Component {
//   render() {
//     return (
//       <ul className="scoreboard">
//       </ul>
//     )
//   }
// }
//
// export default Scoreboard

import React from 'react'
import Player from '../components/Player'
// import './Scoreboard.sass'

class Scoreboard extends React.Component {
  renderPlayer(player, index) {
    return <Player key={ index } { ...player } />
  }

  render() {
    const { players } = this.props

    return (
      <ul className="scoreboard">
        { players.map(this.renderPlayer) }
      </ul>
    )
  }
}

export default Scoreboard
