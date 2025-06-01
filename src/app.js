const express = require('express');
const path=require('path'); //it is utility to construct full file system path based on relative code

// This line imports the Express framework.
// express is a function that we use to create an Express application.
const app = express();
// app is now an instance of the Express application.
// This app object is used to define routes, middleware, and server logic.
// creating a basic route 


// -----------------------------------------
// This line serves static files like HTML, CSS, JS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));
// ------------------------------------------------------



// Creating a basic route for the root URL '/'
app.get('/', (req, res) => {
    // res.send("Hello world");
    res.sendFile(path.join(__dirname,'pages/index.html'));
});
// This sets up a GET route at the root URL (/).
// When a client (e.g. browser) sends a GET request to http://localhost:3000/,
//  the server responds with "Hello world".
// req = request object (contains info like headers, query params).
// res = response object (used to send data back to the client).




const port = process.env.PORT || 3000;
// This sets the server to listen on the port defined in environment variable PORT if available.
// Otherwise, it defaults to port 3000.



app.listen(port, () => {
    console.log('Server running on https ://localhost:${port}');
});
// This starts the server.
// The callback inside listen() runs when the server starts successfully.
// It logs a message to the console confirming the server is running.
// Note: you used single quotes (') in the console.log message, so the 
// ${port} won't be interpolated (it will be printed as-is).
// You should use backticks (`) instead of quotes for template strings.




module.exports = app; //this is a vercel configurtaion line