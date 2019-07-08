const express=require('express')
const app=express()


// app.use(data,(req,res,next)=>{

// })
app.use([closingOffice=(req,res,next)=>{
            var today=new Date(); 
            var todayshour=today.getHours(); 
            if (todayshour>17|| todayshour<8){
                res.send('<h1>Our office is closed please look at us between 8h and 17h<h1>')
            } else {next()}
         }
        ])
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})
app.get('/ourservices',(req,res)=>{
    res.sendFile(__dirname+'/public/ourservices.html')
})



app.listen(3000,(err)=>{
    if (err) console.log('server is not running')
    else console.log('server is running in port 3000')
})