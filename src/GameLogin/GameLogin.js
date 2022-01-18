// eslint-disable
import React, { useState } from "react";
import {TextField, Button} from '@mui/material'
import { connect } from "react-redux";
import { Link } from "react-router-dom";





function GameLogin(props) {
  let [gameCode, setGameCode] = useState('');


  return (
    <React.Fragment >
      <div style={{paddingLeft: "1%"}}>
        <p>Game code</p>
        <TextField
        size="small"
          required
          id="outlined-required"
          label="Required"
          onChange={(e) => setGameCode(e.target.value)}
        />
        <Link to={`/game/${gameCode}`}>
          <Button size="large" variant="contained">Find Game</Button>
        </Link>
        
        
    </div>
    </React.Fragment>
  );
}


function mapStateToProps(state) {
  return {
    all: state.counter,
  }
}

export default connect(mapStateToProps)(GameLogin);
