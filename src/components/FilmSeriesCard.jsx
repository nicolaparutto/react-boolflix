function FilmSeriesCard(props) {
   const filmSeriesElement = props.filmContent

   return (
      <>
         {filmSeriesElement.map(element => (
            <div className="film-series-card">
               <div className="card-content">
                  <h1>{element.title}</h1>
                  <h2>{element.original_title}</h2>
                  <p>Language: {element.original_language}</p>
                  <p>Voto Medio: {element.vote_average}</p>
               </div>
            </div>
         ))}
      </>

   )
}

export default FilmSeriesCard