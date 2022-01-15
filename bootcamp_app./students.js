const { Pool } = require('pg');
const pool = new Pool({
  user: 'walia',
  password: '1414',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE  '%${process.argv[2]}%'
LIMIT ${process.argv[3]};
`)
.then(res => {
  res.rows.forEach(student =>{
    console.log(`${student.name} has an id of ${student.id} belongs to cohort ${student.cohort}`);
  })
})
.catch(err => console.error('query error', err.stack));