type ChatSocketData = {
	userId: string;
	chatId: string;
	token: string;
};

export const createSocket = ({ chatId, token, userId }: ChatSocketData) => {
	const socket = new WebSocket(
		`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
	);

	socket.addEventListener("open", () => {
		console.log("socet открыт");

		socket.send(
			JSON.stringify({
				content: 0,
				type: "get old",
			})
		);
	});

	socket.addEventListener("close", (event) => {
		if (event.wasClean) {
			console.log("Соединение закрыто чисто");
		} else {
			console.log("Соединение оборвано");
		}

		console.log(`Код: ${event.code} | Причина: ${event.reason}`);
	});

	socket.addEventListener("error", (event) => {
		console.log(event.message);
	});

	return socket;
};
