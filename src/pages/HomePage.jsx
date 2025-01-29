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
            <div className="header-content">
               <div className="navbar">
                  <div className="logo">
                     <a href="#"><img src="img/logo.png" alt="" /></a>
                  </div>
                  <div className="nav">
                     <nav>
                        <ul>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">TV series</a></li>
                           <li><a href="#">Movies</a></li>
                           <li><a href="#">My List</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div className="searchbar">
                  <form action="" onSubmit={handleFormSend}>
                     <input name="searchbar" placeholder="Cerca..." id="searchbar" type="text" value={searchedItem} onChange={handleChange} />
                     <button onClick={() => fetchData(searchedItem)}><i className="fa-solid fa-magnifying-glass"></i></button>
                  </form>
               </div>
            </div>
         </header>



         <main>
            <FilmSeriesList />
         </main>



         <footer>
            Footer Della Pagina
         </footer>
      </>
   )

}

export default HomePage