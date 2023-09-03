import * as TCP from "net";
const socket = TCP.createConnection({ port: 8080, host: "192.168.1.92" }, () =>
	console.log("Conexion creada")
);

socket.write("Hola amigo Erick" + String.fromCharCode(4), err =>
	console.log(err?.message, "= éxito")
);

socket.on("data", dato => console.log(dato.toString()));

socket.end(() => {
	console.log("Adios");
});
