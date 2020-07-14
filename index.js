const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World' });
});

app.get('/error', (req, res) => {
  throw new Error('Internal server error.')
})

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));