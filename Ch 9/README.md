# Chapter 9: MongoDB — Developer Reference & Practical Query Guide

> A production-oriented developer reference, syntax cheat sheet, and workflow guide for **MongoDB Queries, Operators, CRUD Operations, and Aggregation Pipelines**. Includes a runnable live playground script [`mongodb_queries_demo.js`](file:///d:/Code/FSD-2/Ch%209/mongodb_queries_demo.js).

---

## 📚 Table of Contents
1. [Developer Architecture & Fundamentals](#-1-developer-architecture--fundamentals)
2. [Database & Collection Shell Operations](#-2-database--collection-shell-operations)
3. [CRUD Operations & Developer Workflows](#-3-crud-operations--developer-workflows)
4. [Comparison & Logical Operators Reference](#-4-comparison--logical-operators-reference)
5. [Update Operators & Atomic Operations](#-5-update-operators--atomic-operations)
6. [Sorting, Pagination & Field Projection](#-6-sorting-pagination--field-projection)
7. [MongoDB Aggregation Framework & Pipeline Recipes](#-7-mongodb-aggregation-framework--pipeline-recipes)
8. [Developer Best Practices & Common Gotchas](#-8-developer-best-practices--common-gotchas)
9. [Running the Live Developer Demo Script](#-9-running-the-live-developer-demo-script)

---

## 💡 1. Developer Architecture & Fundamentals

MongoDB is a document-oriented NoSQL database. When developing applications with MongoDB, keep the following core concepts in mind:

- **BSON (Binary JSON):** Data in MongoDB is stored internally as BSON, extending JSON with data types like `ObjectId`, `Date`, and `BinData`.
- **Database:** Container holding one or more collections.
- **Collection:** Grouping of documents (analogous to a table in relational SQL databases).
- **Document:** A single record composed of field-value pairs (analogous to a row in SQL).
- **Data Representation:** Single query outputs return **BSON/JSON objects**, while multi-document queries return a **Cursor / Array of JSON objects**.

---

## 🗄️ 2. Database & Collection Shell Operations

Developers use these core shell commands for database initialization, inspection, and administration.

| Operation | Shell Command | Developer Context & Purpose |
| :--- | :--- | :--- |
| **List Databases** | `show dbs` | Lists non-empty databases on the server. |
| **Switch Database** | `use <dbname>` | Switches context to `<dbname>`. If it does not exist, MongoDB creates it lazily when the first document is inserted. |
| **Create Collection** | `db.createCollection('students')` | Explicitly creates a collection. Useful when setting collection options (capped collections, validation rules). |
| **List Collections** | `show collections` | Displays all collections inside the currently selected database. |
| **Drop Collection** | `db.students.drop()` | Permanently deletes a collection and its indexes. Returns `true` if successful, or `false` if collection doesn't exist. |

---

## 📝 3. CRUD Operations & Developer Workflows

### 1. Inserting Documents (`insertOne` & `insertMany`)

```javascript
// =========================================================
// 1. Single Document Insertion
// Developer Usage: Creating a single user or entity record.
// =========================================================
db.students.insertOne({
  name: "Amit",
  surname: "Sharma",
  age: 22,
  department: "CS",
  status: "Active",
  createdAt: new Date() // Always store dates as native JS Date objects
});

// =========================================================
// 2. Multi-Document Insertion
// Developer Usage: Batch insertion of initial seeding data or batch logs.
// =========================================================
db.students.insertMany([
  { name: "Priya", surname: "Patel", age: 21, department: "IT", status: "Active" },
  { name: "Rahul", surname: "Verma", age: 25, department: "ECE", status: "Inactive" },
  { name: "Bhavik", surname: "Solanki", age: 30, department: "CS", status: "Active" }
]);
```

### 2. Querying Documents (`find` & `findOne`)

```javascript
// Syntax: db.collection.find(filterCondition, projectionOptions)

// Find all documents in a collection
db.students.find({});

// Find a single document matching a condition (returns object directly, not cursor)
db.students.findOne({ age: 22 });
```

### 3. Deleting Documents (`deleteOne` & `deleteMany`)

```javascript
// Delete a single document matching criteria
db.students.deleteOne({ name: "Rahul" });

// Delete all documents inside a collection (Collection structure and indexes remain intact)
db.students.deleteMany({});
```

---

## 🔍 4. Comparison & Logical Operators Reference

When building search filters or dynamic query APIs, developers combine comparison and logical operators.

```javascript
// =========================================================
// 1. $gt, $gte, $lt, $lte (Numerical Range Queries)
// =========================================================

// Find products with price strictly greater than 50
db.products.find({ price: { $gt: 50 } });

// Find students with age greater than or equal to 30
db.lju.find({ age: { $gte: 30 } });

// Find students with age less than 30
db.lju.find({ age: { $lt: 30 } });

// =========================================================
// 2. $in & $nin (Array Value Matching)
// =========================================================

// Match documents where name is equal to ANY value in the array
db.students.find({ name: { $in: ['CCC', 'PPP', 'BBB'] } });

// Match documents where age is NOT in the specified array [2, 21]
db.student.find({ age: { $nin: [2, 21] } });

// =========================================================
// 3. $and & $or (Logical Combination Queries)
// =========================================================

// Logical AND: Matches documents where age is NOT 2 AND age is NOT 21
db.student.find({
  $and: [
    { age: { $ne: 2 } },
    { age: { $ne: 21 } }
  ]
});

// Logical OR: Matches documents where status is 'Active' OR age is greater than 30
db.student.find({
  $or: [
    { status: "Active" },
    { age: { $gt: 30 } }
  ]
});
```

---

## 🔄 5. Update Operators & Atomic Operations

Developers use atomic update operators to modify document fields efficiently without overwriting entire documents.

```javascript
// =========================================================
// 1. $set Operator (Field Modification & Addition)
// Developer Note: If the field does not exist, $set creates it.
// =========================================================

// Update status to 'Active' for students matching age=25 and name='ABC'
db.lju.updateMany(
  { age: 25, name: 'ABC' },
  { $set: { status: 'Active' } }
);

// Update ALL documents by providing an empty filter {}
db.data.updateMany(
  {},
  { $set: { join_date: new Date() } } // Adds/updates join_date to current timestamp
);

// Set name to 'QQQ' across all documents in test collection
db.test.updateMany({}, { $set: { name: 'QQQ' } });

// =========================================================
// 2. $inc Operator (Atomic Numerical Increment/Decrement)
// Developer Note: Useful for counters, stock quantities, view counts.
// =========================================================

// Increment age by 10 for all documents in test collection
db.test.updateMany(
  {},
  { $inc: { age: 10 } } // Pass negative value e.g. -5 to decrement
);

// =========================================================
// 3. Upsert Option (Insert if not found, Update if found)
// Developer Note: Set upsert: true in update options.
// =========================================================
db.users.updateOne(
  { email: "user@example.com" },             // Query filter
  { $set: { name: "John", lastLogin: new Date() } }, // Update instructions
  { upsert: true }                           // Creates document if missing
);
```

---

## 📶 6. Sorting, Pagination & Field Projection

### 1. Sorting (`sort`)
- `1`: Ascending order (A-Z, 0-9)
- `-1`: Descending order (Z-A, 9-0)

```javascript
// Sort students descending by name
db.students.find({ name: { $in: ['CCC', 'PPP', 'BBB'] } }).sort({ name: -1 });

// Find the employee with the highest age (Sort descending by age, limit to 1 document)
db.emp.find().sort({ age: -1 }).limit(1);
```

### 2. Pagination (`skip` & `limit`)
When building paginated APIs (e.g. page size = 10):
- `skip((pageNumber - 1) * pageSize)`
- `limit(pageSize)`

```javascript
// Example: Skip first 2 documents, return 1 document (retrieves the 3rd document)
db.emp.find({}, { name: 1, _id: 0 }).skip(2).limit(1);
```

### 3. Field Projection
Control which fields are returned to reduce network bandwidth and speed up queries.
- `1`: Include field
- `0`: Exclude field

```javascript
// Include name and age, explicitly exclude _id
// Developer Note: _id is returned by default unless set to 0.
db.student.find({}, { name: 1, age: 1, _id: 0 });
```

---

## 📊 7. MongoDB Aggregation Framework & Pipeline Recipes

The Aggregation Framework processes data through multi-stage pipelines to transform, filter, and compute aggregated metrics.

### Basic Pipeline Syntax
```javascript
db.collection.aggregate([
  { $match: { /* Stage 1: Filter documents */ } },
  { $group: { /* Stage 2: Group and accumulate metrics */ } },
  { $project: { /* Stage 3: Reshape output fields */ } },
  { $sort: { /* Stage 4: Order results */ } }
]);
```

### Common Pipeline Stage Reference

| Stage | Developer Function | Example |
| :--- | :--- | :--- |
| **`$match`** | Filters documents before aggregation (reduces dataset size early). | `{ $match: { marks: { $gt: 80 } } }` |
| **`$group`** | Groups documents by a specified `_id` expression key. | `{ $group: { _id: "$department", total: { $sum: 1 } } }` |
| **`$project`** | Selects, renames, or creates computed fields. | `{ $project: { name: 1, marks: 1, _id: 0 } }` |
| **`$sort`** | Sorts output (`1` asc, `-1` desc). | `{ $sort: { marks: 1 } }` |
| **`$limit`** | Restricts number of passing documents. | `{ $limit: 10 }` |

### Practical Aggregation Recipes

```javascript
// =========================================================
// Recipe 1: Filter Students by Marks & Sort Ascending
// =========================================================
db.students.aggregate([
  // Step 1: Filter students with marks > 80
  { $match: { marks: { $gt: 80 } } },
  // Step 2: Sort filtered students by marks in ascending order
  { $sort: { marks: 1 } }
]);

// =========================================================
// Recipe 2: Get Unique Departments List
// Developer Note: Grouping by "$department" without accumulators returns unique values.
// =========================================================
db.students.aggregate([
  { $group: { _id: "$department" } }
]);

// =========================================================
// Recipe 3: Reshape Output with $project
// =========================================================
db.students.aggregate([
  {
    $project: {
      studentName: "$name", // Rename field
      marks: 1,
      _id: 0               // Exclude default _id field
    }
  }
]);
```

---

## 🛠️ 8. Developer Best Practices & Common Gotchas

1. **Case-Sensitivity in String Matching:**
   - Query filters like `{ name: "ppp" }` perform exact case matching. To perform case-insensitive matching, use regex e.g. `{ name: { $regex: /^ppp/i } }`.
2. **$group Requires `_id`:**
   - In `$group` stage objects, the grouping key must always be named **`_id`** (e.g., `{ $group: { _id: "$category" } }`).
3. **Filter Early with `$match`:**
   - Place `$match` at the very beginning of aggregation pipelines to utilize indexes and reduce data volume processed by subsequent stages.
4. **Always Use Atomic Update Operators (`$set`, `$inc`):**
   - Avoid passing plain objects to `update()` or `updateMany()` without `$set`, as that can overwrite the entire document.

---

## 💻 9. Running the Live Developer Demo Script

A self-contained demonstration script is available at [`Ch 9/mongodb_queries_demo.js`](file:///d:/Code/FSD-2/Ch%209/mongodb_queries_demo.js).

### How to Run:
```bash
# Navigate to repository root and execute with Node.js
node "Ch 9/mongodb_queries_demo.js"
```

This script will automatically seed sample documents, run comparison queries (`$gt`, `$in`, `$and`), execute update operations (`$inc`, `$set`), perform pagination/projections, and execute `$match`/`$group` aggregation pipelines with formatted console output.
