import flags from "../assets/data/languagesFlags";

function FilmCard(props) {
   const element = props.filmContent;

   return (
      <>
         <div className="film-series-card">
            <div className="card-content">
               <h1>{element.title}</h1>
               <h2>{element.original_title}</h2>
               <p>Language: {element.original_language}</p>
               <p>Voto Medio: {element.vote_average}</p>
               <img src={flags[element.original_language]} alt="" />
               <img src={`https://image.tmdb.org/t/p/w200${element.poster_path}`} alt="" />
            </div>
         </div>
      </>

   )
}

export default FilmCard