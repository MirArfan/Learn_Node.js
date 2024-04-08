const http = require('http');
const fs = require('fs');
const port = process.env.PORT;


const handleReadFile=(fileName, statusCode, req, res)=>{
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        }
    })
}

const myServer = http.createServer((req, res) => {
    if (req.url === "/") {
      handleReadFile("home.html", 200, req, res); 
    }
    else if (req.url === "/about") {
        handleReadFile("about.html", 200, req, res); 
    }
    else if (req.url === "/contact") {
        handleReadFile("contact.html", 200, req, res); 
    }
    else {
        handleReadFile("error.html", 404, req, res); 
    }
})

myServer.listen(port, () => {
    console.log("server is runnig jj");
})