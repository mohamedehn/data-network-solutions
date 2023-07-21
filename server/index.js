// ici on import express, path et cors
const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

//on définit ensuite sur quel port le serveur sera
const PORT = process.env.PORT || 3001;

//on crée ensuite le serveur et on utilise le cors pour éviter les erreurs de cors
const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

const corsOptions = {
    origin: "https://classy-kataifi-59b809.netlify.app/", // Remplacez par le domaine de votre site déployé
  };
  
app.use(cors(corsOptions));

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) =>{
    res.json({ message : "Hello from server!"})
})

//crée une instance de nodemailer
const contactEmail = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASS,
        },
});

// pour envoyer les données
app.post("/api/contact", bodyParser.urlencoded({extended : false}), (req, res) =>{
    const name = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from : name,
        to : process.env.EMAIL_ADDRESS,
        subject : "Formulaire de contact DNS France",
        html : `
        <p>Nom: ${lastName}<p>
        <p>Prénom: ${name}<p>
        <p>Email: ${email}<p>
        <p>Téléphone: ${phone}<p>
        <p>Message: ${message}<p> 
        `
    }
    contactEmail.sendMail(mail, (error) =>{
        if (error){
            res.json(error)
        } else{
            res.json({code : 200, status : "Message envoyé"})
        }
    })
})

//vérifie si la configuration est bonne avec une alerte
contactEmail.verify((error) =>{
    if (error){
        console.log(error)
    } else{
        console.log("Ready to send")
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });

//on ajoute un listenner pour être sur que l'app tourne bien
app.listen(PORT, () =>{
    console.log(`Server is online on port : ${PORT}`)
})