const { Personaje } = require('./models/index');
const mongoose = require('./database');

// Array de perosnajes a incluir en mongo
let personajes = [ 
    {   name: 'Cersei', 
        url: 'https://en.wikipedia.org/wiki/Cersei_Lannister', 
        img: 'cersei.jpg', 
        key: 'cersei' },
    {   name: 'Jaime',
        url: 'https://en.wikipedia.org/wiki/Jaime_Lannister',
        img: 'jaime.jpg',
        key: 'jaime' },
    {   name: 'Tyrion',
        url: 'https://en.wikipedia.org/wiki/Tyrion_Lannister',
        img: 'tyrion.jpg',
        key: 'tyrion' },
    {   name: 'Jon',
        url: 'https://en.wikipedia.org/wiki/Jon_Snow_(character)',
        img: 'jonsnow.jpg',
        key: 'jon' },
    {   name: 'Arya',
        url: 'https://es.wikipedia.org/wiki/Arya_Stark',
        img: 'arya.jpg',
        key: 'arya' },
    {   name: 'Sansa',
        url: 'https://es.wikipedia.org/wiki/Sansa_Stark',
        img: 'sansa.jpg',
        key: 'sansa' },
    {   name: 'Bran',
        url: 'https://es.wikipedia.org/wiki/Bran_Stark',
        img: 'bran.jpeg',
        key: 'bran' },
    {   name: 'Gendry',
        url: 'https://en.wikipedia.org/wiki/Gendry',
        img: 'gendry.jpg',
        key: 'gendry' },
    {   name: 'Samwell',
        url: 'https://en.wikipedia.org/wiki/Samwell_Tarly',
        img: 'samwell.jpg',
        key: 'samwell' },
    {   name: 'Jorah',
        url: 'https://en.wikipedia.org/wiki/Jorah_Mormont',
        img: 'jorah.jpg',
        key: 'jorah' },
    {   name: 'El Perro',
        url: 'https://es.wikipedia.org/wiki/Sandor_Clegane',
        img: 'perro.jpeg',
        key: 'thedog' },
    {   name: 'La Montaña',
        url: 'https://es.wikipedia.org/wiki/Haf%C3%BE%C3%B3r_J%C3%BAl%C3%ADus_Bj%C3%B6rnsson',
        img: 'montana.jpg',
        key: 'themountain' },
    {   name: 'Brienne',
        url: 'https://es.wikipedia.org/wiki/Brienne_de_Tarth',
        img: 'brienne.jpg',
        key: 'brienne' } 
];

initDB();

async function initDB () {
    try {
        console.log('Insertando personajes en la base de datos...');
        let results = await Personaje.insertMany(personajes);
        console.log(results);
        console.log('Base de datos preparada.');
        console.log('Ejecuta index.js para iniciar la aplicación.');   
        return;
    } catch (error) {
        console.log(error);
    }
}



