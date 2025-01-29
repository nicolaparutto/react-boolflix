import flags from "../assets/data/languagesFlags";
import StarsRating from "./starsRating";

function SeriesCard(props) {

   const element = props.seriesContent;
   const voteConv = Math.ceil(element.vote_average / 2);

   return (
      <>
         <div className="film-series-card">
            <div className="card-content">
               <h1>{element.name}</h1>
               <h2>{element.original_name}</h2>
               <p>Language: {element.original_language}</p>
               <p>Voto Medio: {voteConv}</p>
               <img src={flags[element.original_language]} alt="" />
               <img src={`https://image.tmdb.org/t/p/w200${element.poster_path}`} alt="" />
               <StarsRating vote={element.vote_average} />
            </div>
         </div>
      </>

   )
}

export default SeriesCard