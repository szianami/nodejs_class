/**
 * Using POST params update or save a task in the database
 * If res.locals.task is there, it's an update otherwise this middleware creates an entity
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         next();
     };
 };