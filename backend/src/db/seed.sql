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
  tags
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
  ARRAY['Waitress', 'Cashier', 'Sales Rep']
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
  ARRAY['Bar Man', 'Bar Lady', 'Sales Rep']
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
  ARRAY['POS Attendant', 'Cashier', 'Sales']
);