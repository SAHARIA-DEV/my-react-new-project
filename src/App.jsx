
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());


function App() {


  return (
    <>
   <Suspense fallback={<h1>Loading...</h1>}>
    <Countries countriesPromise={countriesPromise} />
   </Suspense>  
       
    </>
  )
}

export default App
