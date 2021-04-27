import express from 'express';
import roonRoutes from './controller/room/room.route'
import "reflect-metadata";

import { createConnection } from "typeorm";
import { User } from "./entity/user";

// createConnection({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "Passw0rd@123",
//     database: "hostelme",
//     entities: [
//         __dirname + "/entity/*.ts"
//     ],
//     synchronize: true,
//     logging: false
// }).then(connection => {
//     // here you can start to work with your entities
// }).catch(error => console.log(error));

const app = express();
const port = 3000;

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies

// mount all routes on /api path
app.use('/api', roonRoutes);

app.get('/hey', (req, res) => {
    res.send(getString());
});

export const getString = () => {
    return 'Test the actions integrator!'
}

app.listen((process.env.PORT || port), () => {
    return console.log(`server is listening on this ${port}`);
}).on('error', (err) => {
    if (err) {
        return console.error(err);
    }
});