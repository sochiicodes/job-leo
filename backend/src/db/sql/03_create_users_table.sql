--03_create_users_table.sql

CREATE TABLE users(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(name, email, password_hash)
VALUES 
('admin', 'admin@jobleo.com', 'admin'),
('sochima', 'sochima@gmail.com', 'sochima'),
('jeccy', 'jeccy@gmail.com', 'jeccy');
