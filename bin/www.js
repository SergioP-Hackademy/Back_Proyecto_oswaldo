require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
const rutesUsers = require('../server/routes/users')

const app = express();

// config cors
// const corsOptions = {
//   origin: process.env.FRONT_DEPLOY,
// };

// middelwares
// app.use(cors(corsOptions));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.bodyParser({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '20mb' }));



// node-cron functions

// static resources

// start path
app.use('/api/v1', rutesUsers);
const PORT = process.env.PORT || 8010;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

