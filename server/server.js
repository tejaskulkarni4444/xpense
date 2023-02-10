const express = require('express');
const helmet = require('helmet');                 					// set headers for better security 
const compression = require('compression');       					// compressed assets
const cors = require('cors');                     					// cors for react integration

const app = express();

/////////////////////////
//   security headers  //
/////////////////////////

app.use(helmet());


/////////////////////////
//     compression     //
/////////////////////////

app.use(compression());

/////////////////////////
//        CORS         //
/////////////////////////

app.use(cors());

app.get('/api', (req, res) => {
    res.json({"users": ["user1", "user2"] })
})

app.listen(5000, () => {
    console.log('server running!')
})