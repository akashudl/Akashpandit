require("dotenv").config();
const express =require('express');
const cors=require('cors');
const db =require("./db")
const morgan = require('morgan')
const app=express()
// PORT VALUE IS COMIGN .env file and if their is no Port in env the it will take 3001 as port 
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//get al data from database
app.get("/api/v1/userdetails", async(req,res)=>{
  console.log(req.params.email);
  try{   
  const result= await db.query("select * from qb_userdetails");//you have to use ''when the data is send  email ='${re.params.email}'from the db.query 
  //and the which i have use can protect from sql injection 
  console.log(result.rows);

  res.status(200).json({
      status:"success",
      data:{
          user:result.rows,
      },
  });
}
catch(err)
{
  console.log(err);
}
 
});
app.get("/api/v1/commanddetails", async(req,res)=>{

  try{   
  const result= await db.query("select * from qb_rolecommanddetails");//you have to use ''when the data is send  email ='${re.params.email}'from the db.query 
  //and the which i have use can protect from sql injection 
  console.log(result.rows);

  res.status(200).json({
      status:"success",
      data:{
          user:result.rows,
      },
  });
}
catch(err)
{
  console.log(err);
}
 
});
//get one email id
app.get("/api/v1/user/:email", async(req,res)=>{
    console.log(req.params.email);
    try{   
    const result= await db.query("select acessrole from qb_userdetails where email =$1",[req.params.email]);//you have to use ''when the data is send  email ='${re.params.email}'from the db.query 
    //and the which i have use can protect from sql injection 
    console.log(result.rows);

    res.status(200).json({
        status:"success",
        data:{
            user:result.rows,
        },
    });
}
catch(err)
{
    console.log(err);
}
   
});
// Create Request
app.post("/api/v1/user", async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO qb_userdetails (email) values ($1) returning *",
        [req.body.email]
);
      console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          userdetails: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
  app.post("/api/v1/createuser", async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO qb_userdetails (email,acessrole) values ($1,$2) returning *",
        [req.body.email,req.body.acessrole]
);
      console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          userdetails: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
  app.post("/api/v1/usercommand", async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "insert into qb_rolecommanddetails(acessrole_code,botcommands,active) Values($1,$2,$3) returning *",
        [req.body.acessrole_code,req.body.botcommands,req.body.active]
);
      console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          userdetails: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
  //update Request
app.put("/api/v1/user/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE qb_userdetails  SET acessrole= $1  where uid = $2 returning *",
      [req.body.acessrole,req.params.id]
    );

    res.status(200).json({
      status: "succes",
      data: {
        retaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});
app.post("/api/v1/userchatdetails", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO qwikbotchat(email,acessrole,command_typed,response_got) values ($1,$2,$3,$4) returning *",
      [req.body.email,req.body.acessrole,req.body.command_typed,req.body.response_get]
);
    console.log(results);
    res.status(201).json({
      status: "succes",
      data: {
        userdetails: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});
app.get("/api/v1/userchatdetails", async(req,res)=>{
  console.log(req.params.email);
  try{   
  const result= await db.query("SELECT * FROM qwikbotchat ORDER BY chat_time DESC;");//you have to use ''when the data is send  email ='${re.params.email}'from the db.query 
  //and the which i have use can protect from sql injection 
  console.log(result.rows);

  res.status(200).json({
      status:"success",
      data:{
          user:result.rows,
      },
  });
}
catch(err)
{
  console.log(err);
}
 
});
app.get("/api/v1/user/:email/:botcommands", async(req,res)=>{
  console.log(req.params.email);
  console.log(req.params.botcommands);
  try{   
  const result= await db.query("select count(1) from qb_userdetails  qbud join  qb_rolecommanddetails as qbcrd on qbud.acessrole=qbcrd.acessrole_code  where qbud.email = $1 and qbcrd.botcommands=$2",[req.params.email,req.params.botcommands]);//you have to use ''when the data is send  email ='${re.params.email}'from the db.query 
  //and the which i have use can protect from sql injection 
  console.log(result.rows[0]);

  res.status(200).json({
      status:"success",
      data:{
          user:result.rows[0],
      },
  });
}
catch(err)
{
  console.log(err);
}
 
});


const port =process.env.PORT ||3001;
app.listen(port,()=>
{
    console.log(`Server is ready and listening to port ${port} `);
})
