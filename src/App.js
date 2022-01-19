import './App.css';
import MovieCard from './components/MovieCard'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom'
import Description from './components/Description';


function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      Title: "harry potter and the deathly hallows part 2 ",
      Description: 'A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of evil.',
      rating: "9",
      trailer: 'https://www.youtube.com/watch?v=17ywQS6XO-M&t=7s'
    },

    {
      id: uuidv4(),
      Title: "charlie st.cloud",
      Description: "Charlie St. Cloud (Zac Efron) is a small-town sailing hero of whom great things are expected. But he loses all ambition after a car accident that he “miraculously” survives but kills his kid brother, Sam (Charlie Tahan). Afterward, to quote from another film, Charlie sees dead people.",
      rating: "9",
      trailer: 'https://www.youtube.com/watch?v=Xxltat2zIG4&t=34s'
      
    },

    {
      id: uuidv4(),
      Title: "the hangover",
      Description: "The Hangover tells the story of Phil Wenneck, Stu Price, and Alan Garner, who travel to Las Vegas for a bachelor party to celebrate the impending marriage of their friend, Doug Billings. However, Phil, Stu, and Alan have no memory of the previous night's events and must find Doug before the wedding can take place.",
      rating: "7",
      trailer: 'https://www.youtube.com/watch?v=tlize92ffnY'
    },
    {
      id: uuidv4(),
      Title: "the basketball diaries",
      Description: "The Basketball Diaries is set in the slums of Manhattan where a high school basketball player, Jim Carroll (DiCaprio), and his friends ultimately take a sharp nosedive into the tragic world of drug addiction. It is a stomach-wrenching glimpse into the lives of those addicted to heroin and other drugs.",
      rating: "9",
      trailer: 'https://www.youtube.com/watch?v=-Zc7T0vUpj0'
    },
  ]);
  const [movie, setMovie] = useState({
    Title: "",
    Descreption: "",
    Rating: "",
    trailer: ""
  });
  const [searchTerm, setsearchTerm] = useState('')
  const [rate, setRate] = useState(0)

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setMovies([...movies, { id: uuidv4(), ...movie }])
    setMovie('')
  };

  const handlonchange = (e) => {
    setsearchTerm(e.target.value);
  }
  return (
    <div className="App">
      <h1 className='aa'>ONLYMOVIES</h1>
      <input className='search' type='text' placeholder="search..." onChange={handlonchange} />

      {/*<MovieCard  movies={movies.filter(el=>el.Title.toLowerCase().includes(searchTerm.toLowerCase())&& el.rating >= rate)}/> */}


      <Routes>
        <Route exact path='/Description/:description' element={<Description movies={movies} />}>
        </Route>
        <Route path='/' element={<MovieCard handleChange={handleChange} handleSubmit={handleSubmit} movies={movies} />}></Route>
      </Routes>

      <div className="addMovies">
        <input type="text" placeholder="Title" name="Title" onChange={handleChange}></input>
        <input type="text" placeholder="Description" name="Description" onChange={handleChange} ></input>
        <input type="text" placeholder="URL" name="PosterURL" onChange={handleChange}></input>
        <input type="text" placeholder="Image's URL" name="ImageMovies" onChange={handleChange}></input>
        <input type="text" placeholder="Rating" name="rating" onChange={handleChange}></input>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;