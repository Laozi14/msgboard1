import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

// Define a basic index route
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to Express with EJS' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
