// eslint-disable
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import react from "react";
import { Grid, Button } from '@mui/material';
import TopScorenumbers from './Scorenumbers/TopScorenumbers'
import LeftScorenumber from './Scorenumbers/LeftScoreNumbers'
import Playerboard from './Playerboard/playerboard'
import { setGameData, setUpdate } from './counterSlice'
import { useDispatch, connect } from "react-redux";
import socket from './Resources/socket'


function App(props) {

  socket.on('connect',()=>{
    console.log("Connected")
  })
  const dispatch = useDispatch();
  const [reRen, setReRen] = useState(true);

  useEffect(() => {

    getGameInfo();
    console.log("Use effect triggered")

  }, [reRen])
  socket.off().on('Update-Notification', (e)=>{
    console.log(e)
    console.log("calling api again");
    getGameInfo();
  })
  var getGameInfo = () =>{
    axios.get('https://cryptic-wildwood-11303.herokuapp.com/game/0').then(async (res) => {
      let data = await res.data;
      dispatch(setGameData(data));
      dispatch(setUpdate(!props.trigger))
    })
  }

  return (
    <react.Fragment>
      <Grid container className="Yello">
        <Grid item xs={2}></Grid>
        <Grid item xs={10}><TopScorenumbers /> </Grid>
        <Grid item xs={2}><LeftScorenumber /></Grid>
        <Grid item xs={10}><Playerboard /></Grid>
      </Grid>

      <Button onClick={() => {setReRen(!props.trigger) }}>Push me</Button>

    </react.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    trigger: state.counter.Trigger,
    all: state.counter,
  }
}

export default connect(mapStateToProps)(App);
