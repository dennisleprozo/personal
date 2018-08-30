SELECT c.class_name, c.description, t.time, t.day, c.pt_id 
FROM classes c
JOIN time t ON c.class_id=t.class_id;