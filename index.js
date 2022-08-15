//index.js
let PORT=3000;

// 절대 경로를 얻기 위한 라이브러리
let path = require("path");
// 웹 서비스를 쉽게 하기 위한 라이브러리
let express = require("express");
let app = express();

app.listen(PORT, function(){
    console.log("접속 URL: http://localhost:" + PORT);
});

// / 로 접속했을 때 보여줄 HTML파일
app.get("/", function(req, res){
    res.sendFile(path.resolve("index.html"));
});