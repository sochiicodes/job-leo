--02_create_jobs_table.sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE jobs(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title TEXT NOT NULL,
    category TEXT NOT NULL,
    job_type TEXT NOT NULL,
    level TEXT NOT NULL,

    city TEXT NOT NULL,
    state TEXT NOT NULL,
    area TEXT NOT NULL,

    salary INTEGER,

    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    status TEXT NOT NULL DEFAULT 'open',
    featured BOOLEAN DEFAULT FALSE,
    
    tags TEXT[],
    posted_by UUID REFERENCES users(id)
);

--rename a table column
ALTER TABLE jobs
RENAME COLUMN job_type TO type;
SELECT * FROM jobs;