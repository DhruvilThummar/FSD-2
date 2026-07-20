/**
 * Chapter 10: MongoDB Connection Snippets
 * Technology: Node.js & Express with Mongoose and Native MongoClient
 */

const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

// ==========================================
// Method 1: Connecting using Mongoose (ODM)
// ==========================================
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fsd2_db';

const app = express();
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB via Mongoose successfully!'))
.catch((err) => console.error('❌ Mongoose connection error:', err));

// Define a Mongoose Schema with Validation & Indexing
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true // Trims whitespace automatically
  },
  surname: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^[A-Za-z]{6,10}$/.test(v); // Regex validation
      },
      message: props => `${props.value} is not a valid surname (must be 6-10 letters)!`
    }
  },
  age: {
    type: Number,
    min: 18,
    max: 100
  },
  department: {
    type: String,
    enum: ['CS', 'IT', 'ECE', 'ME'], // Enum validation
    required: true
  },
  status: {
    type: String,
    default: 'Active'
  }
}, { timestamps: true });

// Create Index on surname & department
studentSchema.index({ surname: 1, department: -1 });

// Create Model
const Student = mongoose.model('Student', studentSchema);

// Sample Express Routes
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find({ status: 'Active' });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/students/:id', async (req, res) => {
  try {
    // findByIdAndDelete helper method
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully', student: deletedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Node.js Express server running on port ${PORT}`);
});


// ==========================================
// Method 2: Connecting using Native MongoClient
// ==========================================
async function runNativeClient() {
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  try {
    await client.connect();
    console.log('✅ Connected via Native MongoClient!');
    const db = client.db('fsd2_db');
    const collection = db.collection('students');

    // insertMany example
    const result = await collection.insertMany([
      { name: 'Amit', surname: 'Sharma', age: 22, department: 'CS' },
      { name: 'Priya', surname: 'Patel', age: 21, department: 'IT' }
    ]);
    console.log(`Inserted ${result.insertedCount} documents.`);
  } finally {
    await client.close();
  }
}

// Uncomment to execute native client test
// runNativeClient().catch(console.dir);
