/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var _ = require('lodash');

module.exports = {

  /**
   * `UserController.index()`
   */

  index: function(req, res) {
    User.find().exec(function(err, users) {
      if(err) {
        return res.serverError();
      }
      return res.json({users:users});
    });
  },

  /**
   * `UserController.login()`
   */
  login: function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {
    User.create(req.query).exec(function(error, user) {
      if(error) {
				return res.json(422, error);
			}
      return res.json(200, {fname: user.firstName, lname: user.lastName});
    });
  }
};
