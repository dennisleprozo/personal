SELECT t.day, t.time, c.class_name, c.description, c.pt
FROM classes c
JOIN time t ON c.class_id=t.class_id
order by t.time asc
WHERE t.day='Sunday';
