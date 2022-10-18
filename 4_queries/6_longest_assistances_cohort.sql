
  SELECT cohorts.name, AVG(completed_at - started_at) AS average_time
  FROM assistance_requests
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  GROUP BY cohorts.name
  HAVING AVG(completed_at - started_at) >= ALL (SELECT AVG(completed_at - started_at)
      FROM assistance_requests
      JOIN students ON assistance_requests.student_id = students.id
      GROUP BY cohort_id);
  