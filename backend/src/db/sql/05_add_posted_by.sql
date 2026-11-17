--05_add_posted_by.sql

UPDATE jobs
SET posted_by = '20d8ffb0-a985-4d2b-8fe4-6c181dfeb115'
WHERE posted_by IS NULL;

--Now that no existing job is missing a poster,
ALTER TABLE jobs
ALTER COLUMN posted_by SET NOT NULL;