import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/health', (req, res) => {
    res.send('mast h');
});

app.post('/data', (req, res) => {
    res.json({ message: 'Data received', data: req.body });
});

// Wrap the express app with serverless-http
const handler = serverless(app);

// Export the Lambda function handler
export { handler };

