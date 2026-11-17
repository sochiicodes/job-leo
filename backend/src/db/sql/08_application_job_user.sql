--08_application_job_user.sql
--show applications with the user's name and job title.
SELECT 
    applications.id,
    users.name AS applicant_name,
    jobs.title AS job_title
FROM applications 
JOIN users
    ON applications.user_id = users.id 
JOIN jobs
    ON applications.job_id = jobs.id
