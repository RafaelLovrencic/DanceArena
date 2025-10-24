const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dobrodošli na našu testnu stranicu!!!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
