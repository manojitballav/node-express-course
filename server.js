const express = require('express');
const app = express();

// Adding mock user data
const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.listen(8000,function(){console.log('Server is Alert')})

// app.get('/', function(req, res) {
//         console.log("server is being whipped")
//       });