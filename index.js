const express = require('express');
const app = express();
const port = 3004;
app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});



const verifTime = (req, res, next) => {
    let time = new Date();
    if (
      time.getDay() <= 5 &&
      time.getDay() >= 1 &&
      time.getHours() <= 21 &&
      time.getHours() >= 9
    ) {
        console.log("is open")
      next(); 
    } else 
    res.sendFile("C:/Users/ASUS-X550J/Desktop/express/myapp/closed.html"), { time: time.toUTCString() }
    
  };

  app.use(verifTime);


  
  app.get('/HomePage.html',(req, res) => {
    res.sendFile('C:/Users/ASUS-X550J/Desktop/express/myapp/HomePage.html')    });   
  app.get('/OurServices.html',(req, res) => {
    res.sendFile("C:/Users/ASUS-X550J/Desktop/express/myapp/OurServices.html")
      
    });   
  app.get('/ContactUs.html',(req, res) => {
    res.sendFile("C:/Users/ASUS-X550J/Desktop/express/myapp/ContactUs.html")
  });   

  