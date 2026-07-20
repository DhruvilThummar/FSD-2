/**
 * Chapter 9: MongoDB Live Demo & Developer Playground
 * 
 * Instructions to run:
 * 1. Make sure MongoDB service is running locally on mongodb://127.0.0.1:27017
 * 2. Run: node "Ch 9/mongodb_queries_demo.js"
 */

const { MongoClient } = require('mongodb');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'ch9_demo_db';

async function runDemo() {
  const client = new MongoClient(MONGO_URI);

  try {
    console.log('Connecting to MongoDB server...');
    await client.connect();
    console.log('✅ Connected successfully to MongoDB!\n');

    const db = client.db(DB_NAME);

    // Clean up previous test collections
    await db.collection('students').drop().catch(() => {});
    await db.collection('emp').drop().catch(() => {});
    await db.collection('products').drop().catch(() => {});
    await db.collection('sales').drop().catch(() => {});

    // =========================================================
    // 1. SEED DATA (insertMany)
    // =========================================================
    console.log('📦 Seeding sample data...');

    const studentsCol = db.collection('students');
    await studentsCol.insertMany([
      { name: 'CCC', surname: 'Thummar', age: 20, department: 'CS', status: 'Active', marks: 85 },
      { name: 'PPP', surname: 'Patel', age: 22, department: 'IT', status: 'Active', marks: 92 },
      { name: 'BBB', surname: 'Shah', age: 25, department: 'CS', status: 'Active', marks: 78 },
      { name: 'AAA', surname: 'Mehta', age: 19, department: 'ECE', status: 'Inactive', marks: 64 },
      { name: 'DDD', surname: 'Joshi', age: 21, department: 'IT', status: 'Active', marks: 88 }
    ]);

    const empCol = db.collection('emp');
    await empCol.insertMany([
      { name: 'John Doe', age: 30, salary: 50000 },
      { name: 'Jane Smith', age: 45, salary: 75000 },
      { name: 'Robert Johnson', age: 50, salary: 90000 },
      { name: 'Emily Davis', age: 28, salary: 48000 }
    ]);

    const productsCol = db.collection('products');
    await productsCol.insertMany([
      { product: 'Laptop', price: 1200, category: 'Electronics' },
      { product: 'Mouse', price: 25, category: 'Electronics' },
      { product: 'Keyboard', price: 60, category: 'Electronics' },
      { product: 'Monitor', price: 300, category: 'Electronics' }
    ]);

    console.log('✅ Sample collections created & populated successfully!\n');

    // =========================================================
    // 2. QUERY & COMPARISON OPERATORS
    // =========================================================
    console.log('🔍 2.1 Querying with $in and sorting descending by name:');
    const inQueryResult = await studentsCol
      .find({ name: { $in: ['CCC', 'PPP', 'BBB'] } })
      .sort({ name: -1 })
      .toArray();
    console.log(inQueryResult);

    console.log('\n🔍 2.2 Finding products with price > 50 ($gt):');
    const cheapProducts = await productsCol.find({ price: { $gt: 50 } }).toArray();
    console.log(cheapProducts);

    console.log('\n🔍 2.3 Logical $and query (age != 20 AND age != 25):');
    const filteredStudents = await studentsCol.find({
      $and: [{ age: { $ne: 20 } }, { age: { $ne: 25 } }]
    }).toArray();
    console.log(filteredStudents);

    // =========================================================
    // 3. UPDATES ($set & $inc)
    // =========================================================
    console.log('\n🔄 3.1 Incrementing age of all students by 10 ($inc):');
    const incResult = await studentsCol.updateMany({}, { $inc: { age: 10 } });
    console.log(`Matched: ${incResult.matchedCount}, Modified: ${incResult.modifiedCount}`);

    console.log('\n🔄 3.2 Setting join_date to current Date for all ($set):');
    await studentsCol.updateMany({}, { $set: { join_date: new Date() } });
    const updatedStudent = await studentsCol.findOne({});
    console.log('Sample document after update:', updatedStudent);

    // =========================================================
    // 4. SORTING, PAGINATION & PROJECTION
    // =========================================================
    console.log('\n📶 4.1 Finding highest age employee (sort descending & limit 1):');
    const oldestEmp = await empCol.find().sort({ age: -1 }).limit(1).toArray();
    console.log('Oldest employee:', oldestEmp);

    console.log('\n📶 4.2 Pagination with skip(2).limit(1) and Projection { name: 1, _id: 0 }:');
    const paginatedEmp = await empCol
      .find({}, { projection: { name: 1, _id: 0 } })
      .skip(2)
      .limit(1)
      .toArray();
    console.log('3rd employee name:', paginatedEmp);

    // =========================================================
    // 5. AGGREGATION PIPELINE ($match, $group, $project, $sort)
    // =========================================================
    console.log('\n📊 5.1 Aggregation: Filter marks > 80 and sort ascending:');
    const aggPipeline1 = await studentsCol.aggregate([
      { $match: { marks: { $gt: 80 } } },
      { $sort: { marks: 1 } },
      { $project: { name: 1, marks: 1, department: 1, _id: 0 } }
    ]).toArray();
    console.log(aggPipeline1);

    console.log('\n📊 5.2 Aggregation: Group by department and count total students ($group):');
    const deptGroup = await studentsCol.aggregate([
      { $group: { _id: '$department', totalStudents: { $sum: 1 }, avgMarks: { $avg: '$marks' } } }
    ]).toArray();
    console.log(deptGroup);

  } catch (error) {
    console.error('❌ Error executing MongoDB demo:', error);
  } finally {
    await client.close();
    console.log('\n🔌 Database connection closed.');
  }
}

runDemo();
