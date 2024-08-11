import { useContext} from 'react';
import { AppContext } from '../App';

export const MovieList = ()=>{

    const { movies } = useContext(AppContext)
    
    return(
        <>
        <ul className="movieListPlain">
        {movies?.map((e)=>(
            <li key={e.rank}>#{e.rank} - {e.title}</li>
        ))}
        </ul>
        </>
    )
}