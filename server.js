const express=require("express");
const app= express();
app.use(express.json());

let students=[];
const port=3000;
app.get('/',(req,res)=>{
	res.send("Welcome to my page")
})
app.get('/education',(req,res)=>{
	res.send("I am pursuing BTech 3rd year CSE at RGUKT");
});

app.get('/student',(req,res)=>{
	res.json({
		name:"susmitha",
		college:"rgukt",
		branch:"cse",
		year:"3rd year"
	});
});

app.get('/student/:id',(req,res)=>{
	const studentid=req.params.id;
	res.send(`Student id is ${studentid}`);
});

app.get('/product/:name',(req,res)=>{
	res.send(`Product name : ${req.params.name}`);
});

app.get('/college/:branch',(req,res)=>{
	res.send(`Welcome to ${req.params.branch} Department`);
});
/*
app.get('/students',(req,res)=>{
	res.send(`Hello ${req.query.name} , This is ${req.query.me} from ${req.query.city}`);

});
*/
app.post('/student',(req,res)=>{
	const student=req.body;
	res.json({
		message:"student recieved successfully",
		data: student
	});
});

app.post('/login',(req,res)=>{
	const user=req.body;
	res.json({
		message:"login successfully",
		username: user.username
	});
});

app.post('/employee',(req,res)=>{
	const{ name,dept,salary}=req.body;
	if(!name || !dept || !salary){
		res.status(400).json({
			message: "all fields are required"
		});
	}
	res.status(201).json({
		message: "employee details",
		employee:{
			name,dept,salary
		}
	});
});

app.post('/students',(req,res)=>{
	const {name,branch,year}=req.body;
	if(!name || !branch || !year){
		res.status(400).json({
			message: "all fields are required"
		});
	}
	students.push({
		name,branch,year
	});
	res.status(201).json({
		message: "student added successfully"
	});
});

app.get('/students',(req,res)=>{
	res.json(students);
});

app.listen(port,()=>{
	console.log(`your server is running at https://localhost:${port}`);
});
