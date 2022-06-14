import express from 'express';
import roomRoutes from './controller/room/room.route'
import userRoutes from './controller/user/user.route'
var cors = require('cors')


const app = express();
const port = 3000;

app.use(cors());

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies

// mount all routes on /api path
app.use('/api/room', roomRoutes);

app.use('/api/users', userRoutes);

app.get('/test', async (req, res) => {
    res.send({
        "Hello": "World!"
    });
});

app.listen((process.env.PORT || port), () => {
    return console.log(`server is listening on this ${process.env.PORT || port}`);
}).on('error', (err) => {
    if (err) {
        return console.error(err);
    }
});