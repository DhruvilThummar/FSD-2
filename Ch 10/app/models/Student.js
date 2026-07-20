/**
 * Student Model Definition with Mongoose Schemas, Custom Validation, Hooks & Indexing
 */

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Student name is mandatory'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  surname: {
    type: String,
    required: [true, 'Surname is mandatory'],
    trim: true,
    validate: {
      // Regex: Must consist of 6 to 10 alphabetic letters
      validator: function(v) {
        return /^[A-Za-z]{6,10}$/.test(v);
      },
      message: props => `${props.value} is invalid! Surname must be 6 to 10 letters only.`
    }
  },
  age: {
    type: Number,
    min: [18, 'Minimum age requirement is 18'],
    max: [100, 'Maximum age exceeded']
  },
  department: {
    type: String,
    enum: {
      values: ['CS', 'IT', 'ECE', 'ME'],
      message: '{VALUE} is not a supported department'
    },
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active'
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt automatic timestamps
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// ==========================================
// 1. COMPOUND INDEXING
// Optimizes queries sorting/filtering by surname & department (IXSCAN vs COLLSCAN)
// ==========================================
studentSchema.index({ surname: 1, department: -1 });

// ==========================================
// 2. MONGOOSE VIRTUAL PROPERTIES
// Computed field that is NOT stored in MongoDB document
// ==========================================
studentSchema.virtual('fullName').get(function() {
  return `${this.name} ${this.surname}`;
});

// ==========================================
// 3. MIDDLEWARE HOOKS (pre & post)
// Executed automatically before or after document operations
// ==========================================

// Pre-save hook: Normalize casing before saving
studentSchema.pre('save', function(next) {
  if (this.name) {
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }
  next();
});

// Post-save hook: Logging after insertion
studentSchema.post('save', function(doc, next) {
  console.log(`📌 Document saved to database: ${doc.fullName} (ID: ${doc._id})`);
  next();
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
