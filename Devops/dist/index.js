"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
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
const handler = (0, serverless_http_1.default)(app);
exports.handler = handler;
