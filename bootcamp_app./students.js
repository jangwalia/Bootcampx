const { Pool } = require('pg');
const pool = new Pool({
  user: 'walia',
  password: '1414',
  host: 'localhost',
  database: 'bootcampx'
});
const cohortName = process.argv[2];
const limit = process.argv[3];
const values = [`%${cohortName}%`,limit];
const queryString = `
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2 ;

`
pool.query(queryString,values)
.then(res => {
  res.rows.forEach(student =>{
    console.log(`${student.name} has an id of ${student.id} belongs to cohort ${student.cohort}`);
  })
})
.catch(err => console.error('query error', err.stack));