Connecting Nsukka's best candidates with top local businesses directly through WhatsApp.

---npm i express pg bcrypt jsonwebtoken dotenv
    --express ==> A framework to create routes and handle requests
    --pg ==> A postgres driver/client to connect to our database
    --bcryptjs ==> A library to hash password securely
    --jsonwebtoken ==> to generate and verify jwt web tokens
    --dotenv ==> to manage enviroment variables


--npm install --save-dev nodemon tsx
    => tsx → lets you run TypeScript files directly with Node.js.
        -npx tsx server.ts
    => nodemon → automatically restarts your server when you change code.
        -npx nodemon server.ts


--start database
    =>psql -U postgres -d postgres
    =>psql -U postgres -d jobleo
    => \c jobleo