import ClassRoom from './0-classroom.js'

function* initializeRooms() {
    yield new ClassRoom(19);
    yield new ClassRoom(20);
    yield new ClassRoom(34);
}