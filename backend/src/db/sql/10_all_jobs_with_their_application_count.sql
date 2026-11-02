--10_all_jobs_with_their_application_count.sql
--Get all jobs with their application count

SELECT
    jobs.id,
    jobs.title,
    COUNT(applications.id) AS total_applications
FROM jobs
LEFT JOIN applications
    ON applications.job_id = jobs.id
GROUP BY
    jobs.id,
    jobs.title;