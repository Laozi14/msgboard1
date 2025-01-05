import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Sample messages array
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

// Index route - displays all messages
app.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages });
});

// New message form route
app.get('/new', (req, res) => {
    res.render('new', { title: 'Add New Message' });
});

// Handle form submission for new message
app.post('/new', (req, res) => {
    const { user, text } = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect('/');
});

// Message detail route
app.get('/message/:id', (req, res) => {
    const messageId = parseInt(req.params.id, 10);
    const message = messages[messageId];
    if (message) {
        res.render('message', { title: 'Message Details', message });
    } else {
        res.status(404).send('Message not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
