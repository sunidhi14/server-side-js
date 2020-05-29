var http=require("http");
var url=require("url");

var tasklist=[
    {
    id:1,
    tasktitle:"Task1",
    taskdesc:"Task Description",
    taskdeadline:"today"
},
{
    id:2,
    tasktitle:"Task2",
    taskdesc:"Task Description2",
    taskdeadline:"Tomorrow"
},
{
    id:3,
    tasktitle:"Task3",
    taskdesc:"Task Description",
    taskdeadline:"today"
}

];

var server=http.createServer((req,res)=>{
    console.log(req.url);

    if(req.url=="/favicon.ico"){
        res.writeHead(404);
    }

    var queryStrings=url.parse(req.url,true).query;
    var deadline=queryStrings.taskdeadline;


    for( i=0;i<tasklist.length;i++){
        if(tasklist[i].taskdeadline==deadline){
            res.write(`
        <div>
        <div><h2>${tasklist[i].tasktitle}</h2<br></div>
        
        <div>${tasklist[i].taskdeadline}<hr></div>
        </div>`

            
        );
    }
}
        res.end();
});
server.listen(8005);

