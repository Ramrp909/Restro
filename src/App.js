import React from 'react';
import { connect } from 'react-redux';

const App = ({playerone,playertwo}) => {
  return (
    <div>
      <h3>Playerone Details</h3>
      <p>Name: {playerone.name} | {''} Score: {playerone.score}</p>
      <h3>Playertwo Details</h3>
      <p>Name:{playertwo.name} | {''} Score: {playertwo.score}</p>
    </div>
  )
}
const mapStateToProps = state => ({
  playerone: state.playerone,
  playertwo: state.playertwo
})

export default connect(mapStateToProps)(App);