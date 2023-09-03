import * as TLS from "tls";
import { readFileSync } from "fs";
import { resolve } from "path";

const serverOptions: TLS.TlsOptions = {
  key: readFileSync(resolve(__dirname, "privkey.pem")),
  cert: readFileSync(resolve(__dirname, "arciga.cert")),
  passphrase: "PaTiTo1719"
};

const server = TLS.createServer(serverOptions, socket => {
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
