--Refresh table data afresh
TRUNCATE TABLE jobs RESTART IDENTITY;

INSERT INTO jobs (
  title,
  category,
  type,
  level,
  city,
  state,
  area,
  salary,
  status,
  featured,
  tags,
  posted_by
)
VALUES
(
  'Waitress',
  'Hospitality',
  'Part-time',
  'Junior',
  'Nsukka',
  'Enugu',
  'Total Roundabout',
  25000,
  'unavailable',
  TRUE,
  ARRAY['Waitress', 'Cashier', 'Sales Rep'],
  'd78207c4-5a5a-4360-81bd-d106e54a216a'
),
(
  'Bar Man/Woman',
  'Hospitality',
  'Full-time',
  'Intermediate',
  'Nsukka',
  'Enugu',
  'Total Roundabout',
  35000,
  'open',
  TRUE,
  ARRAY['Bar Man', 'Bar Lady', 'Sales Rep'],
  'd78207c4-5a5a-4360-81bd-d106e54a216a'
),
(
  'POS Attendant',
  'Sales',
  'Full-time',
  'Junior',
  'Nsukka',
  'Enugu',
  'Nsukka Town',
  30000,
  'open',
  FALSE,
  ARRAY['POS Attendant', 'Cashier', 'Sales'],
  'd78207c4-5a5a-4360-81bd-d106e54a216a'
);