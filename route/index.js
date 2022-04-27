const authMW = require('../middleware/auth/authMW');
const checkPassMW = require('../middleware/auth/checkPassMW');
const renderMW = require('../middleware/renderMW');
const getUsersMW = require('../middleware/user/getUsersMW');
const getUserMW = require('../middleware/user/getUserMW');
const getUnassignedTasksMW = require('../middleware/task/getUnassignedTasksMW.js');
const getTasksMW = require('../middleware/task/getTasksMW');    // additional functionality - not used yet
const getTaskMW = require('../middleware/task/getTaskMW');
const saveTaskMW = require('../middleware/task/saveTaskMW');
const delTaskMW = require('../middleware/task/delTaskMW');

module.exports = function (app) {
    const objRepo = {};
    
    app.get('/dashboard/tasks/:taskid',
        authMW(objRepo),
        getTaskMW(objRepo),
        renderMW(objRepo, 'task'));
    app.use('/dashboard/tasks/new/:taskid',
        authMW(objRepo),
        saveTaskMW(objRepo),
        renderMW(objRepo, 'new_task'));
    app.use('/dashboard/tasks/edit/:taskid',
        authMW(objRepo),
        getTaskMW(objRepo),
        saveTaskMW(objRepo),
        renderMW(objRepo, 'edit_task'));
    app.get('/dashboard/tasks/del/:taskid',
        authMW(objRepo),
        getTaskMW(objRepo),
        delTaskMW(objRepo));
    
    app.get('/dashboard',
        authMW(objRepo),
        getUserMW(objRepo),
	    getUnassignedTasksMW(objRepo),
        renderMW(objRepo, 'dashboard'));

    app.get('/task',
        authMW(objRepo),
        getTaskMW(objRepo),
        renderMW(objRepo, 'task'));
        
    app.use('/team/:user/:taskid',
        authMW(objRepo),
        getTaskMW(objRepo),
        renderMW(objRepo, 'task'));
    app.use('/team/:user/new/:taskid',
        authMW(objRepo),
        getUserMW(objRepo),
        getTaskMW(objRepo),
        saveTaskMW(objRepo),
        renderMW(objRepo, 'new_task'));
    app.use('/team/:user/edit/:taskid',
        authMW(objRepo),
        getUserMW(objRepo),
        getTaskMW(objRepo),
        saveTaskMW(objRepo),
        renderMW(objRepo, 'edit_task'));
    app.get('/team/:user/del/:taskid',
        authMW(objRepo),
        getUserMW(objRepo),
        getTaskMW(objRepo),
        delTaskMW(objRepo));
    app.get('/team',
        authMW(objRepo),
        getUsersMW(objRepo),
        renderMW(objRepo, 'team'));

    app.use('/',
        checkPassMW(objRepo),
        renderMW(objRepo, 'index'));

}