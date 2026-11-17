--07_create_application_table.sql

CREATE TABLE applications(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID NOT NULL REFERENCES jobs(id),
    user_id UUID NOT NULL REFERENCES users(id),
    UNIQUE (job_id, user_id)
);