import ClassRoom from './0-classroom.js'

function* initializeRooms() {
    yield ClassRoom(19)
    yield ClassRoom(20)
    yield ClassRoom(34)
}