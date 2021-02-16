const express = require('express');
const router = express.Router();

name = 'School Website';

router.get('/principal', (req,res) => {
    res.render('index.html', 
    {name, title: 'Bienvenido', message: 'Aquí puedes registrar a tus alumnos'}
    );
});

router.get('/view', (req,res) => {
    res.render('viewList.html', 
    {name, title: 'Bienvenido', message: 'Aquí puedes registrar a tus alumnos'}
    );
});

router.get('/about', (req,res) => {
    res.render('about.html', 
    {name, title: 'Bienvenido', message: 'Aquí puedes registrar a tus alumnos'}
    );
});

router.get('/contacts', (req,res) => {
    res.render('contact.html', 
    {name, title: 'Bienvenido', message: 'Aquí puedes registrar a tus alumnos'}
    );
});

module.exports = router;