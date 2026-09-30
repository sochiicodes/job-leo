INSERT INTO jobs (
  title,
  category,
  type,
  level,
  city,
  state,
  area,
  salary,
  posted_at,
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
  '2026-08-17',
  'Unavailable',
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
  '2026-08-16',
  'Available',
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
  '2026-08-14',
  'Available',
  FALSE,
  ARRAY['POS Attendant', 'Cashier', 'Sales']
);