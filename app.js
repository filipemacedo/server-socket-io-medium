const server = require("socket.io");

const { NODE_INSTANCE } = process.env;

const port = 4000 + parseInt(NODE_INSTANCE);

const io = server.listen(port);

io.on("connection", client => {
  client.on("send message", message => {
    
    // enviaremos o evento "write message"
    // para todos os clientes conectados
    io.emit("write message", { message });
  });
});
