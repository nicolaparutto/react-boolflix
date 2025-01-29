import flags from "../assets/data/languagesFlags";
import StarsRating from "./starsRating";

function FilmCard(props) {

   const element = props.filmContent;

   return (

      <>
         <div className="film-series-card">
            <div className="card-content">
               <div className="card-image">
                  <img src={`https://image.tmdb.org/t/p/w200${element.poster_path}`} alt="" />
               </div>

               <div className="card-overlay-container"></div>

               <div className="card-info">
                  <h2>{element.title}</h2>
                  <div className="language-info">
                     <span>Lingua:</span>
                     <div className="flag-container">
                        <img src={flags[element.original_language]} alt={element.original_language} />
                     </div>
                  </div>
                  <div className="rating-info">
                     <span>Valutazione media:</span>
                     <StarsRating vote={element.vote_average} />
                  </div>
                  <div className="overview-info">
                     <span>Trama:</span>
                     <div className="overview-text">{element.overview}</div>
                  </div>
               </div>
            </div>
         </div>
      </>

   )
}

export default FilmCard