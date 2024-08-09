// const express=require("express");
// const app=express();

// const users=[{
// name:"John",
// kidneys:[{
//   healthy:false
// }]
// }]
// app.use(express.json())

// app.get('/',function(req,res){
//   const johnkidneys=users[0].kidneys
//   const noofkidneys=johnkidneys.length;
//   let healthykidneys=0;
//   for(let i=0;i<johnkidneys.length;i++){
//     if(johnkidneys[i].healthy){
//       healthykidneys +=1;
//     }
//   }
//   const unhealthykidneys=noofkidneys-healthykidneys;
//   res.send({
//     noofkidneys,
//     healthykidneys,
//     unhealthykidneys
//   })
// })
// app.post('/',function(req,res){
//   const ishealthy=req.body.ishealthy;
//   users[0].kidneys.push({
// healthy: ishealthy
//   })
//   res.json({
//     msg:"done"
//   })
// })
// app.listen(3000);

// const express=require("express");
// const app=express();
// const fs=require("fs");
// app.get("/files/:fileName" ,function(req,res){
//   const name=req.params.fileName;
//   fs.readFile(name, "utf-8" ,function(err,data){
//     res.json({
//       data
//     });
//   })
//   console.log(name);
 
// });
// app.listen(3000)

const express=require("express")
const fs=require("fs")
const path=require("path")

const app=express();


app.get('/files' , function(req,res){
  const directoryPath=path.join(__dirname ,'files');
  fs.readdir(directoryPath, (err,files)=>{
    if(err){
      return res.status(500).json({error:"failed to retrive the server" })
    }
    res.json(files)
  })
})

 app.get('/files/:fileName' ,function(req,res){
  const filePath=path.join(__dirname , './files/' ,req.params.fileName)
  fs.readFile(filePath, "utf-8" ,(err,data)=>{
    if(err){
      res.send(404).status("File not found")
    }
    res.send(data);
  });
 })


app.all('*',(req,res)=>{
res.status(404).send('Route not found');
});

app.listen(3000)