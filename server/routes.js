const readAll = require('./controllers')
const bp = require('body-parser');
const api = require('./controllers');

function router(app){
    app.use(bp.json());
    app.get('/api/tasks', api.readAll);
    app.get('/api/tasks/:id', api.readOne);
    app.delete('/api/delete/:id', api.deleteOne);
    app.put('/api/update/:id', api.updateOne);
    app.post('/api/tasks', api.createOne);
};

module.exports=router;