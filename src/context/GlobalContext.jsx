import axios from "axios";
import { useState, useContext, createContext } from "react";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

   return (
      <GlobalContext.Provider value={{}}>
         {children}
      </GlobalContext.Provider>
   )
}

const useGlobalContext = () => {
   return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }
