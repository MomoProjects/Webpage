import {io} from 'socket.io-client';

//const socket = io('https://pure-beach-20004.herokuapp.com/');
const socket = io('http://localhost:3003');

socket.on('GotData', (data) => {
    console.log("Got the data")
    console.log(data);
  })


export default socket;