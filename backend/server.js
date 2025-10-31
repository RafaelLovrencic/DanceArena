const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRuter = require('./src/routes/home.routes')
const upisRuter = require('./src/routes/upis.routes')

app.use('/', homeRuter);
app.use('/upispodataka', upisRuter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
