var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.on('newMessage', function (message) {
    console.log('newMessage',message);
  });

  socket.emit('createMessage', {
    from: 'yuval',
    text: 'some text here'
  });

});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
  console.log('New Email', email);
});