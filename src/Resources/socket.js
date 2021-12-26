import {io} from 'socket.io-client';

const socket = io('https://pure-beach-20004.herokuapp.com/');

export default socket;