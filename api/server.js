const express = require('express');
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
app.use(bodyParser.json())
app.use(cors())
const bcrypt = require("bcrypt")
const {prismaClient, PrismaClient} = require(`@prisma/client`)
const prisma = new PrismaClient() 


const checkUser = async ({email,password}) => {
    const user = await prisma.user.findUnique({
        where : {
            email : email 
        }
    })  
    if ( user?.password && bcrypt.compareSync(password,user.password)) return user  
    return false 
}

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/login',async function(req,res) {
    const params = req.body
    if(!params.email || !params.password){
        res.send({
            statusCode : 400 ,
            msg : 'both email and password are required'
        })
    }

    if (await checkUser(params))
        res.send({
            statusCode : 200 ,
            msg : `welcome `
        })
    else 
    res.send({
        statusCode : 400 ,
        msg : 'user not found'
    }) 
})

app.post("/signup",async function(req,res){
    const params = req.body 
    if( !params.name || !params.email || !params.password ) {
        res.send({
            statusCode : 400 ,
            error : 'invalid parameters' 
        })
    }
    try {
       const user = await prisma.user.create({
            data : {
                ...params ,
                password : bcrypt.hashSync(params.password,10)
            }
        })
        res.send({
            statusCode : 200 ,
            data : {
                user 
            }
        }) 
    }catch(e) {
        console.log(e)
        res.send({
            statusCode : 400 ,
            error : e 
        })
    }
    
})

app.post('/detail',async function(req,res) {
    const params = req.body 
    const user = await checkUser(params) 
    if(!user) res.send({statusCode:400 , msg : 'not authenticated'})
    else res.send({statusCode:200,data : {user}})
})

app.post('/delete',async function(req,res) {
    const params = req.body 
    const user = await checkUser(params) 
    if(!user) res.send({statusCode:400 , msg : 'not authenticated'})
    else {
        await prisma.user.delete({
            where :{
                email : user.email 
            }
        })
        res.send({
            statusCode : 200 ,
            msg : `user deleted`
        }) 
    }
})

app.post('/update',async function(req,res) {

    const params = req.body 
    const user = await checkUser(params )
    if(!user) res.send({statusCode:400 , msg : 'not authenticated'})
    else {
        const updatedUser = await prisma.user.update({
            where :{
                email: user.email
            },
            data : {
                ...user , 
                ...params ,
                password : user.password 
            }
        })
        res.send({
            statusCode : 200 ,
            data : {user : updatedUser} ,
            msg : 'user updated' 
        })
    }

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})