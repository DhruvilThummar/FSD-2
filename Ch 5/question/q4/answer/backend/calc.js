const express = require("express");
const app = express();
const path=require("path");


const sp=path.join(__dirname,"../frontend");
app.use(express.static(sp,{index:'calc.html'}));

app.get("/calc",(req,res)=>{
    res.set("content-type","text/html");
    n1=parseInt(req.query.n1)
    n2=parseInt(req.query.n2)
    f=req.query.formula
    if((n1=="") && (n2==""))
    {    
        res.write("<h1 style='color:red'>plase enter valid numbers</h1>")
    }
    else{
        if(f=="Add"){
            res.set("content-type","text/plain");
            ans=n1+n2
            res.write("Ans: "+ans);
        }
        else if(f=="sub"){
            ans=n1-n2
            res.write("Ans: "+ans);
        }
        else if(f=="mul"){
            ans=n1*n2
            res.write("Ans: "+ans);
        }
        else if(f=="div"){
            if(n2!=0)
            {
                ans=n1/n2
                res.write("Ans: "+ans);
            }
            else{
                res.write("<h1 style='color:red'>plase enter valid numbers</h1>")
            }
        }
        else{
            res.write("<h1 style='color:red'>you have not selected any fromula</h1>")
        }
    }
    res.send();
});

app.listen(6002)