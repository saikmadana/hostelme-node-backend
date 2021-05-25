import { getRooms, getRoomDetails } from "./get-room"


// tslint:disable-next-line: no-empty
const list =  getRooms

// tslint:disable-next-line: no-empty
const get = getRoomDetails

// tslint:disable-next-line: no-empty
const create = () => {}

// tslint:disable-next-line: no-empty
const update = () => {}

// tslint:disable-next-line: no-empty
const remove = () => {}

// tslint:disable-next-line: no-empty
const load = () => {
    console.log("load script executed")
}

export default {
    list,
    create,
    get,
    update,
    remove,
    load
}