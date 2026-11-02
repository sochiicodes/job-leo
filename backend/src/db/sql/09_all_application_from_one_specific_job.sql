--09_all_application_from_one_specific_job.sql

--Find all applications for one specific job

SELECT 
    users.name AS applicant_name,
    jobs.title AS job_title,
FROM applications 
JOIN users
    ON applicatins.user_id = users.id
JOIN jobs 
    ON applications.job_id = jobs.id
WHERE jobs.id = '6bca0b94-d080-4e0e-85ac-0647510c07b3'