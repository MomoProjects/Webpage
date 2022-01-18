// eslint-disable
import React, { useState, useEffect } from "react";
import react from "react";
import { Grid, Button } from '@mui/material';
import TopScorenumbers from '../Scorenumbers/TopScorenumbers'
import LeftScorenumber from '../Scorenumbers/LeftScoreNumbers'
import Playerboard from '../Playerboard/playerboard'
import { setGameData, setUpdate, resetState } from '../counterSlice'
import { useDispatch, connect } from "react-redux";
import { useParams } from "react-router";
import io from 'socket.io-client'
import '../GameInfoPage/GameInfoPage.css'

const socket = io('https://pure-beach-20004.herokuapp.com/');

function GameInfoPage(props) {
  let {game} = useParams();
  socket.on('connect', () => {
    console.log("Connected")
  })
  socket.off().on('GotData', (data)=>{

    if(data != null){
    var jsonObj = JSON.parse(data.GameData);
      jsonObj["LegitCode"] = true;
      
        dispatch(setGameData(jsonObj));
        dispatch(setUpdate(!props.trigger))
        
    }
    else{
      dispatch(resetState());
    }

  })
  const dispatch = useDispatch();
  const [reRen, setReRen] = useState(true);

  useEffect(() => {

    getGameInfo();

  }, [reRen])

  var getGameInfo = () => {
    socket.emit('getData', game);
    //setReRen(!reRen);
  }
  function BoardData(){
    return (
      <react.Fragment>
        <p>The game code you're looking for {game}</p>
        <Grid style={{border: "10px solid black", marginRight: "40%"}} container className="Yello">
          <Grid className="cell" item xs={2}></Grid>
          <Grid className="cell" item xs={10}><TopScorenumbers /> </Grid>
          <Grid className="cell" item xs={2}><LeftScorenumber /></Grid>
          <Grid className="cell" item xs={10}><Playerboard /></Grid>
        </Grid>
        <p style={{paddingLeft: "50%"}}>Current Winner: {props.all.PeopleOnBoard[props.all.PlayerIndex]}</p>
        <Button onClick={() => { setReRen(!reRen) }}>Admin Login</Button>

  
        
  
      </react.Fragment>
    );
  }
  return (
    <react.Fragment>
      <BoardData/>
      
    </react.Fragment>

  );

}

function mapStateToProps(state) {
  return {
    trigger: state.counter.Trigger,
    all: state.counter,
  }
}

export default connect(mapStateToProps)(GameInfoPage);
