SELECT *
FROM schedule 
join time on schedule.time_id=time.time_id
JOIN classes ON classes.class_id=time.class_id
WHERE user_id=$1
order by time.time ASC;