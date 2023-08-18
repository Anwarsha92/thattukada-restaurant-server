//import json server

const jsonserver=require('json-server')


//create a server

const server=jsonserver.create()

//set path for db.json file

const router=jsonserver.router('db.json')

//return a middleware used by json sever 

const middileware=jsonserver.defaults()

//set up port

const port=process.env.PORT || 4000

//use in server
server.use(middileware)
server.use(router)

//to run port

server.listen(port,()=>{
    console.log(`json server started at port ${port}`);
})