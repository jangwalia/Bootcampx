const { Pool } = require('pg');
const pool = new Pool({
  user: 'walia',
  password: '1414',
  host: 'localhost',
  database: 'bootcampx'
});
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohorts
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
GROUP BY teachers.name, cohorts.name
ORDER BY teacher;
`)
.then((res)=>{
  res.rows.forEach(teacher =>{
    console.log(`${teacher.cohorts}: ${teacher.teacher}`);
  })
})