const { status } = require('init');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const { error, Console } = require('console');
const { json } = require('stream/consumers');
const { connect } = require('http2');

const connection = mysql.createConnection({
    host: "buiog57at2a2sxd3zyyj-mysql.services.clever-cloud.com",
    user: "usksbaqmgf83ckuy",
    password: "wfBdRuxYRKhkRz6gPNup",
    port: 3306,
    database: "buiog57at2a2sxd3zyyj",
});

connection.connect(function () {
    console.log('Database connected')
});

exports.insert = (req, res) => {
    console.log(req.params.id);
    var insertdata = "INSERT INTO tbl_business (business_name) values(?)";
    connection.query(insertdata, [
        req.body.business_name
    ],
        function (err, results) {
            if (err) {
                res.end(JSON.stringify(err))
            } else {
                res.end(JSON.stringify(results))
            }
        }
    )
}
exports.dataget = (req, res) => {
    var get = "SELECT * FROM tbl_business";
    connection.query(get,
        function (err, results) {
            if (err) throw err
            res.json(results);
        }
    )
}
exports.deletebyid=(req,res)=>{
    console.log(req.params.id)
   var deleterec = "DELETE FROM tbl_business WHERE business_id=? ";
   connection.query(deleterec,[req.params.id],
    function (err, results)
    {
        if(err){
            res.end(JSON.stringify(err))
        } else{
            res.end(JSON.stringify(results))
        }
    }
   )
}