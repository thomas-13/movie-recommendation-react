import { useContext, useState } from "react"
import { AppContext } from "../App";
import '../App.css'

import { Modal } from "../components/Modal";

export const Home = () =>{
    const { movies, setMovies } = useContext(AppContext);
    const [selectedMovie, setSelectedMovie] = useState({})
    const [open, setOpen] = useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };

    const handleListClick = (e) =>{
        setOpen(true);
        setSelectedMovie(e)
    }

    const setSortOrder = (e) =>{
        if( e === "custom"){
            const sortedData = movies.sort((a, b) => a.rank - b.rank);
            const newList = JSON.parse(JSON.stringify(sortedData));
            setMovies(newList)
        }
        else{
            const sortedData = movies.sort((a, b) => a.year - b.year);
            const newList = JSON.parse(JSON.stringify(sortedData));
            setMovies(newList)
        }
    }

    return(
        <>
        <div className="heading">
            <div className="title">
                <div className="titleMovie">Movie</div>
                <div className="titleMovie">Recommendations</div>
            </div>
        <div className="sort">
            <div style={{width:"110%"}}>Sort by:
            <select onChange={(e)=>setSortOrder(e.target.value)}>
                <option value="custom">Custom</option>
                <option value="date">Release Date</option>
            </select>
            </div>
        </div>
        </div>
        <div className="listMovies">
            <ul className="movieList">
            {movies.map((e, index)=>(
                <li key={e.rank} onClick={() => handleListClick(e)}>
                    <div className="rank">#{index+1}</div>
                    <div>{e.title}</div>
                </li>
            ))}
        </ul>
        </div>
        {open && <Modal onClose={handleClose} movie={selectedMovie}/> }
        </>
    )
}