var http=require("http");
var server=http.createServer((req,res)=>{
    var tasklist=[
        {
        id:1,
        tasktitle:"Task1",
        taskdesc:"Task Description",
        taskdeadline:"Today"
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
        taskdeadline:"Today"
    }
    
    ];

    for( i=0;i<tasklist.length;i++){
        res.write(`
        <div>
        <div><h2>${tasklist[i].tasktitle}</h2<br></div>
        
        <div>${tasklist[i].taskdeadline}<hr></div>
        </div>`

            
        );
    }
        res.end();

    
});
server.listen(8001);

