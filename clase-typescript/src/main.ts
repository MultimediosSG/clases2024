import './style.css'
import { getPosts, getPokemon } from './posts.ts';

async function init(){
  getPokemon();
  const arrPosts = await getPosts();
  
  // arrPosts.forEach(post => {
  //   console.log(post);
    
  // });
}

init();

let number1:string = 'hola';

interface Role{
  id:number;
  name:string;
}
interface User {
  id: number;
  name: string;
  age: number;
  status?:string;
  roles: Role[]
}

const user: User = {
  id: 1,
  name: 'John Doe',
  age: 12,
  roles:[
    {
      id: 1,
      name:'Admin',
    }
  ]
}

user.id = 29;

user.roles[0].id
function hola(name: string) {
  return `Hola ${name}`;
}
console.log(hola('mundo'));


// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
