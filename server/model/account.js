const mongoose = require('mongoose');
const marked = require('marked');
const slugify = require('slugify');
const createDomPurify = require('dompurify');
const validator = require('validator');

const { isEmail } = validator;

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required',
        maxlength: [20, 'name can not be more than 20 characters'],
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true,
        validate: [isEmail, 'invalidEmail'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Article', accountSchema);
