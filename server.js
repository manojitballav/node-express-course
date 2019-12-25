const express = require('express');
const app = express();

// Adding mock user data
const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

// get request to get all users data
app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})
// get request to match a specific user data
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

// making a post request
// including body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// function to handle POST request made to the 'login' endpoint, as if a user was trying to log in
app.post('/login',function(req,res){
	const username=req.body.username;
	const password=req.body.password;

	const mockUsername="billyTheKid";
	const mockPassword="superSecret";

	if (username===mockUsername && password===mockPassword){
		 res.json({
			  success: true,
			  message: 'password and username match!',
			  token: 'encrypted token goes here'
		 })
	} else {
		 res.json({
			  success: false,
			  message: 'password and username do not match'
		 })
	}
})


app.listen(8000,function(){console.log('Server is Alert')})

// app.get('/', function(req, res) {
//         console.log("server is being whipped")
//       });