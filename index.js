// const Person=require('./person')

// const person1=new Person("brian nanjeri", 22)
// person1.greeting()

const http=require('http');
const path=require('path');
const fs=require('fs')

const server=http.createServer((req, res)=>{
   if(req.url=='/'){
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{ 
        if(err) throw err
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(content)

    })
   }
   if(req.url=='/api/users'){
    const users=[
        {name:'brian', age:20},
        {name:'samuel', age:21}
    ];
    res.writeHead(200, {'Content-Type':'application/json'})
    res.end(JSON.stringify(users));
   }

//build filepath
let filepath=path.join(__dirname, 'public',req.url=='/'?'index.html':req.url)
console.log(filepath);
res.end();
})
const PORT=process.env.PORT ||5000;
server.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))