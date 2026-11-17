--06_posted_by_name.sql
--Because the information you need is split across two tables, you JOIN them.
--i.e  job posted and user name (poster)

SElECT 
    jobs.title,
    users.name AS poster_name
FROM jobs JOIN users 
    ON jobs.posted_by = users.id;