// src/components/Player.js
import React, { Component } from 'react'

class Player extends Component {
  render() {
    const { avatar, name, points } = this.props

    return (
      <li className="player">
        <div className="avatar">
          <img src={ avatar } />
        </div>
        <div className="label">
          <h3>
            <span className="score">{ points }</span>
            .&nbsp;
            <span className="name">{ name }</span>
          </h3>
        </div>
      </li>
    )
  }
}

export default Player
