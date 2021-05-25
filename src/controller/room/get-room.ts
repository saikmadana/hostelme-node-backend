import { Request, Response } from 'express'
import { connectionManager } from "../../common/dbutils";
import { getErrorMessage } from '../../common/util';
import { Room } from "../../entity/room";

export const getRooms = async (req: Request, res: Response) => {
    try {
        const cm = await connectionManager();
        const rooms = await cm.manager.find(Room);
        if(!rooms.length) {
            throw Error("No rooms found");
        }
        return res.send({
            status: true,
            data: rooms
        });
    } catch(err) {
        console.error(err, "Error in getting room data")
        return res.send({
            status: false,
            message: getErrorMessage(err)
        })
    }
}

export const getRoomDetails = async (req: Request, res: Response) => {
    try {
        const cm = await connectionManager();
        const room = await cm.manager.findOne(Room, 101);
        return res.send({
            data: room
        });
    } catch(err) {
        console.log(err, "Error in getting room details data")
    }
}