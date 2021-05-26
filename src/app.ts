import express from 'express';
import roomRoutes from './controller/room/room.route'


const app = express();
const port = 3000;

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies

// mount all routes on /api path
app.use('/api/room', roomRoutes);

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