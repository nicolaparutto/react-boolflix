import FilmSeriesList from "../components/FilmSeriesList"
import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext";

function HomePage() {

   const { fetchData } = useGlobalContext()

   const [searchedItem, setSearchedItem] = useState(" ");

   function handleChange(e) {
      setSearchedItem(e.target.value)
   }

   function handleFormSend(e) {
      e.preventDefault()
   }

   return (
      <>
         <header>
            <div className="navbar">
               logo --- navbar
            </div>
            <div className="searchbar">
               <form action="" onSubmit={handleFormSend}>

                  <input name="searchbar" id="searchbar" type="text" value={searchedItem} onChange={handleChange} />
                  <button onClick={() => fetchData(searchedItem)}>Cerca</button>
               </form>
            </div>
         </header>

         <hr />

         <main>
            <FilmSeriesList />
         </main>

         <hr />

         <footer>
            Footer Della Pagina
         </footer>
      </>
   )

}

export default HomePage