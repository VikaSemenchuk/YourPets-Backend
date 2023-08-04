
const mongoose = require('mongoose');
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
const gravatar = require('gravatar');
const { mongooseError } = require('../../middlewares');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            default: 'User',
            required: [true, 'Name is required'],
           
    },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            match: emailRegex,
            unique: true,
        },
        birthday: {
            type: String,
            default: ""
        },
        phone: {
            type: String,
            default: '+380000000000'
        },
        city: {
            type: String,
            default: 'Kyiv'
        },

        token: {
            type: String,
            default: null,
        },
        avatarURL: {
            type: String,
            default: gravatar.url('cats@gmail.com', {s:500})
        },
        favorites: {
            type: Array,
            default:[]
        }
    },
    {
      timestamps: true,
      versionKey: false
    }
);

userSchema.post("save", mongooseError)
const User = mongoose.model('User', userSchema);

module.exports = User;
