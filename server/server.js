import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/get_slime', (req, res) => {
    //let sp = req.query.search_param;
    let decision = true;
    res.send(decision);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});