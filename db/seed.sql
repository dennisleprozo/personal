CREATE TABLE classes(
  "class_id" SERIAL PRIMARY KEY,
  "class_name" text,
  "description" text,
  "class_img" text,
  "pt_id" INTEGER 
);

SELECT * FROM classes;

INSERT INTO classes(class_name, description, class_img, pt_id)
            VALUES('KICKBOXING', 'TIGER MUAY THAI', 'https://images.pexels.com/photos/598631/pexels-photo-598631.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 1),
            ('JIU JITSU', 'BRAZILIAN JIU JITSU', 'https://images.unsplash.com/photo-1515025617920-e1e674b5033c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa18df38d40873a258a71fa0838c6f08&auto=format&fit=crop&w=1628&q=80', 2),
            ('DANCE', 'ZUMBA BURNS', 'https://images.pexels.com/photos/270837/pexels-photo-270837.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 3),
            ('CARDIO', 'SPARTAN WARRIOR WORKOUT', 'https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 4),
            ('AEROBICS', 'HAMS AND GLUTES WORKOUT', 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 2),
            ('ABS', 'CORE AND BACK WORKOUT', 'https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 4),
            ('BARBELL EXERCIES', 'BARBELL WORKOUT', 'https://images.pexels.com/photos/348487/pexels-photo-348487.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 5),
            ('DUMBBELL', 'DUMBBELL WORKOUT', 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 5);

CREATE TABLE time(
  "time_id" SERIAL PRIMARY KEY,
  "class_id" INTEGER,
  "day" INTEGER,
  "time" INTEGER
);

INSERT INTO time(class_id, day, time)
            VALUES('4', 1 , 8),
                  ('5', 1 , 9),
                  ('6', 1 , 10),
                  ('1', 1 , 11),
                  ('2', 1 , 12),
                  ('3', 1 , 1),
                  ('7', 1 , 2),
                  ('8', 1 , 3),
                  ('4', 1 , 4),
                  ('5', 1 , 5),
                  ('6', 1 , 6);

SELECT * FROM time;

SELECT * 
FROM classes c
JOIN time t ON c.class_id=t.class_id;