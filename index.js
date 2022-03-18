//importar o express
const express = require("express");
const { set } = require("express/lib/application");
//arquivos estáticos (img, audio...)
const path = require("path");
//instanciar o express 
const app = express();


const port = process.env.PORT || 3000;
let message = "";

//definir motor de vizualização, no caso utilizei o ejs
app.set("view engine", "ejs");
//trabalhar com os arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));
//encodar o formulário
app.use(express.urlencoded());


app.get("/", (req, res) => {
  const devList = ["Backend", "Frontend", "Fullstack"];
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];
  
  setTimeout(() => {
    message = "";

  },3000);
  
  res.render("index", { 
    titulo: "Blue", 
    devList: devList, 
    analyticsList: analyticsList,
    message});
});

app.post("/", function (req, res) {
  res.send("Hello World via post - teste");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
//RECEBER FORMULÁRIO, PRECISO USAR O MÉTODO POST NO FORM ACTION, 
app.post("/subscription", (req, res) => {
  const { nome, email } = req.body;
  message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
  res.redirect("/");
});

//MSG DE CONFIRMAÇÃO

