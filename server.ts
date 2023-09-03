import * as TCP from "net";

const server = TCP.createServer(socket => {
  socket.on("data", data => {
    console.log(data.toString("utf8"));
    if (data.includes(String.fromCharCode(4))) {
      socket.write(
        "Hola querido cliente" + data.includes(String.fromCharCode(4))
      );
    }
  });
});

server.listen(8080);
