const bcrypt = require('bcryptjs');
const saltRounds = 10;

const {Client} = require('pg');
require('dotenv').config();

const test = async (req, res) => {
  const client = new Client(process.env.dbURI);
  await client.connect((err)=> {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the database');
    }
    client.end();
  });
  
  res.send('test');
}


const getLogin = async (req, res) => {
  
  const {username, email, password} = req.query;
  const client = new Client(process.env.dbURI);
  await client.connect((err)=> {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the login database');
    }
  });
  const query =`insert into "user" values('${username}', '${email}', '${password}')`;
  console.log(query);
  // const query = `insert into "user" values('Tasnxim', 'sharier@gmail.com', '1234');`
  await client.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  }); 
  res.render('../public/user/login.ejs');
  // client.end();
};

const postSignUp = async (req, res) => {
  const un= await(req.body.username);
  //await const {username, email, password} = req.body;
  console.log(un);
};
const getSignup = async (req, res) => {
  // const {username, email, password} = req.query;
  // const client = new Client(process.env.dbURI);
  // await client.connect((err)=> {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('Connected to the database');
  //   }
  //   client.end();
  // });
  // const query =`insert into "user" values('${username}', '${email}', '${password}')`;
  // console.log(query);

  res.render('../public/user/signup.ejs');
};
module.exports = {getSignup, getLogin, postSignUp};