import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('The server is up & running!');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
}).on('error', (err) => {
    if (err) {
        return console.error(err);
    }
});