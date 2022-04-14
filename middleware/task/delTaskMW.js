/**
 * Removes a task from the database, the entity used here is: res.locals.task
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         next();
     };
 };