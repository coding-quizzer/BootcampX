const getStudentsInCohort = function(cohort, limit) {
  const { Pool } = require('pg');
  
  const pool = new Pool({
    user: 'vagrant',
    password: '123',
    host: 'localhost',
    database: 'bootcampx'
  });
  
  pool.query(`
  SELECT students.id, students.name AS student_name, cohorts.name AS cohort_name
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE ('${cohort}%')
  LIMIT ${limit};
  `)
  .then(res => {
    res.rows.forEach(user => console.log(`${user.student_name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`));
  })
  .catch(err => console.error('query error', err.stack));
}

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Please enter a valid number of arguments');
  process.exit();
}
const [cohort, limit] = args;
getStudentsInCohort(cohort, limit);