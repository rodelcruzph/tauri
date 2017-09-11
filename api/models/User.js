/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string'
    },
    user_type: {
      type: 'integer',
      defaultsTo: 1
    }
  },

  validationMessages: {
    firstName: {
      required: 'Enter your first name'
    },
    lastName: {
      required: 'Enter your last name'
    },
    email: {
      email: 'Invalid email',
      required: 'Email is required',
      unique: 'Email already registered'
    },
    password: {
      required: 'Please enter a password'
    }
  }
};
