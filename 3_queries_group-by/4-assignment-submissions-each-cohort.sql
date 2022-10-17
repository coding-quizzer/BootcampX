SELECT cohorts.name AS cohort, COUNT(assignment_submissions.*) AS total_submissions
FROM students
JOIN cohorts ON cohorts.id = cohort_id
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
GROUP BY cohort
ORDER BY total_submissions DESC;