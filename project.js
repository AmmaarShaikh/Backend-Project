/*Ammaar Shaikh WebDev 7-8 Even 2/1/22 */

const express = require('express')


const app = express();


app.use(express.json());


const songs = [
    {id: 1, name: "Never Gonna Give You Up"},
    {id: 2, name: "All Star"},
    {id: 3, name: "Old Town Road"}
]

const genres = [
    {id: 1, name: "Country"},
    {id: 2, name: "Jazz"},
    {id: 3, name: "Rap"}
]


app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})


app.get('/api/songs', (req,res)=>{
    res.send(songs);
})

app.get('/api/genres', (req,res)=>{
    res.send(genres);
})

/* Get Requests*/

app.get('/api/genres/:id', (req,res)=>{
    const genre = genres.find(c=> c.id === parseInt(req.params.id));
    if(!genre){
        res.status(404).send("That id doesn't exits :(");
        return;
    }
        res.send(genre);
}
)

app.get('/api/songs/:id', (req,res)=>{
    const song = songs.find(c=> c.id === parseInt(req.params.id));
    if(!song){
        res.status(404).send("That id doesn't exits :(");
        return;
    }
        res.send(song);
}
)

/* Post Requests */

app.post('/api/songs', (req,res)=> {
    if(Object.values(req.body)[0].length >= 3){
        const song ={
            id: songs.length +1,
            name:req.body.name    
        }
        songs.push(song);
        res.send(song);
        return 200;
    }
    else{
        res.status(404).send("Name needs to be three letters at least");
        return;
    }
})


app.post('/api/genres', (req,res)=> {
    if(Object.values(req.body)[0].length >= 3){
        const genre ={
            id: genres.length +1,
            name:req.body.name    
        }
        genres.push(genre);
        res.send(genre);
        return 200;
    }
    else{
        res.status(404).send("Name needs to be three letters at least");
        return;
    }
})

/*Put Request */            

app.put('/api/genres/:id', (req,res)=>{
    const currGenre = genres.find(i=> i.id === parseInt(req.params.id));
    if(!currGenre){
        res.status(404).send("That id doesn't exits :(");
        return;
    }
    else if(Object.values(req.body)[0].length >= 3){
        const input ={
            id: req.params.id,
            name:req.body.name    
        }
        const number = genres.indexOf(currGenre)
        genres[number] = input;
        res.send(input);
        return 200;
    }
    else{
        res.status(404).send("Name needs to be three letters at least");
        return;
    }
});

app.put('/api/songs/:id', (req,res)=>{
    const currSong = songs.find(i=> i.id === parseInt(req.params.id));
    if(!currSong){
        res.status(404).send("That id doesn't exits :(");
        return;
    }
    else if(Object.values(req.body)[0].length >= 3){
        const input ={
            id: req.params.id,
            name:req.body.name    
        }
        const number = songs.indexOf(currSong)
        songs[number] = input;
        res.send(input);
        return 200;
    }
    else{
        res.status(404).send("Name needs to be three letters at least");
        return;
    }
});


app.delete('/api/genres/:id', (req,res)=>{
        const currGenre = genres.find(i=> i.id === parseInt(req.params.id));
        if(!currGenre){
            res.status(404).send("That id doesn't exits :(");
            return;
        }
        else{
            const number = genres.indexOf(currGenre)
            genres.splice(number);
            res.send(currGenre);
            return 200;
        }
});

app.delete('/api/songs/:id', (req,res)=>{
    const currSong = songs.find(i=> i.id === parseInt(req.params.id));
    if(!currSong){
        res.status(404).send("That id doesn't exits :(");
        return;
    }
    else{
        const number = songs.indexOf(currSong)
        songs.splice(number);
        res.send(currSong);
        return 200;
    }
});

/*1. The programs communicate with the postman using the request and respond system, where they would recieve a request whether it be get post or other, and use an additional innput to determine how to respond.
2. From this project I learned how API work, which invloves the back end to websites and I think this will help me in the future 
3. I think this project can be improved if we can utilize more request options and if we make a more user friendly interface that anyone can use, it will make the project better oeverall*/
