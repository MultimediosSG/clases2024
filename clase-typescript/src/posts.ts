import axios from "axios";
import { PokemonResponse } from "./pokemonInterface";


export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}




export const getPosts = async () =>{
   const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
   return data;
   
}

export const getPokemon = async () =>{
    const { data } = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/ditto');
   console.log( data);
   
    
 }

