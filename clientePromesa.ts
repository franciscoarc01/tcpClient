import * as TCP from "net";

const socket = TCP.createConnection(
	{ port: 5103, host: "192.168.1.107" },
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
