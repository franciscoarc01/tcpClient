import * as TLS from "tls";
import { readFileSync } from "fs";
import { resolve } from "path";

const socket = TLS.connect(
  {
    port: 8080,
    host: "192.168.1.92",
    passphrase: "PaTiTo1719",
    key: readFileSync(resolve(__dirname, "privkey.pem")),
    rejectUnauthorized: false
  },
  () => {
    console.log("Conexión exitosa");
  }
);

socket.write("Hola amigo Erick" + String.fromCharCode(4), err =>
  console.log(err?.message, "= éxito")
);

function estado() {
  return new Promise<string>((resolve, reject) => {
    socket.on("data", mensaje => resolve(mensaje.toString()));
    socket.on("error", err => reject(err));
  });
}

estado()
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(err => {
    console.log(err);
  });

socket.end(() => {
  console.log("Adios");
});
