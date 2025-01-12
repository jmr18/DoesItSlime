import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/slime_random', (req, res) => {
    let decision = random_slime_bool();
    res.send({'result':decision});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function random_slime_bool() {
  let random_seed = Math.floor(Math.random()*100);
  return random_seed % 2 === 0;
}