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

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'current password',
    database: 'ypssurvey'
});



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.put('/save', (req, res)=>{

    const SID =  req.body.SID
    const PID = req.body.PID
    const q11 = req.body.q11
    const q12 = req.body.q12
    const q13 = req.body.q13.toString();
    const q14 = req.body.q14
    const q15 = req.body.q15
    const q16 = req.body.q16.toString();
    const q17 = req.body.q17
    const q18 = req.body.q18
    const q19 = req.body.q19
    const q110 = req.body.q110
    const q111 = req.body.q111
    const q112a = req.body.q112a
    const q112b = req.body.q112b
    const q112c = req.body.q112c
    const q113a = req.body.q113a
    const q113b = req.body.q113b
    const q113c = req.body.q113c
    const q114a = req.body.q114a
    const q114b = req.body.q114b
    const q114c = req.body.q114c
    const q115a = req.body.q115a
    const q115b = req.body.q115b
    const q115c = req.body.q115c
    const q115d = req.body.q115d
    const q116 = req.body.q116.toString();
    const q117 = req.body.q117.toString();
    const q118 = req.body.q118.toString();
    const q119 = req.body.q119.toString();
    const q120 = req.body.q120
    const q21a = req.body.q21a
    const q22 = req.body.q22.toString();
    const q23 = req.body.q23.toString();
    const q24 = req.body.q24.toString();
    const q31_1 = req.body.q31_1
    const q31_2 = req.body.q31_2
    const q31_3 = req.body.q31_3
    const q31_4 = req.body.q31_4
    const q31_5 = req.body.q31_5
    const q31_6 = req.body.q31_6
    const q31_7 = req.body.q31_7
    const q31_8 = req.body.q31_8
    const q31_9 = req.body.q31_9
    const q31_10 = req.body.q31_10
    const q31_11 = req.body.q31_11
    const q31_12 = req.body.q31_12
    const q31_13 = req.body.q31_13
    const q31_14 = req.body.q31_14
    const q31_15 = req.body.q31_15
    const q31_16 = req.body.q31_16
    const q31_17 = req.body.q31_17
    const q31_18 = req.body.q31_18
    const q31_19 = req.body.q31_19
    const q31_20 = req.body.q31_20
    const q31_21 = req.body.q31_21
    const q31_22 = req.body.q31_22
    const q32 = req.body.q32
    const q33 = req.body.q33.toString();
    const q41a = req.body.q41a
    const q41b = req.body.q41b
    const q41c = req.body.q41c
    const q41d = req.body.q41d
    const q42a = req.body.q42a
    const q42b = req.body.q42b
    const q42c = req.body.q42c
    const q42d = req.body.q42d
    const q43 = req.body.q43.toString();
    const q44a = req.body.q44a
    const q44b = req.body.q44b
    const q44c = req.body.q44c
    const q44d = req.body.q44d
    const q45a = req.body.q45a
    const q45b = req.body.q45b
    const q45c = req.body.q45c
    const q45d = req.body.q45d
    const q46 = req.body.q46.toString();
    const q47 = req.body.q47.toString();
    const q48 = req.body.q48
    const q49 = req.body.q49
    const q410 = req.body.q410.toString();
    const q411_1 = req.body.q411_1
    const q411_2 = req.body.q411_2
    const q411_3 = req.body.q411_3
    const q411_4 = req.body.q411_4
    const q411_5 = req.body.q411_5
    const q411_6 = req.body.q411_6
    const q411_7 = req.body.q411_7
    const q411_8 = req.body.q411_8
    const q411_9 = req.body.q411_9
    const q411_10 = req.body.q411_10
    const q51 = req.body.q51.toString();
    const q521 = req.body.q521
    const q522 = req.body.q522
    const q523 = req.body.q523
    const q524 = req.body.q524
    const q525 = req.body.q525
    const q526 = req.body.q526
    const q527 = req.body.q527
    const q528 = req.body.q528
    const q529 = req.body.q529
    const q5210 = req.body.q5210
    const q53 = req.body.q53.toString();
    const q54 = req.body.q54
    const q55 = req.body.q55
    const q56 = req.body.q56
    const q57 = req.body.q57
    const q58 = req.body.q58
    const q59 = req.body.q59.toString();
    const q510a = req.body.q510a
    const q510b = req.body.q510b
    const q510c = req.body.q510c
    const q61 = req.body.q61
    const q62 = req.body.q62
    const q63 = req.body.q63.toString();
    const q64 = req.body.q64.toString();
    const q65 = req.body.q65.toString();
    const q66 = req.body.q66.toString();
    const q67 = req.body.q67
    const q68 = req.body.q68.toString();
    const q69 = req.body.q69
    const q610 = req.body.q610.toString();

    const sqlCheck = "SELECT * FROM surveydata WHERE PID = ?;"
    db.query(sqlCheck, [PID], (err, result)=> {
        if(err){
            res.send({ message: "An error has occured" });
        }

        if(result.length > 0){
            const sqlUpdate = "UPDATE surveydata SET q11=?, q12=?, q13=?, q14=?, q15=?, q16=?, q17=?, q18=?, q19=?, q110=?, q111=?, q112a=?, q112b=?, q112c=?, q113a=?, q113b=?, q113c=?, q114a=?, q114b=?, q114c=?, q115a=?, q115b=?, q115c=?, q115d=?, q116=?, q117=?, q118=?, q119=?, q120=?, q21a=?, q22=?, q23=?, q24=?, q31_1=?, q31_2=?, q31_3=?, q31_4=?, q31_5=?, q31_6=?, q31_7=?, q31_8=?, q31_9=?, q31_10=?, q31_11=?, q31_12=?, q31_13=?, q31_14=?, q31_15=?, q31_16=?, q31_17=?, q31_18=?, q31_19=?, q31_20=?, q31_21=?, q31_22=?, q32=?, q33=?, q41a=?, q41b=?, q41c=?, q41d=?, q42a=?, q42b=?, q42c=?, q42d=?, q43=?, q44a=?, q44b=?, q44c=?, q44d=?, q45a=?, q45b=?, q45c=?, q45d=?, q46=?, q47=?, q48=?, q49=?, q410=?, q411_1=?, q411_2=?, q411_3=?, q411_4=?, q411_5=?, q411_6=?, q411_7=?, q411_8=?, q411_9=?, q411_10=?, q51=?, q521=?, q522=?, q523=?, q524=?, q525=?, q526=?, q527=?, q528=?, q529=?, q5210=?, q53=?, q54=?, q55=?, q56=?, q57=?, q58=?, q59=?, q510a=?, q510b=?, q510c=?, q61=?, q62=?, q63=?, q64=?, q65=?, q66=?, q67=?, q68=?, q69=?, q610=? WHERE PID=? ;"
            db.query(sqlUpdate, [q11, q12, q13, q14, q15, q16, q17, q18, q19, q110, q111, q112a, q112b, q112c, q113a, q113b, q113c, q114a, q114b, q114c, q115a, q115b, q115c, q115d, q116, q117, q118, q119, q120, q21a, q22, q23, q24, q31_1, q31_2, q31_3, q31_4, q31_5, q31_6, q31_7, q31_8, q31_9, q31_10, q31_11, q31_12, q31_13, q31_14, q31_15, q31_16, q31_17, q31_18, q31_19, q31_20, q31_21, q31_22, q32, q33, q41a, q41b, q41c, q41d, q42a, q42b, q42c, q42d, q43, q44a, q44b, q44c, q44d, q45a, q45b, q45c, q45d, q46, q47, q48, q49, q410, q411_1, q411_2, q411_3, q411_4, q411_5, q411_6, q411_7, q411_8, q411_9, q411_10, q51, q521, q522, q523, q524, q525, q526, q527, q528, q529, q5210, q53, q54, q55, q56, q57, q58, q59, q510a, q510b, q510c, q61, q62, q63, q64, q65, q66, q67, q68, q69, q610, PID], (err, result)=> {console.log(err)});

        } else {
            const sqlInsert = "INSERT INTO surveydata (PID, q11, q12, q13, q14, q15, q16, q17, q18, q19, q110, q111, q112a, q112b, q112c, q113a, q113b, q113c, q114a, q114b, q114c, q115a, q115b, q115c, q115d, q116, q117, q118, q119, q120, q21a, q22, q23, q24, q31_1, q31_2, q31_3, q31_4, q31_5, q31_6, q31_7, q31_8, q31_9, q31_10, q31_11, q31_12, q31_13, q31_14, q31_15, q31_16, q31_17, q31_18, q31_19, q31_20, q31_21, q31_22, q32, q33, q41a, q41b, q41c, q41d, q42a, q42b, q42c, q42d, q43, q44a, q44b, q44c, q44d, q45a, q45b, q45c, q45d, q46, q47, q48, q49, q410, q411_1, q411_2, q411_3, q411_4, q411_5, q411_6, q411_7, q411_8, q411_9, q411_10, q51, q521, q522, q523, q524, q525, q526, q527, q528, q529, q5210, q53, q54, q55, q56, q57, q58, q59, q510a, q510b, q510c, q61, q62, q63, q64, q65, q66, q67, q68, q69, q610) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
            db.query(sqlInsert, [PID, q11, q12, q13, q14, q15, q16, q17, q18, q19, q110, q111, q112a, q112b, q112c, q113a, q113b, q113c, q114a, q114b, q114c, q115a, q115b, q115c, q115d, q116, q117, q118, q119, q120, q21a, q22, q23, q24, q31_1, q31_2, q31_3, q31_4, q31_5, q31_6, q31_7, q31_8, q31_9, q31_10, q31_11, q31_12, q31_13, q31_14, q31_15, q31_16, q31_17, q31_18, q31_19, q31_20, q31_21, q31_22, q32, q33, q41a, q41b, q41c, q41d, q42a, q42b, q42c, q42d, q43, q44a, q44b, q44c, q44d, q45a, q45b, q45c, q45d, q46, q47, q48, q49, q410, q411_1, q411_2, q411_3, q411_4, q411_5, q411_6, q411_7, q411_8, q411_9, q411_10, q51, q521, q522, q523, q524, q525, q526, q527, q528, q529, q5210, q53, q54, q55, q56, q57, q58, q59, q510a, q510b, q510c, q61, q62, q63, q64, q65, q66, q67, q68, q69, q610], (err, result)=> {console.log(err)});


        }

    });
})


