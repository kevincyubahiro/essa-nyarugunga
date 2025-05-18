import mysql from 'mysql'
import cors from 'cors'
import express from 'express'
const app=express();
app.use(express.json());
app.use(cors());
// connected
const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'essa nyarugunga'
})
db.connect((error)=>{
  if(error){
    console.log('failed')
  }
  else{
    console.log('connected successfully')
  }
})
// insert 
app.post('/insert',(req,res)=>{
  const{username,password}=req.body;
  const sql="INSERT INTO user(username,password)VALUES(?,?)"
  db.query(sql,[username,password],(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
// select
app.get('/select',(req,res)=>{
  const sql="SELECT * FROM user"
  db.query(sql,(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
///////////////////////////////// delete
app.delete('/delete/:id',(req,res)=>{
  const{id}=req.params;
  const sql="DELETE FROM user WHERE id=?"
  db.query(sql,[id],(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
////////////////////// update
app.put('/update/:id',(req,res)=>{
    const{id}=req.params;
     const{username,password}=req.body;
     const sql="UPDATE user SET username=?, password=? WHERE id=?"
     db.query(sql,[username,password,id],(error,result)=>{
          if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
     })
})
///////// trainer /////////////////////
// insert 
app.post('/inserttrainees',(req,res)=>{
  const{firstname,lastname,gender,trade}=req.body;
  const sql="INSERT INTO trainees(firstname,lastname,gender,trade)VALUES(?,?,?,?)"
  db.query(sql,[firstname,lastname,gender,trade],(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
// select
app.get('/selecttrainees',(req,res)=>{
  const sql="SELECT * FROM trainees"
  db.query(sql,(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
///////////////////////////////// delete
app.delete('/deletetrainees/:trainee_Id',(req,res)=>{
  const{trainee_Id}=req.params;
  const sql="DELETE FROM trainees WHERE trainee_Id=?"
  db.query(sql,[trainee_Id],(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
////////////////////// update
app.put('/updatetrainees/:trainee_Id',(req,res)=>{
    const{trainee_Id}=req.params;
     const{firstname,lastname,gender,trade}=req.body;
     const sql="UPDATE trainees SET firstname=?, lastname=?,gender=?,trade=? WHERE trainee_Id=?"
     db.query(sql,[firstname,lastname,gender,trade,trainee_Id],(error,result)=>{
          if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
     })
})

////////////////////////////////////////////////////////////////////////// insert Trade_Id
// insert 
app.post('/insertmarks',(req,res)=>{
  const{trainee_Id,trade_id,modulename,formative_assessment,summative_assessment}=req.body;
  const sql="INSERT INTO marks(trainee_Id,trade_id,modulename,formative_assessment,summative_assessment)VALUES(?,?,?,?,?)"
  db.query(sql,[trainee_Id,trade_id,modulename,formative_assessment,summative_assessment],(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
// select
app.get('/selectmarks',(req,res)=>{
  const sql="SELECT * FROM marks"
  db.query(sql,(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
///////////////////////////////// delete
app.delete('/deletemarks/:markid',(req,res)=>{
  const{markid}=req.params;
  const sql="DELETE FROM marks WHERE markid=?"
  db.query(sql,[markid],(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
////////////////////// update
app.put('/updatemarks/:markid',(req,res)=>{
    const{markid}=req.params;
     const{trainee_Id,trade_id,modulename,formative_assessment,summative_assessment,}=req.body;
     const sql="UPDATE marks SET trainee_Id=?, trade_id=?,modulename=?,formative_assessment=?,summative_assessment=?WHERE markid=?"
     db.query(sql,[trainee_Id,trade_id,modulename,formative_assessment,summative_assessment,markid],(error,result)=>{
          if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
     })
})
///////////////////////////////////////  mark marks  
app.post('/inserttrade',(req,res)=>{
  const{Trade_Name}=req.body;
  const sql="INSERT INTO trade(Trade_Name)VALUES(?)"
  db.query(sql,[Trade_Name],(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
// select
app.get('/selecttrade',(req,res)=>{
  const sql="SELECT * FROM trade"
  db.query(sql,(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
///////////////////////////////// delete
app.delete('/deletetrade/:Trade_Id',(req,res)=>{
  const{Trade_Id}=req.params;
  const sql="DELETE FROM trade WHERE Trade_Id=?"
  db.query(sql,[Trade_Id],(error,result)=>{
    if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
  })
})
////////////////////// update
app.put('/updatetrade/:Trade_Id',(req,res)=>{
    const{Trade_Id}=req.params;
     const{Trade_Name,}=req.body;
     const sql="UPDATE trade SET Trade_Name=? WHERE Trade_Id=?"
     db.query(sql,[Trade_Name,Trade_Id],(error,result)=>{
          if(error) return res.status(500).json('failed')
      return res.status(200).json(result)
     })
})
app.listen(2000,()=>{
  console.log('http://localhost:2000')
})