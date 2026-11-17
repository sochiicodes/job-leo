--04_add_posted_by_with_foreign_key.sql
ALTER TABLE jobs
ADD COLUMN posted_by UUID REFERENCES users(id);