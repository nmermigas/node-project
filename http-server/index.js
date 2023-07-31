const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        name: "nik",
        id: 1,
      })
    );
  } else if (req.url === "/thoughts ") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html<body><ul><li>HELLO!</li></ul></body></html>");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
