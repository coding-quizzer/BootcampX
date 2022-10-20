const teacherAssistsForCohort = function(cohort) {

  const { Pool } = require ('pg'); 
  
  const pool = new Pool({
    user: 'vagrant',
    password: '123',
    host: 'localhost',
    database: 'bootcampx'
  });
  
  pool.query(`
  SELECT 
  DISTINCT teachers.name AS teacher, cohorts.name AS cohort
  FROM assistance_requests
  JOIN teachers ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '${cohort}%'
  ORDER BY teacher;
  `)
  .then (res => {
  res.rows.forEach(assist => console.log(`${assist.cohort}: ${assist.teacher}`))})
  .catch(err => console.error('querry error', err.stack));
}

const arg = process.argv[2];
if (!arg) {
  console.log('Please enter a cohort');
  process.exit();
}

teacherAssistsForCohort(arg);