# Chapter 10: Mongoose & MERN Integration — Developer Guide & Driver Reference

> A developer reference manual, multi-language connection guide (Node.js, Express, Python, Java), and performance optimization cheat sheet for **Mongoose ODM & MERN Integration**. Includes a full runnable MERN Express API app inside [`Ch 10/app/`](file:///d:/Code/FSD-2/Ch%2010/app/).

---

## 📚 Table of Contents
1. [Full-Stack MERN Database Architecture](#-1-full-stack-mern-database-architecture)
2. [Multi-Language Production Connection Drivers](#-2-multi-language-production-connection-drivers)
   - [Node.js & Express (Mongoose ODM & MongoClient)](#1-nodejs--express-connection)
   - [Python (PyMongo & MongoEngine)](#2-python-connection)
   - [Java (MongoDB Java Synchronous Driver)](#3-java-connection)
3. [Mongoose Schemas, Models & Compilation](#-3-mongoose-schemas-models--compilation)
4. [Mongoose Validation & Modifiers (`trim`, `enum`, regex)](#-4-mongoose-validation--modifiers-trim-enum-regex)
5. [Database Indexing & Performance Tuning (`IXSCAN` vs `COLLSCAN`)](#-5-database-indexing--performance-tuning-ixscan-vs-collscan)
6. [Mongoose CRUD Helper Methods & Queries](#-6-mongoose-crud-helper-methods--queries)
7. [MERN Developer Best Practices & Checklist](#-7-mern-developer-best-practices--checklist)
8. [Full MERN Backend REST API App (`Ch 10/app`)](#-8-full-mern-backend-rest-api-app-ch-10app)

---

## 💡 1. Full-Stack MERN Database Architecture

In a MERN stack application:
- **MongoDB:** Stores raw BSON documents asynchronously.
- **Express.js & Node.js:** Acts as the backend API layer. Uses **Mongoose ODM** to translate JavaScript application objects into BSON documents, perform validation, enforce schemas, and execute queries.
- **React.js:** Consumes JSON data served by Express API endpoints.

---

## 🔌 2. Multi-Language Production Connection Drivers

All connection scripts are available in the [`connections/`](file:///d:/Code/FSD-2/Ch%2010/connections/) directory.

### 1. Node.js & Express Connection
File: [`connections/node_express_connection.js`](file:///d:/Code/FSD-2/Ch%2010/connections/node_express_connection.js)

```javascript
/**
 * Chapter 10: Node.js & Express Production MongoDB Connection
 * Demonstrates Mongoose connection, schema validation, indexing, and REST routes.
 */

const express = require('express');
const mongoose = require('mongoose');

// Fallback to local MongoDB URI if environment variable is not defined
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fsd2_db';

const app = express();
app.use(express.json()); // Enable JSON body parser for incoming requests

// ----------------------------------------------------
// Establish Mongoose Connection with Event Listeners
// ----------------------------------------------------
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB via Mongoose successfully!'))
.catch((err) => console.error('❌ Mongoose initial connection error:', err));

// Connection Event Handlers for Production Monitoring
mongoose.connection.on('error', err => {
  console.error('❌ Mongoose runtime error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ Mongoose disconnected from database server.');
});

// ----------------------------------------------------
// Define Mongoose Schema with Validation & Indexes
// ----------------------------------------------------
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true // Strips leading and trailing whitespace automatically
  },
  surname: {
    type: String,
    required: true,
    trim: true,
    // Custom regex validator: Surname must be 6 to 10 alphabetic letters
    validate: {
      validator: function(v) {
        return /^[A-Za-z]{6,10}$/.test(v);
      },
      message: props => `${props.value} is not a valid surname (must be 6-10 letters)!`
    }
  },
  department: {
    type: String,
    enum: ['CS', 'IT', 'ECE', 'ME'], // Restricts value to allowed array
    required: true
  },
  status: {
    type: String,
    default: 'Active'
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create Compound Index on surname (asc) and department (desc)
studentSchema.index({ surname: 1, department: -1 });

// Compile Model
const Student = mongoose.model('Student', studentSchema);

// ----------------------------------------------------
// Express API Routes
// ----------------------------------------------------

// GET /api/students - Fetch all active students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find({ status: 'Active' });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/students - Create a new student with validation
app.post('/api/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/students/:id - Delete student by ID
app.delete('/api/students/:id', async (req, res) => {
  try {
    // Atomically find document by ID and delete it
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully', student: deletedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Express server running on port ${PORT}`));
```

---

### 2. Python Connection
File: [`connections/python_connection.py`](file:///d:/Code/FSD-2/Ch%2010/connections/python_connection.py)

```python
"""
Chapter 10: Python MongoDB Connection Guide
Demonstrates PyMongo driver setup, compound indexing, batch insert, and regex queries.
"""

import re
from pymongo import MongoClient, ASCENDING, DESCENDING

MONGO_URI = "mongodb://127.0.0.1:27017/"

def run_mongodb_python():
    try:
        # Step 1: Create connection client
        client = MongoClient(MONGO_URI)
        db = client["fsd2_db"]
        students_collection = db["students"]
        sales_collection = db["sales"]
        print("✅ Connected to MongoDB via PyMongo successfully!")

        # Step 2: Create Compound Index on sales collection { product_id: 1, sale_date: -1 }
        sales_collection.create_index([
            ("product_id", ASCENDING),
            ("sale_date", DESCENDING)
        ])
        print("✅ Compound index created on sales collection.")

        # Step 3: Insert Multiple Documents (insert_many)
        new_students = [
            {"name": "Bharat", "surname": "Thummar", "age": 22, "department": "CS"},
            {"name": "Bhavik", "surname": "Solanki", "age": 24, "department": "IT"}
        ]
        result = students_collection.insert_many(new_students)
        print(f"Inserted document IDs: {result.inserted_ids}")

        # Step 4: Perform Case-Insensitive Substring Regex Query (/^Bharat/i)
        regex_pattern = re.compile(r"^Bharat", re.IGNORECASE)
        query = {"name": {"$regex": regex_pattern}}
        
        print("\n🔍 Matching Documents:")
        for doc in students_collection.find(query):
            print(doc)

        client.close()
    except Exception as e:
        print(f"❌ Error in PyMongo script: {e}")

if __name__ == "__main__":
    run_mongodb_python()
```

---

### 3. Java Connection
File: [`connections/MongoConnection.java`](file:///d:/Code/FSD-2/Ch%2010/connections/MongoConnection.java)

```java
/**
 * Chapter 10: Java MongoDB Connection Guide
 * Demonstrates official Synchronous Java Driver, compound indexing, and regex filter.
 */

package com.fsd2.mongodb;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Indexes;
import org.bson.Document;

import java.util.Arrays;
import java.util.regex.Pattern;

public class MongoConnection {
    public static void main(String[] args) {
        // Step 1: Initialize MongoClient with connection string
        try (MongoClient mongoClient = MongoClients.create("mongodb://127.0.0.1:27017")) {
            MongoDatabase database = mongoClient.getDatabase("fsd2_db");
            MongoCollection<Document> studentCollection = database.getCollection("students");
            MongoCollection<Document> salesCollection = database.getCollection("sales");

            System.out.println("✅ Connected to MongoDB via Java Driver!");

            // Step 2: Create Compound Index { product_id: 1, sale_date: -1 }
            salesCollection.createIndex(Indexes.compoundIndex(
                Indexes.ascending("product_id"),
                Indexes.descending("sale_date")
            ));
            System.out.println("✅ Compound Index created on sales collection!");

            // Step 3: Insert Multiple Documents (insertMany)
            Document student1 = new Document("name", "Bharat")
                    .append("surname", "Thummar")
                    .append("age", 22);
            Document student2 = new Document("name", "Ankit")
                    .append("surname", "Chavda")
                    .append("age", 23);

            studentCollection.insertMany(Arrays.asList(student1, student2));

            // Step 4: Query using Regex Filter /^Bharat/i
            System.out.println("\n🔍 Query Results for regex /^Bharat/i:");
            for (Document doc : studentCollection.find(Filters.regex("name", Pattern.compile("^Bharat", Pattern.CASE_INSENSITIVE)))) {
                System.out.println(doc.toJson());
            }
        } catch (Exception e) {
            System.err.println("❌ Error connecting to MongoDB in Java: " + e.getMessage());
        }
    }
}
```

---

## 📐 3. Mongoose Schemas, Models & Compilation

When defining data models in Mongoose:

```javascript
// Step 1: Import Mongoose
const mongoose = require('mongoose');

// Step 2: Define Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String
});

// Step 3: Compile Schema into Model
// Developer Note: Mongoose automatically converts 'User' to lowercase, pluralized collection 'users'.
const User = mongoose.model('User', userSchema);
```

---

## 🛡️ 4. Mongoose Validation & Modifiers (`trim`, `enum`, regex)

Mongoose enforces validation rules before sending writes to MongoDB.

```javascript
const productSchema = new mongoose.Schema({
  // 1. String Modifier: trim automatically removes leading/trailing spaces
  title: {
    type: String,
    required: [true, 'Product title is required'],
    trim: true
  },

  // 2. Allowed Options Enum: Restricts field to specified values
  category: {
    type: String,
    enum: {
      values: ['Electronics', 'Clothing', 'Books'],
      message: '{VALUE} is not a supported category'
    },
    required: true
  },

  // 3. Custom Regex Validator: Validates product code format
  productCode: {
    type: String,
    validate: {
      validator: function(v) {
        return /^[A-Z]{3}-\d{4}$/.test(v); // Example: ELE-1024
      },
      message: props => `${props.value} is not a valid product code!`
    }
  }
});
```

---

## ⚡ 5. Database Indexing & Performance Tuning (`IXSCAN` vs `COLLSCAN`)

### Default Index
MongoDB automatically builds a unique index on the **`_id`** field when a collection is created.

### Compound Index Syntax
```javascript
// Indexing product_id ascending (1) and sale_date descending (-1)
db.sales.createIndex({ product_id: 1, sale_date: -1 });
```

### Query Execution Stats (`explain()`)
Developers inspect query performance using `.explain("executionStats")`:

```javascript
db.students.find({ surname: "Thummar" }).explain("executionStats");
```

| Execution Stage | Description | Performance Impact |
| :--- | :--- | :--- |
| **`COLLSCAN`** (Collection Scan) | Scans **every document** in the collection because no suitable index was found. | ❌ Slow. `docExamined` is high relative to `nReturned`. |
| **`IXSCAN`** (Index Scan) | Uses an index data structure (B-tree) to locate matching documents instantly. | ✅ Fast. `docExamined` matches `nReturned`. |

---

## 🛠️ 6. Mongoose CRUD Helper Methods & Queries

### 1. `findByIdAndDelete(id)`
Atomically finds a single document matching `_id` and removes it from the collection.

```javascript
const deletedStudent = await Student.findByIdAndDelete(req.params.id);
```

### 2. `insertMany([docs])`
Inserts multiple document objects in a single network request. Available in both open-source MongoDB and MongoDB Atlas.

```javascript
const docs = await Student.insertMany([
  { name: 'Rohan', surname: 'Sharma' },
  { name: 'Meera', surname: 'Joshi' }
]);
```

### 3. Substring & Regex Queries
```javascript
// Matches names starting with 'Bharat' case-insensitively (/^Bharat/i)
const state = await State.find({ name: { $regex: /^Bharat/i } });
```

---

## 🛠️ 7. MERN Developer Best Practices & Checklist

- [x] **Sanitize Inputs:** Always use Mongoose validators (`trim`, `enum`, regex) or libraries like `validator.js`.
- [x] **Handle Async Errors:** Wrap async route handlers in `try-catch` blocks or use `express-async-handler`.
- [x] **Create Indexes on Frequently Queried Fields:** Add indexes to fields used in `.find()`, `.sort()`, and `.group()` to convert `COLLSCAN` to `IXSCAN`.
- [x] **Store Sensitive Credentials Securely:** Store MongoDB connection strings (`MONGO_URI`) in environment variables (`.env`).

---

## 🚀 8. Full MERN Backend REST API App (`Ch 10/app`)

A complete, production-structured Express & Mongoose API application is provided in [`Ch 10/app/`](file:///d:/Code/FSD-2/Ch%2010/app/).

### Directory Architecture:
```text
Ch 10/app/
├── package.json               ← App dependencies and scripts
├── server.js                 ← Main Express server entrypoint & MongoDB connection
├── models/
│   └── Student.js            ← Mongoose schema, custom validation, virtuals, hooks & indexes
├── controllers/
│   └── studentController.js  ← Async CRUD handlers, filtering & pagination logic
└── routes/
    └── studentRoutes.js       ← Express REST API endpoints definition
```

### How to Run:
```bash
# 1. Navigate to the app directory
cd "Ch 10/app"

# 2. Install dependencies
npm install

# 3. Start the Express backend server
npm start
```

The server will launch at `http://localhost:5000` with full support for `GET`, `POST`, `PUT`, `DELETE` operations on `/api/students`.
