"""
Chapter 10: MongoDB Connection Snippets
Technology: Python using PyMongo and MongoEngine (ODM)
"""

import re
from pymongo import MongoClient, ASCENDING, DESCENDING

# ==========================================
# Method 1: Connecting using PyMongo
# ==========================================

MONGO_URI = "mongodb://127.0.0.1:27017/"

def connect_pymongo():
    try:
        # Create a MongoClient
        client = MongoClient(MONGO_URI)
        
        # Access Database
        db = client["fsd2_db"]
        print("✅ Connected to MongoDB via PyMongo!")
        
        # Access Collection
        students_collection = db["students"]
        
        # Create Compound Index: { product_id: 1, sale_date: -1 }
        sales_collection = db["sales"]
        sales_collection.create_index([("product_id", ASCENDING), ("sale_date", DESCENDING)])
        print("✅ Compound index created successfully on sales collection!")
        
        # Insert Multiple Documents (insertMany equivalent in PyMongo: insert_many)
        new_students = [
            {"name": "Bharat", "surname": "Thummar", "age": 22, "department": "CS"},
            {"name": "Bhavik", "surname": "Solanki", "age": 24, "department": "IT"}
        ]
        result = students_collection.insert_many(new_students)
        print(f"Inserted document IDs: {result.inserted_ids}")
        
        # Query using Regex starting with 'Bharat' case-insensitive
        regex_pattern = re.compile(r"^Bharat", re.IGNORECASE)
        query = {"name": {"$regex": regex_pattern}}
        
        print("\n🔍 Query Results for regex /^Bharat/i:")
        for doc in students_collection.find(query):
            print(doc)
            
        # Check query execution performance / plan
        explain_plan = students_collection.find({"surname": "Thummar"}).explain()
        print("\n📊 Query Stage:", explain_plan.get('queryPlanner', {}).get('winningPlan', {}).get('stage'))
        
        client.close()
    except Exception as e:
        print(f"❌ Error connecting to MongoDB: {e}")

# ==========================================
# Method 2: Connecting using MongoEngine (ODM)
# ==========================================
from mongoengine import connect, Document, StringField, IntField

def connect_mongoengine():
    try:
        connect(db="fsd2_db", host="127.0.0.1", port=27017)
        print("✅ Connected via MongoEngine!")
        
        class Student(Document):
            name = StringField(required=True, max_length=50)
            surname = StringField(required=True, regex=r"^[A-Za-z]{6,10}$")
            age = IntField(min_value=18, max_value=100)
            department = StringField(choices=["CS", "IT", "ECE", "ME"])
            
        # Create and Save a Document
        s1 = Student(name="Rohan", surname="Sharma", age=21, department="CS")
        s1.save()
        print(f"Saved Student via MongoEngine ID: {s1.id}")
        
    except Exception as e:
        print(f"❌ MongoEngine error: {e}")

if __name__ == "__main__":
    connect_pymongo()
    # connect_mongoengine()
