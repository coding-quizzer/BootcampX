SELECT id, name, email, cohort_id
FROM students
WHERE github isNULL
ORDER BY cohort_id;