const { io } = require('../index');

// Mensajes de sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => { console.log('Cliente desconectado'); });

    client.on('message', (payload) => {
        console.log('Mensaje del cliente: ', payload.nombre);
        io.emit('broadcast', { message: 'Nuevo cliente conectado' });
    });
});