const {Client} = require('pg');
require('dotenv').config();


const info = [{}, {}, {}, {}, {}];
// const info = [];

const getHeader = async (req, res) => {
  res.render('../public/user/header.ejs');
};

const getExperience = async (req, res) => {
  const {fullName, city, country, phone, email} = req.query;
  const dummy = {fullName, city, country, phone, email};
  info[0] = dummy;
  // await console.log(info[0]);
  res.render('../public/user/experience.ejs');
};

const getEducation = (req, res) => {
  const {companyName, jobTitle, jobDescription, startDate, endDate} = req.query;
  const dummy = {companyName, jobTitle, jobDescription, startDate, endDate};
  info[1] = dummy;
  // console.log(info);
  res.render('../public/user/education.ejs');
};

const getSkills = (req, res) => {
  const {institution, qualification, fieldOfStudy, graduationDate} = req.query;
  const dummy = {institution, qualification, fieldOfStudy, graduationDate};
  info[2] = dummy;
  // console.log(info);
  res.render('../public/user/skills.ejs');
};
const getSummary = (req, res) => {
  const {skill} = req.query;
  const dummy = {skill};
  info[3] = dummy;
  // console.log(info);
  res.render('../public/user/summary.ejs');
};
const getSelectTemplate = (req, res) => {
  const {summary} = req.query;
  const dummy = {summary};
  info[4] = dummy;
  // console.log(info);
  res.render('../public/user/selectTemplate.ejs');
};
const getIndex = async (req, res) => {
  await console.log(info);
  const client = new Client(process.env.dbURI);
  await client.connect((err)=> {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the database');
    }
  });
  const query = `insert into "userInfo" values 
  ('${info[0].email}', '${info[0].fullName}', '${info[0].phone}', '${info[0].city}', '${info[0].country}',
  '${info[1].companyName}', '${info[1].jobTitle}', '${info[1].jobDescription}', '${info[1].startDate}', '${info[1].endDate}',
  '${info[2].institution}', '${info[2].qualification}', '${info[2].fieldOfStudy}', '${info[2].graduationDate}',
  '${info[3].skill}', 
  '${info[4].summary}')`;
  // const query = `insert into "TEST" values('Tanzim', 'Rangpur', 'BD', '0000000', 'shahrier@gmail.com')`;
  await client.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
    res.render('../public/Index.ejs');
    client.end();
  });
};
module.exports = {info, getHeader, getExperience, getEducation, getSkills, getSummary, getSelectTemplate, getIndex};