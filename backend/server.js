// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

// Load environment variables (like your database password)
dotenv.config();

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors()); // Allows your mobile app to make requests to this API
app.use(express.json()); // Allows the API to read JSON data sent from the app

// A simple test route to make sure the server is alive
app.get('/', (req, res) => {
  res.json({ message: "FYP API is running successfully!" });
});

// Define the port (defaults to 5000)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is up and running on http://localhost:${PORT}`);
});