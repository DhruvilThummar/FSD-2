const express = require("express");
const app = express();

const multer=require("multer");

app.use(express.static(__dirname));

var store=multer.diskStorage({
    destination:"lju",
    filename:function(req,file,cd){
        cd(null,file.fieldname+"_"+Date.now()+".docx");  // for set file name
    } 
});

var upload= multer({storage:store
    //, limits:{fileSize:10*1024*1024}  // for set file size limite
});

// app.post("/upload",upload.single("mypic"),(req,res)=>{
//     const file =req.file;
//     if(file){
//         res.send("File "+file.originalname+" has been uploades"+file.destination);
//     }
// }).listen(1337);

app.post("/upload",upload.array("mypic",5),(req,res)=>{
    const files =req.files;
    if(files){
        for (i of files){
        res.write("File "+i.originalname+" has been uploades "+i.destination+"\n");
        }
    }
    res.send();
}).listen(1637);