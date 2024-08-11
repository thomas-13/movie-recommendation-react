import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";

import { useContext, useState} from 'react';
import { AppContext } from '../App';

export const MovieForm = () => {
    const {movies, setMovies} = useContext(AppContext)
    const [flag, setFlag] = useState(true)
    const [synopsis, setSynopsis] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const [movieSearch, setMovieSearch] =  useState('');

    const handleInputType=(e)=>{
        if(e === "custom"){
            setFlag(false)
        }
        else{
            setFlag(true)
        }
    }
    
    const schema = yup.object().shape({
        title: yup.string().required("Movie name is required!"),
        rank: yup.number().min(1).max(5).required().typeError('Rank is required'),
    });

    const schema2 = yup.object().shape({
        title: yup.string().required("Movie name is required!"),
        synopsis: yup.string().required("Synopsis is required!"),
        year: yup.string().required().typeError('Release year is required'),
        rank: yup.number().min(1).max(5).required().typeError('Rank is required'),
    });

    const { 
        register, 
        handleSubmit,
        formState: {errors}, 
        reset
    } = useForm({ 
        resolver: yupResolver(schema),
    });

    const { 
        register: register2, 
        handleSubmit: handleSubmit2, 
        formState: { errors: errors2 },
        reset: reset2
    } = useForm({ 
        resolver: yupResolver(schema2),
    });

    const searchMovie= ()=>{
      const movieName = movieSearch;
      const url = "https://www.omdbapi.com/?t={}"+movieName+"&apikey=485aa16a"
      Axios.get(url).then((res)=>{
        setTitle(res.data.Title)
        setSynopsis(res.data.Plot)
        setYear(res.data.Year)
      })
  }

    const submitForm = (data) => {
        data.title = title
        data.year = year
        data.synopsis = synopsis
        movies.splice(data.rank - 1, 1, data)
        const newMovieList = JSON.parse(JSON.stringify(movies))
        setMovies(newMovieList)
        localDataStore();  
        reset();
        setSynopsis('')
        setYear('')
    };

    const submitNewMovieForm = (data) => {
        movies.splice(data.rank - 1, 1, data)
        const newMovieList = JSON.parse(JSON.stringify(movies))
        setMovies(newMovieList)
        localDataStore();
        reset2();
    };

    const localDataStore = () =>{
      const movieData = JSON.stringify(movies);
      localStorage.setItem('movieData', movieData);
    }

  return (
    <>
      <div>Insert:
        <select onChange={(e) => handleInputType(e.target.value)}>
            <option value="database">From Database</option>
            <option value="custom">Custom</option>
        </select>
      </div>

    {flag && 
        <div><h3>Enter Movie name</h3>
        <div className="movieForm">
        <form onSubmit={handleSubmit(submitForm)}>
          <input placeholder="Movie Name" 
            {...register('title', { onChange: (e) => setMovieSearch(e.target.value) })} />
          <span>{errors.title?.message}</span>
          <button type="button" onClick={searchMovie}>Search</button>
          <textarea value={synopsis} cols="60" rows="5" readOnly placeholder="Synopsis" />
          <input type="text" value={year} readOnly placeholder="Release year"  />
          <input type="number" placeholder="Rank"  {...register("rank") }/>
          <span>{errors.rank?.message}</span>
          <button>Submit</button>
        </form>
      </div>
      <p>*Choose custom insert option if movie not found in database*</p>
      </div>
    }
        
    {!flag &&
      <div><h3>Enter new movie details</h3>
      <div className="movieForm">
        <form onSubmit={handleSubmit2(submitNewMovieForm)}>
          <input type="text" placeholder="Movie Name" {...register2("title")}/>
          <span>{errors2.title?.message}</span>
          {/* <input type="text" placeholder="Synopsis" {...register2("synopsis")} /> */}
          <textarea cols="60" rows="5" placeholder="Synopsis" {...register2("synopsis")}/>
          <span>{errors2.synopsis?.message}</span>
          <input type="number" placeholder="Release year" {...register2("year")} />
          <span>{errors2.year?.message}</span>
          <input type="number" placeholder="Rank" {...register2("rank")} />
          <span>{errors2.rank?.message}</span>
          <button>Submit</button>
        </form>
      </div>
      </div>
    }
    </>
  );
};
