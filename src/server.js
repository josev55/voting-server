import Server from 'socket.io';

export default startServer(){
	const io = new Server().attach(8090);
}