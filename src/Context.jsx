/* eslint-disable react/prop-types */
import {useContext,createContext,useState,useEffect} from "react";
const Context = createContext();
import mockAPIUrl from "./Config";
export function useData(){
    return useContext(Context);
}
export function DataProvider({children,action}){
    const [data,setData] = useState([]);
    useEffect(()=>{
        let url = "";
        if(action=='teacher'){
            url = mockAPIUrl+'/teacher';
        }
        else {
            url = mockAPIUrl+'/student';
        }
        fetch(url)
      .then(res=>res.json())
      .then(data=>setData(data));
    },[]);
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}