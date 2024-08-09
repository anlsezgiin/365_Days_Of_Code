import express from "express";
import bodyParser from "body-parser";
import jokes from "./jokes.js";

const app = express();
const port = 3000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

app.use(bodyParser.urlencoded({ extended: true }));

//1. GET a random joke
app.get("/random",(req,res)=>{
  let r = Math.floor(Math.random()*jokes.length)
  res.json(jokes[r]);
})

//2. GET a specific joke
app.get("/jokes/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  let foundJoke = jokes.find((joke)=>joke.id===id)
  res.json(foundJoke);
})

//3. GET a jokes by filtering on the joke type
app.get("/filter/:type",(req,res)=>{
  const type = req.params.type;
  const foundJoke = jokes.filter((a)=>a.jokeType===type);
  console.log(typeof foundJoke)
  res.json(foundJoke);
})

//4. POST a new joke
app.post("/jokes",(req,res)=>{
  const newJoke = {
    id: jokes.length + 1,
    jokeText: req.query.text,
    jokeType: req.query.type,
  };
  console.log(newJoke)
  jokes.push(newJoke);
  res.json(newJoke);
})

//5. PUT a joke
app.put("/jokes/:id", (req,res)=>{
  const id = parseInt(req.params.id);
  const replacementJoke = {
    id: id,
    jokeText: req.query.text,
    jokeType: req.query.type,
  };

  const searchIndex = jokes.findIndex((joke) => joke.id === id);

  jokes[searchIndex] = replacementJoke;
  console.log(replacementJoke)
  res.json(replacementJoke);
})
//6. PATCH a joke
app.patch("/jokes/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const searchIndex = jokes.findIndex(a=>a.id === id);
  console.log(searchIndex.id)
  const newJoke = {
    id: id,
    jokeText: req.query.text || jokes[parseInt(searchIndex)].jokeText,
    jokeType: req.query.type || jokes[parseInt(searchIndex)].jokeType
  };
  if(newJoke.jokeText === jokes[searchIndex].jokeText && jokes[searchIndex].jokeType === newJoke.jokeType)
  {
    res.status(400).json({error: "PATCH request can not act like PUT request"});
  }
  else
  {
    jokes[searchIndex] = newJoke;
    res.json(newJoke);
  }
})

//7. DELETE Specific joke
app.delete("/jokes/:id",(req,res)=>{
  const id = req.params.id;
  const deleteJoke = jokes.findIndex(a=>a.id === id);
  jokes.splice(deleteJoke,deleteJoke+1);
  if(jokes[deleteJoke] || id>jokes.length)
  {
    res.status(404).json({error: "Öğe silinemedi"})
  }
  else
  {
    res.status(200).json({log: "Öğe başarıyla silindi!"})
  }
})

//8. DELETE All jokes
app.delete("/alljokes",(req,res)=>{
  const userKey = req.query.key;
  if (userKey === masterKey) {
    jokes = [];
    res.sendStatus(200);
  } else {
    res
      .status(404)
      .json({ error: `You are not authorised to perform this action.` });
  }
})

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});

