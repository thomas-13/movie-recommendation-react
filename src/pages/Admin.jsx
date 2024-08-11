import { MovieForm } from "../components/movieForm";
import { MovieList } from "../components/movieList";

export const Admin = ()=>{
    return(
        <div>
        <div className="adminGrid">
            <div>
                Add Movie
                <MovieForm/>
            </div>
            <div className="currentList">
                Current Movie List
                <MovieList/>
            </div>
        </div>
        </div>
    )
}