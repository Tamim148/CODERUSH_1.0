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
  console.log(info);
  res.render('../public/user/selectTemplate.ejs');
};
module.exports = {info, getHeader, getExperience, getEducation, getSkills, getSummary, getSelectTemplate};