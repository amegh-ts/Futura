const socketIO = require('socket.io');
const router = require('express').Router();

const configureSocketIO = (io) => {
    io.on('connection', (socket) => {
      console.log('User connected');
  
      // Handle sending notifications to connected clients
      socket.on('sendNotification', (data) => {
        io.emit('notification', data); // Broadcast the notification to all connected clients
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  
  module.exports = { router, configureSocketIO };
  

module.exports = router