app.put('/submission', (req, res)=>{

    const SID =  req.body.SID
    const PID = req.body.PID
    const q11 = req.body.q11
    const q12 = req.body.q12
    const q13 = req.body.q13.toString();
    const q14 = req.body.q14
    const q15 = req.body.q15
    const q16 = req.body.q16.toString();
    const q17 = req.body.q17
    const q18 = req.body.q18
    const q19 = req.body.q19
    const q110 = req.body.q110
    const q111 = req.body.q111
    const q112a = req.body.q112a
    const q112b = req.body.q112b
    const q112c = req.body.q112c
    const q113a = req.body.q113a
    const q113b = req.body.q113b
    const q113c = req.body.q113c
    const q114a = req.body.q114a
    const q114b = req.body.q114b
    const q114c = req.body.q114c
    const q115a = req.body.q115a
    const q115b = req.body.q115b
    const q115c = req.body.q115c
    const q115d = req.body.q115d
    const q116 = req.body.q116.toString();
    const q117 = req.body.q117.toString();
    const q118 = req.body.q118.toString();
    const q119 = req.body.q119.toString();
    const q120 = req.body.q120
    const q21a = req.body.q21a
    const q22 = req.body.q22.toString();
    const q23 = req.body.q23.toString();
    const q24 = req.body.q24.toString();
    const q31_1 = req.body.q31_1
    const q31_2 = req.body.q31_2
    const q31_3 = req.body.q31_3
    const q31_4 = req.body.q31_4
    const q31_5 = req.body.q31_5
    const q31_6 = req.body.q31_6
    const q31_7 = req.body.q31_7
    const q31_8 = req.body.q31_8
    const q31_9 = req.body.q31_9
    const q31_10 = req.body.q31_10
    const q31_11 = req.body.q31_11
    const q31_12 = req.body.q31_12
    const q31_13 = req.body.q31_13
    const q31_14 = req.body.q31_14
    const q31_15 = req.body.q31_15
    const q31_16 = req.body.q31_16
    const q31_17 = req.body.q31_17
    const q31_18 = req.body.q31_18
    const q31_19 = req.body.q31_19
    const q31_20 = req.body.q31_20
    const q31_21 = req.body.q31_21
    const q31_22 = req.body.q31_22
    const q32 = req.body.q32
    const q33 = req.body.q33.toString();
    const q41a = req.body.q41a
    const q41b = req.body.q41b
    const q41c = req.body.q41c
    const q41d = req.body.q41d
    const q42a = req.body.q42a
    const q42b = req.body.q42b
    const q42c = req.body.q42c
    const q42d = req.body.q42d
    const q43 = req.body.q43.toString();
    const q44a = req.body.q44a
    const q44b = req.body.q44b
    const q44c = req.body.q44c
    const q44d = req.body.q44d
    const q45a = req.body.q45a
    const q45b = req.body.q45b
    const q45c = req.body.q45c
    const q45d = req.body.q45d
    const q46 = req.body.q46.toString();
    const q47 = req.body.q47.toString();
    const q48 = req.body.q48
    const q49 = req.body.q49
    const q410 = req.body.q410.toString();
    const q411_1 = req.body.q411_1
    const q411_2 = req.body.q411_2
    const q411_3 = req.body.q411_3
    const q411_4 = req.body.q411_4
    const q411_5 = req.body.q411_5
    const q411_6 = req.body.q411_6
    const q411_7 = req.body.q411_7
    const q411_8 = req.body.q411_8
    const q411_9 = req.body.q411_9
    const q411_10 = req.body.q411_10
    const q51 = req.body.q51.toString();
    const q521 = req.body.q521
    const q522 = req.body.q522
    const q523 = req.body.q523
    const q524 = req.body.q524
    const q525 = req.body.q525
    const q526 = req.body.q526
    const q527 = req.body.q527
    const q528 = req.body.q528
    const q529 = req.body.q529
    const q5210 = req.body.q5210
    const q53 = req.body.q53.toString();
    const q54 = req.body.q54
    const q55 = req.body.q55
    const q56 = req.body.q56
    const q57 = req.body.q57
    const q58 = req.body.q58
    const q59 = req.body.q59.toString();
    const q510a = req.body.q510a
    const q510b = req.body.q510b
    const q510c = req.body.q510c
    const q61 = req.body.q61
    const q62 = req.body.q62
    const q63 = req.body.q63.toString();
    const q64 = req.body.q64.toString();
    const q65 = req.body.q65.toString();
    const q66 = req.body.q66.toString();
    const q67 = req.body.q67
    const q68 = req.body.q68.toString();
    const q69 = req.body.q69
    const q610 = req.body.q610.toString();

    const sqlCheck = "SELECT * FROM surveydata WHERE PID = ?;"
    db.query(sqlCheck, [PID], (err, result)=> {
        if(err){
            res.send({ message: "An error has occured" });
        }

        if(result.length > 0){
            const sqlUpdate = "UPDATE surveydata SET q11=?, q12=?, q13=?, q14=?, q15=?, q16=?, q17=?, q18=?, q19=?, q110=?, q111=?, q112a=?, q112b=?, q112c=?, q113a=?, q113b=?, q113c=?, q114a=?, q114b=?, q114c=?, q115a=?, q115b=?, q115c=?, q115d=?, q116=?, q117=?, q118=?, q119=?, q120=?, q21a=?, q22=?, q23=?, q24=?, q31_1=?, q31_2=?, q31_3=?, q31_4=?, q31_5=?, q31_6=?, q31_7=?, q31_8=?, q31_9=?, q31_10=?, q31_11=?, q31_12=?, q31_13=?, q31_14=?, q31_15=?, q31_16=?, q31_17=?, q31_18=?, q31_19=?, q31_20=?, q31_21=?, q31_22=?, q32=?, q33=?, q41a=?, q41b=?, q41c=?, q41d=?, q42a=?, q42b=?, q42c=?, q42d=?, q43=?, q44a=?, q44b=?, q44c=?, q44d=?, q45a=?, q45b=?, q45c=?, q45d=?, q46=?, q47=?, q48=?, q49=?, q410=?, q411_1=?, q411_2=?, q411_3=?, q411_4=?, q411_5=?, q411_6=?, q411_7=?, q411_8=?, q411_9=?, q411_10=?, q51=?, q521=?, q522=?, q523=?, q524=?, q525=?, q526=?, q527=?, q528=?, q529=?, q5210=?, q53=?, q54=?, q55=?, q56=?, q57=?, q58=?, q59=?, q510a=?, q510b=?, q510c=?, q61=?, q62=?, q63=?, q64=?, q65=?, q66=?, q67=?, q68=?, q69=?, q610=? WHERE PID=? ;"
            db.query(sqlUpdate, [q11, q12, q13, q14, q15, q16, q17, q18, q19, q110, q111, q112a, q112b, q112c, q113a, q113b, q113c, q114a, q114b, q114c, q115a, q115b, q115c, q115d, q116, q117, q118, q119, q120, q21a, q22, q23, q24, q31_1, q31_2, q31_3, q31_4, q31_5, q31_6, q31_7, q31_8, q31_9, q31_10, q31_11, q31_12, q31_13, q31_14, q31_15, q31_16, q31_17, q31_18, q31_19, q31_20, q31_21, q31_22, q32, q33, q41a, q41b, q41c, q41d, q42a, q42b, q42c, q42d, q43, q44a, q44b, q44c, q44d, q45a, q45b, q45c, q45d, q46, q47, q48, q49, q410, q411_1, q411_2, q411_3, q411_4, q411_5, q411_6, q411_7, q411_8, q411_9, q411_10, q51, q521, q522, q523, q524, q525, q526, q527, q528, q529, q5210, q53, q54, q55, q56, q57, q58, q59, q510a, q510b, q510c, q61, q62, q63, q64, q65, q66, q67, q68, q69, q610, PID], (err, result)=> {console.log(err)});

        } else {
            const sqlInsert = "INSERT INTO surveydata (PID, q11, q12, q13, q14, q15, q16, q17, q18, q19, q110, q111, q112a, q112b, q112c, q113a, q113b, q113c, q114a, q114b, q114c, q115a, q115b, q115c, q115d, q116, q117, q118, q119, q120, q21a, q22, q23, q24, q31_1, q31_2, q31_3, q31_4, q31_5, q31_6, q31_7, q31_8, q31_9, q31_10, q31_11, q31_12, q31_13, q31_14, q31_15, q31_16, q31_17, q31_18, q31_19, q31_20, q31_21, q31_22, q32, q33, q41a, q41b, q41c, q41d, q42a, q42b, q42c, q42d, q43, q44a, q44b, q44c, q44d, q45a, q45b, q45c, q45d, q46, q47, q48, q49, q410, q411_1, q411_2, q411_3, q411_4, q411_5, q411_6, q411_7, q411_8, q411_9, q411_10, q51, q521, q522, q523, q524, q525, q526, q527, q528, q529, q5210, q53, q54, q55, q56, q57, q58, q59, q510a, q510b, q510c, q61, q62, q63, q64, q65, q66, q67, q68, q69, q610) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
            db.query(sqlInsert, [PID, q11, q12, q13, q14, q15, q16, q17, q18, q19, q110, q111, q112a, q112b, q112c, q113a, q113b, q113c, q114a, q114b, q114c, q115a, q115b, q115c, q115d, q116, q117, q118, q119, q120, q21a, q22, q23, q24, q31_1, q31_2, q31_3, q31_4, q31_5, q31_6, q31_7, q31_8, q31_9, q31_10, q31_11, q31_12, q31_13, q31_14, q31_15, q31_16, q31_17, q31_18, q31_19, q31_20, q31_21, q31_22, q32, q33, q41a, q41b, q41c, q41d, q42a, q42b, q42c, q42d, q43, q44a, q44b, q44c, q44d, q45a, q45b, q45c, q45d, q46, q47, q48, q49, q410, q411_1, q411_2, q411_3, q411_4, q411_5, q411_6, q411_7, q411_8, q411_9, q411_10, q51, q521, q522, q523, q524, q525, q526, q527, q528, q529, q5210, q53, q54, q55, q56, q57, q58, q59, q510a, q510b, q510c, q61, q62, q63, q64, q65, q66, q67, q68, q69, q610], (err, result)=> {console.log(err)});


        }

    });

    const sqlInsert2 = "UPDATE registrations SET complete = 'TRUE' WHERE PID = (?);"
    db.query(sqlInsert2, [PID], (err, result)=> {console.log(err)});
})

app.post('/signup', (req, res)=>{

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

app.post('/login', (req, res)=>{

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

app.post('/getdata', (req, res)=> {
    const PID = req.body.PID

    const sqlgetData = "SELECT * FROM surveydata WHERE PID = ?;"
    db.query(sqlgetData, [PID], (err, result)=> {
        res.send(result);    
    });
})

app.listen(3030, () => {
    console.log("This is running on port 3030");
});


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3030;
const server = app.listen(port, function () {
            console.log('Server is listening on port' + port);
});


db.connect((err)=> {
    if(!err){
        console.log('DB connected');
    } else{
        console.log('DB error'+JSON.stringify(err, undefined, 2));
    }
});

// const Emails = (result) => {
//     var obj = JSON.parse(result);
//     var array = [];
              
//     for(var i in obj)
//         array.push(obj[i]);

// }