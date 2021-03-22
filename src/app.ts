import express from 'express';

const app = express();
const port = 3000;
app.get('/hey', (req, res) => {
    res.send('Test the actions integrator!!');
});
app.listen((process.env.PORT || port), () => {
    return console.log(`server is listening on this ${port}`);
}).on('error', (err) => {
    if (err) {
        return console.error(err);
    }
});