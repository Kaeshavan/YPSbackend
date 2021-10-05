const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const app = express()
app.use(cors())

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

const db = mysql.createPool({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b7d0c91ff243da',
    password: '18a1d344',
    database: 'heroku_dafce818280299d'
});

mysql://b7d0c91ff243da:18a1d344@eu-cdbr-west-01.cleardb.com/heroku_dafce818280299d?


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.put('/api/save', (req, res)=>{

    const SID =  req.body.SID
    const PID = req.body.PID
    const age =  req.body.age
    const sex = req.body.sex
    const high_edu_qual = req.body.h_edu_qualification
    const cur_inst = req.body.current_inst
    const admr_det = req.body.admirer_det
    const admr_qual_1 = req.body.admirer_quality_1
    const admr_qual_2 = req.body.admirer_quality_2
    const admr_qual_3 = req.body.admirer_quality_3

    const sqlCheck = "SELECT * FROM surveydata WHERE PID = ?;"
    db.query(sqlCheck, [PID], (err, result)=> {
        if(err){
            res.send({ message: "An error has occured" });
        }

        if(result.length > 0){
            const sqlUpdate = "UPDATE surveydata SET age=?, sex=?, high_edu_qual=?, cur_inst=?, admr_det=?, admr_qual_1=?, admr_qual_2=?, admr_qual_3=? WHERE PID=? ;"
            db.query(sqlUpdate, [age, sex, high_edu_qual, cur_inst, admr_det, admr_qual_1, admr_qual_2, admr_qual_3, PID], (err, result)=> {console.log(err)});

        } else {
            const sqlInsert = "INSERT INTO surveydata (PID, age, sex, high_edu_qual, cur_inst, admr_det, admr_qual_1, admr_qual_2, admr_qual_3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);"
            db.query(sqlInsert, [PID, age, sex, high_edu_qual, cur_inst, admr_det, admr_qual_1, admr_qual_2, admr_qual_3], (err, result)=> {console.log(err)});


        }

    });
})


app.put('/api/submission', (req, res)=>{

    const SID =  req.body.SID
    const PID = req.body.PID
    const age =  req.body.age
    const sex = req.body.sex
    const high_edu_qual = req.body.h_edu_qualification
    const cur_inst = req.body.current_inst
    const admr_det = req.body.admirer_det
    const admr_qual_1 = req.body.admirer_quality_1
    const admr_qual_2 = req.body.admirer_quality_2
    const admr_qual_3 = req.body.admirer_quality_3

    const sqlCheck = "SELECT * FROM surveydata WHERE PID = ?;"
    db.query(sqlCheck, [PID], (err, result)=> {
        if(err){
            res.send({ message: "An error has occured" });
        }

        if(result.length > 0){
            const sqlUpdate = "UPDATE surveydata SET age=?, sex=?, high_edu_qual=?, cur_inst=?, admr_det=?, admr_qual_1=?, admr_qual_2=?, admr_qual_3=? WHERE PID=? ;"
            db.query(sqlUpdate, [age, sex, high_edu_qual, cur_inst, admr_det, admr_qual_1, admr_qual_2, admr_qual_3, PID], (err, result)=> {console.log(err)});

        } else {
            const sqlInsert = "INSERT INTO surveydata (PID, age, sex, high_edu_qual, cur_inst, admr_det, admr_qual_1, admr_qual_2, admr_qual_3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);"
            db.query(sqlInsert, [PID, age, sex, high_edu_qual, cur_inst, admr_det, admr_qual_1, admr_qual_2, admr_qual_3], (err, result)=> {console.log(err)});


        }

    });

    const sqlInsert2 = "UPDATE registrations SET complete = 'TRUE' WHERE PID = (?);"
    db.query(sqlInsert2, [PID], (err, result)=> {console.log(err)});
})

app.post('/api/signup', (req, res)=>{

    const email = req.body.email
    const password =  req.body.password
    const complete = 'FALSE'


    const sqlCheck = "SELECT * FROM registrations WHERE email = ?;"
    db.query(sqlCheck, [email], (err, result)=> {
        if(err){
            res.send({ message: "An error has occured" });
        } 

        if(result.length > 0) {
            res.send({ message: "User already exits" });
        } else {
            const sqlInsert = "INSERT INTO registrations (email, password, complete) VALUES (?, ?, ?);"
            db.query(sqlInsert, [email, password, complete], (err, result)=> {
                if(err){
                    res.send({ err: err });
                } else {
                    const sqlInsert = "SELECT PID FROM registrations WHERE email = ?;"
                    db.query(sqlInsert, [email], (err, result)=> {
                        res.send(result);                       

                    }
                    
                    );

                }

            });
        }

    });

    
})

app.post('/api/login', (req, res)=>{

    const email = req.body.email
    const password =  req.body.password

    const sqlInsert = "SELECT * FROM registrations WHERE email = ? AND password = ?;"
    db.query(sqlInsert, [email, password], (err, result)=> {
        if(err){
            res.send({ err: err });
        } 

        if(result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "Wrong combination" });
        }

        

    }
    
    );
})

app.post('/api/getdata', (req, res)=> {
    const PID = req.body.PID

    const sqlgetData = "SELECT * FROM surveydata WHERE PID = ?;"
    db.query(sqlgetData, [PID], (err, result)=> {
        res.send(result);    
    });
})

app.listen(process.env.PORT || PORT, () => {
    console.log("This is running on port 3030");
});


// const Emails = (result) => {
//     var obj = JSON.parse(result);
//     var array = [];
              
//     for(var i in obj)
//         array.push(obj[i]);

// }