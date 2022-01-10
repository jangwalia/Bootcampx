--BASIC QUERY TO GET THE STUDENTS INFORMATION FROM ONE TABLE

-- SELECT name,email,cohort_id
-- FROM students;

-- WHAT IF WE WANT TO GET INFORMATION FROM MORE THAN ONE TABLE
-- IF WE WANT COHORT NAME INSTEAD OF ID
--WE USE JOIN KEYWORD
SELECT students.name as student_name,email,cohorts.name as cohort_name
FROM students  JOIN cohorts ON cohort_id = cohorts.id;