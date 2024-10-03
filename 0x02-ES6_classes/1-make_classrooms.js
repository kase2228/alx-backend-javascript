import ClassRoom from './0-classroom.js'

<<<<<<< HEAD
export default function* initializeRooms() {
    yield ClassRoom(19)
    yield ClassRoom(20)
    yield ClassRoom(34)
}
=======
function* initializeRooms() {
    yield new ClassRoom(19);
    yield new ClassRoom(20);
    yield new ClassRoom(34);
}
>>>>>>> 5685833e37f8a1dbad4354da7b8a59cb76673ebe
