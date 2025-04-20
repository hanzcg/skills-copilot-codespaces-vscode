//create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Comment schema and model
const commentSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
});

const Comment = mongoose.model('Comment', commentSchema);

// Routes
app.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).send(error);
    }
});