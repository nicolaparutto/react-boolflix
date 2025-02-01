import { useGlobalContext } from "../context/GlobalContext"
import FilmCard from "./FilmCard"
import SeriesCard from "./SeriesCard"

function FilmSeriesList() {

   const { filmData, seriesData } = useGlobalContext()

   return (
      <>
         <section className="film-series-section container">
            <h1>Film</h1>
            <div className="series-film-cards-container">
               {filmData.map(element => (
                  <FilmCard key={element.id} filmContent={element} />
               ))}
            </div>
         </section>

         <section className="film-series-section container">
            <h1>Serie TV</h1>
            <div className="series-film-cards-container">
               {seriesData.map(element => (
                  <SeriesCard key={element.id} seriesContent={element} />
               ))}
            </div>
         </section>
      </>
   )

}

export default FilmSeriesList