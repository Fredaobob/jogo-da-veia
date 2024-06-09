const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Nova conexão: " + socket.id);

  // Lógica para o Socket.io virá aqui
});

server.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

