CREATE TABLE classes(
  "class_id" SERIAL PRIMARY KEY,
  "class_name" text,
  "description" text,
  "class_img" text,
  "pt" text 
);

SELECT * FROM classes;

INSERT INTO classes(class_name, description, class_img, pt)
            VALUES('KICKBOXING', 'TIGER MUAY THAI', 'https://images.pexels.com/photos/598631/pexels-photo-598631.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'Jean Claude Van Eimeren'),
            ('JIU JITSU', 'BRAZILIAN JIU JITSU', 'https://images.unsplash.com/photo-1515025617920-e1e674b5033c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa18df38d40873a258a71fa0838c6f08&auto=format&fit=crop&w=1628&q=80', 'Joyce Gracie'),
            ('DANCE', 'ZUMBA BURNS', 'https://images.pexels.com/photos/270837/pexels-photo-270837.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'Jane Fondue'),
            ('CARDIO', 'SPARTAN WARRIOR WORKOUT', 'https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'Prince Leonidas'),
            ('AEROBICS', 'HAMS AND GLUTES WORKOUT', 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'Jane Fondue'),
            ('ABS', 'CORE AND BACK WORKOUT', 'https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'Jane Fondue'),
            ('BARBELL EXERCISES', 'BARBELL WORKOUT', 'https://images.pexels.com/photos/348487/pexels-photo-348487.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'Arnie Gobernator'),
            ('DUMBBELL', 'DUMBBELL WORKOUT', 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'Prince Leonidas');

CREATE TABLE time(
  "time_id" SERIAL PRIMARY KEY,
  "class_id" INTEGER,
  "day" text,
  "time" INTEGER 
);

INSERT INTO time(class_id, day, time)
            VALUES('4', 'Sunday', 0800),
                  ('5', 'Sunday', 0900),
                  ('6', 'Sunday', 1000),
                  ('1', 'Sunday', 1100),
                  ('2', 'Sunday', 1200),
                  ('3', 'Sunday', 1300),
                  ('7', 'Sunday', 1400),
                  ('8', 'Sunday', 1500),
                  ('4', 'Sunday', 1600),
                  ('5', 'Sunday', 1700),
                  ('6', 'Sunday', 1800),
                  ('7', 'Sunday', 1900),
                  ('8', 'Sunday', 2000),
                  ('4', 'Sunday', 2100);


SELECT * FROM time;

--JOIN classes and time tables
SELECT * FROM classes c
JOIN time t ON c.class_id=t.class_id;

--JOIN schedule and time tables using FOREIGN KEY
CREATE TABLE schedule(
  "schedule_id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "time_id" INTEGER FOREIGN KEY REFERENCES time(time_id)
);

-- request list of schedules with t.time_id
SELECT t.day, t.time, c.class_name, c.description, c.pt, t.time_id
FROM classes c
JOIN time t ON c.class_id=t.class_id
order by t.time asc; 

-- CREATE TABLE pt(
--   "pt_id" SERIAL PRIMARY KEY,
--   "fname" TEXT,
--   "lname" TEXT,
--   "class_id" INTEGER
-- );

INSERT INTO schedule(schedule_id, user_id, time_id )
values ( $1, $2, $3 );


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name varchar(80),
  email text,
  picture text,
  auth_id text
)


-- get_schedule.sql using user_id
SELECT * FROM schedule 
JOIN time ON schedule.time_id=time.time_id
JOIN classes ON classes.class_id=time.class_id
WHERE user_id=$1
ORDER BY time.time ASC;
