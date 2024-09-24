module.exports = (app) => {

    const apiroute = require('./APIController')

    app.post('/insert',apiroute.insert);
    app.get('/dataget',apiroute.dataget);
    app.delete('/deletebyid/:id',apiroute.deletebyid);
}