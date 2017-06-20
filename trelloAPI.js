
// call the packages we need//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let Trello = require("trello");
let trello = new Trello('37b89af9e104cd163d3a5f042ce151b8', 'fae4d184f3df9b017f6fea93a34113e30f04eaff927dcced6d56db5acd4e6b05');
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as constn
app.use(cors());

app.use((req, res, next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

router.get('/api', (req, res) => {
 console.log({ message: 'hooray! welcome to our api!' });
 res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/cards',(request, responce) => {
  const list_ids = request.headers.list_ids.split(',');
  console.log(list_ids);
  list_ids.forEach((val)=>{
    trello.makeRequest('get', `/1/lists/${val}/cards`, { webhooks: true })
     .then((res) => {
         console.log(res);
         responce.send(res);
     }).catch((reason)=>{
       console.log(reason);
     });
 });
});

router.get('/boards',(request, responce) => {
  let board_id = request.header.board_id;
  if(board_id){
    trello.makeRequest('get', `/1/members/boards/${board_id}`, { webhooks: true })
       .then((res) => {
           console.log(res);
           responce.json(res);
       }).catch((reason) => {
         console.log(reason);
       });
  } else {
    trello.makeRequest('get', '/1/members/me/boards', { webhooks: true })
       .then((res) => {
           console.log(res);
           responce.json(res);
       }).catch((reason) => {
         console.log(reason);
       });
  }
});


router.get('/lists',(request, responce) => {
  let board_id = request.headers.board_id;
 trello.makeRequest('get', `/1/boards/${board_id}/lists`, { webhooks: true })
    .then((res) => {
        console.log(res);
        let obj = JSON.parse(JSON.stringify(res));
        console.log(obj);
        responce.json(res);
    }).catch((reason)=>{
      console.log(reason);
    });
});
app.on('error', (err) => {
   console.error(err);
});

app.use( (req, res, next) => {
 const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
 console.log("===========================");
 console.log('||Client IP|'+ ip + "|Port:" + port+"||");
 console.log("===========================");
 next();
});

app.use('/api',router);
app.listen(port);
console.log("==========================================================");
console.log('||Beers are served at: http://localhost:'+ port +" "+ app.settings.env+"||");
console.log("==========================================================");
