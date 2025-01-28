import axios from "axios";
import { useState, useContext, createContext } from "react";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

   const defaultApiUrl = "https://api.themoviedb.org/3/search/movie?api_key=b167445376101eff701e058cb616faa9"

   const [filmData, setFilmData] = useState([])

   const fetchData = (searchedItem) => {
      const searchedItemTranslated = searchedItem.split(" ").join("+");
      //console.log(`${defaultApiUrl}&query=${searchedItemTranslated}`);

      axios.get(`${defaultApiUrl}&query=${searchedItemTranslated}`)
         .then(res => {
            setFilmData(res.data.results)
         })
   }

   return (
      <GlobalContext.Provider value={{ fetchData, filmData }}>
         {children}
      </GlobalContext.Provider>
   )
}

const useGlobalContext = () => {
   return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }
