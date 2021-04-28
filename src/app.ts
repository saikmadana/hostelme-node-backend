import express from 'express';
import roonRoutes from './controller/room/room.route'


import { User } from "./entity/user";

import { connectionManager } from './common/dbutils'

const app = express();
const port = 3000;

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies

// mount all routes on /api path
app.use('/api', roonRoutes);

app.get('/hey', async (req, res) => {
    const cm = await connectionManager();
    const users = await cm.manager.find(User);
    res.send(users);
});

app.get('/hey2', async (req, res) => {
    const cm = await connectionManager();
    const users = await cm.manager.find(User);
    res.send(users);
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