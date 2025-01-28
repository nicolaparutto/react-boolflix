import { useGlobalContext } from "../context/GlobalContext"
import FilmSeriesCard from "./FilmSeriesCard"

function FilmSeriesList() {

   const { filmData } = useGlobalContext()

   return (
      <section>
         <div className="film-container">
            <FilmSeriesCard filmContent={filmData} />
         </div>
      </section>
   )

}

export default FilmSeriesList