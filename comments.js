//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('./models/comment'); // Import the Comment model
const Member = require('./models/member'); // Import the Member model
const Skill = require('./models/skill'); // Import the Skill model
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/your_database_name'; // Replace with your MongoDB URI
