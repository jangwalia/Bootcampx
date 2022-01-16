const { Pool } = require('pg');
const pool = new Pool({
  user: 'walia',
  password: '1414',
  host: 'localhost',
  database: 'bootcampx'
});
const cohortName = process.argv[2];
const values = [`%${cohortName}%`];
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohorts
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
GROUP BY teachers.name, cohorts.name
ORDER BY teacher;
`,values)
.then((res)=>{
  res.rows.forEach(teacher =>{
    console.log(`${teacher.cohorts}: ${teacher.teacher}`);
  })
})