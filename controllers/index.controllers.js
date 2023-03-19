const {Client} = require('pg');
require('dotenv').config();
const pdf=require('html-pdf');


const info = [{}, {}, {}, {}, {}];
// const info = [];

const getHeader = async (req, res) => {
  res.render('../public/user/header.ejs');
};

const getExperience = async (req, res) => {
  const {fullName, dob, email, phone, address, country, city, gender} = req.query;
  const dummy = {fullName, dob, email, phone, address, country, city, gender};
  info[0] = dummy;
  // await console.log(info[0]);
  res.render('../public/user/experience.ejs');
};

const getEducation = (req, res) => {
  const {jobTitle, companyName, jobDescription, startDate, endDate} = req.query;
  const dummy = {jobTitle, companyName, jobDescription, startDate, endDate};
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
  const {skill, achievement, interest, knownLanguage} = req.query;
  const dummy = {skill, achievement, interest, knownLanguage};
  info[3] = dummy;
  const {summary} = req.body;
  console.log(summary);
  // console.log(info);
  res.render('../public/user/summary.ejs');
};
const postSummary = (req, res) => {
  const {summary} = req.body;
  console.log(summary);
};
const getSelectTemplate = (req, res) => {
  const {summary} = req.query;
  const dummy = {summary};
  info[4] = dummy;
  // console.log(info);
  res.render('../public/user/selectTemplate.ejs');
};
const postGeneratePDF=(req,res)=>{
  const user_email=info[0].email;
  const user_name=info[0].fullName;
  const user_phone=info[0].phone;
  const user_city=info[0].city;
  const user_country=info[0].country;
  const user_compamyName=info[1].companyName;
  const user_jobtitle=info[1].jobTitle;
  const user_jobdescription=info[1].jobDescription;
  const user_startdate=info[1].startDate;
  const user_enddate=info[1].endDate;
  const user_insttitution=info[2].institution;
  const user_qualification=info[2].qualification;
  const user_fieldOfStudy=info[2].fieldOfStudy;
  const user_graduationdate=info[2].graduationDate;
  const user_skill=info[3].skill;
  const user_summery=info[4].summary;
  

    const cvHtml =res.render('../views/cv.ejs',{user_email,user_name,user_phone,user_city,user_country,
    user_compamyName,user_jobtitle,user_jobdescription,user_startdate,user_enddate,user_insttitution,
    user_qualification,user_graduationdate,user_fieldOfStudy,user_skill,user_summery});
    

    pdf.create(cvHtml).toFile('cv.pdf', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Failed to generate PDF file');
        return;
      }
  
      res.download('cv.pdf');
    });
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
  const user_email=info[0].email;
  const user_name=info[0].fullName;
  const user_phone=info[0].phone;
  const user_city=info[0].city;
  const user_country=info[0].country;
  const user_compamyName=info[1].companyName;
  const user_jobtitle=info[1].jobTitle;
  const user_jobdescription=info[1].jobDescription;
  const user_startdate=info[1].startDate;
  const user_enddate=info[1].endDate;
  const user_insttitution=info[2].institution;
  const user_qualification=info[2].qualification;
  const user_fieldOfStudy=info[2].fieldOfStudy;
  const user_graduationdate=info[2].graduationDate;
  const user_skill=info[3].skill;
  const user_summery=info[4].summary;
  


  const query = `insert into "userInfo" values 
  ('${info[0].email}', '${info[0].fullName}', '${info[0].phone}', '${info[0].city}', '${info[0].country}',
  '${info[1].companyName}', '${info[1].jobTitle}', '${info[1].jobDescription}', '${info[1].startDate}', '${info[1].endDate}',
  '${info[2].institution}', '${info[2].qualification}', '${info[2].fieldOfStudy}', '${info[2].graduationDate}',
  '${info[3].skill}', 
  '${info[4].summary}')`;
 
  await client.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.render('../views/cv.ejs',{user_email,user_name,user_phone,user_city,user_country,
      user_compamyName,user_jobtitle,user_jobdescription,user_startdate,user_enddate,user_insttitution,
      user_qualification,user_graduationdate,user_fieldOfStudy,user_skill,user_summery})
    }
   // res.render('../public/Index.ejs');
    client.end();
  });
};
module.exports = {info,postGeneratePDF, getHeader, getExperience, getEducation, getSkills, getSummary, getSelectTemplate, getIndex, postSummary};