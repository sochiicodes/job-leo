--02_create_jobs_table.sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE jobs(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    job_type TEXT NOT NULL,
    experience_level TEXT NOT NULL,
    salary_min INTEGER,
    salary_max INTEGER,
    status TEXT NOT NULL DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);