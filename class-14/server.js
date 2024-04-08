const http = require('http');
const fs = require('fs');
const port = 3002;

const myServer = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("home.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/about") {
        fs.readFile("about.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/contact") {
        fs.readFile("contact.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        })
    }
    else {
        fs.readFile("error.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        })
    }
})

myServer.listen(port, () => {
    console.log("server is runnig jj");
})