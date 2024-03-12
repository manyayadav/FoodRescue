// MongoDB Schema for Food Donation Management System

// Import necessary modules
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create MongoDB connection
mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema for Admin collection
const adminSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  location: String,
  address: String,
});

// Define schema for Delivery Persons collection
const deliveryPersonSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  city: String,
});

// Define schema for Food Donations collection
const foodDonationSchema = new Schema({
  name: String,
  email: String,
  food: String,
  type: String,
  category: String,
  quantity: String,
  date: { type: Date, default: Date.now },
  address: String,
  location: String,
  phoneno: String,
  assigned_to: { type: Schema.Types.ObjectId, ref: 'DeliveryPerson' },
  delivery_by: { type: Schema.Types.ObjectId, ref: 'DeliveryPerson' },
});

// Define schema for Login collection
const loginSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  gender: String,
});

// Define schema for User Feedback collection
const userFeedbackSchema = new Schema({
  feedback_id: { type: Number, unique: true },
  name: String,
  email: String,
  message: String,
});

// Create models for each collection
const Admin = mongoose.model('Admin', adminSchema);
const DeliveryPerson = mongoose.model('DeliveryPerson', deliveryPersonSchema);
const FoodDonation = mongoose.model('FoodDonation', foodDonationSchema);
const Login = mongoose.model('Login', loginSchema);
const UserFeedback = mongoose.model('UserFeedback', userFeedbackSchema);

// Sample data for data entry
const adminData = [
  {
    name: 'Admin 1',
    email: 'admin1@example.com',
    password: 'adminpassword1',
    location: 'Admin Location 1',
    address: 'Admin Address 1',
  },
  {
    name: 'Admin 2',
    email: 'admin2@example.com',
    password: 'adminpassword2',
    location: 'Admin Location 2',
    address: 'Admin Address 2',
  },
];

const deliveryPersonData = [
  {
    name: 'Delivery Person 1',
    email: 'delivery1@example.com',
    password: 'deliverypassword1',
    city: 'City 1',
  },
  {
    name: 'Delivery Person 2',
    email: 'delivery2@example.com',
    password: 'deliverypassword2',
    city: 'City 2',
  },
];

const foodDonationData = [
  {
    name: 'Donor 1',
    email: 'donor1@example.com',
    food: 'Food 1',
    type: 'Type 1',
    category: 'Category 1',
    quantity: 'Quantity 1',
    address: 'Donor Address 1',
    location: 'Donor Location 1',
    phoneno: '1234567890',
  },
  {
    name: 'Donor 2',
    email: 'donor2@example.com',
    food: 'Food 2',
    type: 'Type 2',
    category: 'Category 2',
    quantity: 'Quantity 2',
    address: 'Donor Address 2',
    location: 'Donor Location 2',
    phoneno: '9876543210',
  },
];

const loginData = [
  {
    name: 'User 1',
    email: 'user1@example.com',
    password: 'userpassword1',
    gender: 'Male',
  },
  {
    name: 'User 2',
    email: 'user2@example.com',
    password: 'userpassword2',
    gender: 'Female',
  },
];

const userFeedbackData = [
  {
    feedback_id: 1,
    name: 'Rachel',
    email: 'rachel@example.com',
    message: 'I really enjoyed using your product!',
  },
  {
    feedback_id: 2,
    name: 'Chandeler',
    email: 'chandeler@gmail.com',
    message: 'good',
  },
  {
    feedback_id: 3,
    name: 'Joey',
    email: 'joey@gmail.com',
    message: 'liked it',
  },
  {
    feedback_id: 4,
    name: 'monica',
    email: 'monica@gmail.com',
    message: 'great',
  },
  {
    feedback_id: 5,
    name: 'ross',
    email: 'ross@gmail.com',
    message: 'great',
  },
  {
    feedback_id: 6,
    name: 'phoebe',
    email: 'phoebe@gmail.com',
    message: 'not good',
  },
];

// Insert sample data
async function insertData() {
  try {
    await Admin.insertMany(adminData);
    console.log('Admin data inserted successfully.');

    await DeliveryPerson.insertMany(deliveryPersonData);
    console.log('Delivery Person data inserted successfully.');

    await FoodDonation.insertMany(foodDonationData);
    console.log('Food Donation data inserted successfully.');

    await Login.insertMany(loginData);
    console.log('Login data inserted successfully.');

    await UserFeedback.insertMany(userFeedbackData);
    console.log('User Feedback data inserted successfully.');

    // Close MongoDB connection
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

// Call the function to insert data
insertData();
