const { getUserDatabase } = require('../models/database');
const bcryptjs = require('bcryptjs');
const { ObjectId } = require('mongodb');

const createUser = async (fullname, contact, gender, email, password) => {
    const db = await getUserDatabase();
    const collection = db.collection('customer');
    const newObjectId = new ObjectId().toString();
    const hashedPassword = await bcryptjs.hash(password, 10);
    const hpassword = hashedPassword;
    await collection.createIndex({ email: 1 }, { unique: true });
    const userData = {
        _id: newObjectId,
        fullname,
        contact,
        gender,
        email,
        hpassword,
    };
    const result = await collection.insertOne(userData);
    return result;
}

const loginUser = async (email, password) => {
    const db = await getUserDatabase();
    const collection = db.collection('customer');
    const user = await collection.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordValid = await bcryptjs.compare(password, user.hpassword);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    return user;
}

const getUSerById = async (_id) => {
    const db = await getUserDatabase();
    const collection = db.collection('customer');
    const user = await collection.findOne({ _id });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}

const setUserAddress = async (userId, pin, address, city, state, district) => {
    const db = await getUserDatabase();
    const collection = db.collection('address');
    const AddressObjectId = new ObjectId().toString();
    const result = await collection.insertOne({ _id: AddressObjectId, userId, pin, address, city, state, district });
    return result
}

const getUserAddress = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('address');
    const address = await collection.findOne({ userId });
    if (!address) {
        throw new Error('Address not found');
    }
    return address;
}

const setUserOrder = async (userId, product_id, address_id, product_quantity, payment_method, total_amount, discount_amount, timestamp ) => {
    const db = await getUserDatabase();
    const collection = db.collection('order');
    const OrderObjectId = new ObjectId().toString();
    const result = await collection.insertOne({ _id: OrderObjectId, userId, product_id, address_id, product_quantity, payment_method, total_amount, discount_amount, timestamp});
    return result
}

const getUserOrder = async (userId) => {
    const db = await getUserDatabase();
    const collection = db.collection('order');
    const order = await collection.findOne({ userId });
    if (!order) {
        throw new Error('Order not found');
    }
    return order;
}

module.exports = {
    createUser,
    loginUser,
    getUSerById,
    setUserAddress,
    getUserAddress,
    setUserOrder,
    getUserOrder
};

