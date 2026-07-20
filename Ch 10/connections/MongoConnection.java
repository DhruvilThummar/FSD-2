/**
 * Chapter 10: MongoDB Connection Snippets
 * Technology: Java using Official Synchronous MongoDB Java Driver
 */

package com.fsd2.mongodb;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Indexes;
import com.mongodb.client.model.Sorts;

import org.bson.Document;
import org.bson.conversions.Bson;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

public class MongoConnection {

    private static final String CONNECTION_STRING = "mongodb://127.0.0.1:27017";
    private static final String DB_NAME = "fsd2_db";

    public static void main(String[] args) {
        // 1. Establish connection to MongoDB server
        try (MongoClient mongoClient = MongoClients.create(CONNECTION_STRING)) {
            System.out.println("✅ Connected to MongoDB successfully via Java Driver!");

            // 2. Access Database
            MongoDatabase database = mongoClient.getDatabase(DB_NAME);

            // 3. Access Collection
            MongoCollection<Document> studentCollection = database.getCollection("students");
            MongoCollection<Document> salesCollection = database.getCollection("sales");

            // 4. Create Compound Index: { product_id: 1, sale_date: -1 }
            salesCollection.createIndex(Indexes.compoundIndex(
                    Indexes.ascending("product_id"),
                    Indexes.descending("sale_date")
            ));
            System.out.println("✅ Compound Index created on sales collection!");

            // 5. Insert Multiple Documents (insertMany)
            Document doc1 = new Document("name", "Dhruvil")
                    .append("surname", "Thummar")
                    .append("age", 22)
                    .append("department", "CS");

            Document doc2 = new Document("name", "Ankit")
                    .append("surname", "Chavda")
                    .append("age", 23)
                    .append("department", "IT");

            List<Document> documentsList = Arrays.asList(doc1, doc2);
            studentCollection.insertMany(documentsList);
            System.out.println("✅ Inserted " + documentsList.size() + " documents using insertMany.");

            // 6. Regex Search: Matching names starting with 'Bharat' case-insensitive
            Bson regexFilter = Filters.regex("name", Pattern.compile("^Bharat", Pattern.CASE_INSENSITIVE));
            System.out.println("\n🔍 Querying with Regex /^Bharat/i:");

            for (Document doc : studentCollection.find(regexFilter)) {
                System.out.println(doc.toJson());
            }

            // 7. Find with Sorting and Pagination (skip & limit)
            System.out.println("\n🔍 Querying with Sort and Limit:");
            for (Document doc : studentCollection.find()
                    .sort(Sorts.descending("age"))
                    .limit(1)) {
                System.out.println("Oldest Student: " + doc.toJson());
            }

        } catch (Exception e) {
            System.err.println("❌ Error connecting to MongoDB: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
