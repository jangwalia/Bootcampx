CREATE TABLE assignments(
id SERIAL   PRIMARY KEY NOT NULL,
name        VARCHAR(255),
content     TEXT,
day         Integer,
chapter     Integer,
duration    Integer
);



CREATE TABLE assignment_submissions (
  id SERIAL PRIMARY KEY NOT NULL,
  assignment_id INTEGER REFERENCES assignments(id) ON DELETE CASCADE,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  duration INTEGER,
  submission_date DATE       
);