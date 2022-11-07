import React from 'react';
import {  ArrowLeftIcon, BookmarkIcon, CheckIcon, EllipsisVerticalIcon} from '@heroicons/react/24/outline';
import './App.css';
import  logo  from './images/logo.png'
import novic from './images/novic.jpg'
import  maps  from './images/maps.png'
import map from './images/map.jpg'
import mapa from './images/mapa.jpg'
import francis from './images/francis.jpg'
import paul from './images/paul.jpg'
import dangote from './images/dangote.jpg'
function App() {

  return (

<section>

<nav className="m-3 px-4 bg-white border-gray-200 dark:border-gray-700">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
        < ArrowLeftIcon className={`h-6 w-6 text-primary transition-all `}/>
        
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Adresses</span>
    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <EllipsisVerticalIcon className={`h-6 w-6 text-primary transition-all dark:text-black `} />
    </button>
    </div>
    </nav>
    <form>   
    <label  className="mb-2 text-sm font-medium text-white sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm  bg-gray-50 rounded-lg   dark:placeholder-gray-900 dark:text-gray " placeholder="effectuez votre recherche....." required />
        {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><MagnifyingGlassIcon className={`h-5 w-5 text-primary transition-all `} /> </button> */}
    </div>
</form>


<div className=" p-4 m-2 max-w-sm rounded overflow-hidden shadow-lg">
 
<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

<li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
>

<div className="w-full flex items-center justify-between p-6 space-x-6">
<div className="flex-1 truncate">
  <div className="flex items-center space-x-0 ">
    <img className="w-8 h-8 rounded-full flex-shrink-4 border-solid border-2 border-green-400/100" src={novic} alt="" />
    {/* <PhoneIcon  className={`h-5 w-5 text-primary transition-all `} /> */}
    <div className=" m-0 icon w-3 h-3 rounded-full flex-shrink-4 border-solid border-2 border-green-400/100">
            <CheckIcon className={`h-2 w-2 transition-all border-green-400/100 `} />
            </div>
    <li className="group/item hover:bg-slate-100 ...">
    <h3 className="flex-shrink-0 inline-block px-1 py-0.5 text-gray-900 text-sm font-medium ">
    Novic-djef
    </h3><br />
    </li>
  
  </div>
  <span className=" text-gray-900 text-sm font-medium truncate  ">
    cotonou rue 89 Avenu 16
    </span>
  {/* <MapIcon className={`h-5 w-5 text-primary transition-all `}/> */}
  <p className="mt-1 text-gray-500 text-sm truncate">
 carreffour de la gare himmeuble maya
  </p>
  <p className="mt-1 text-gray-500 text-sm truncate">
  00237690089951
  </p>
</div>
  
<img
  className=" image w-10 h-10 bg-gray-300 rounded-full flex-shrink-4"
  src={logo}
  alt=""
/>
{/* <p className=" py-1 mt-1 text-sm ">Localisation</p> */}

</div>
<div>
<div className="-mt-px flex divide-x divide-gray-200">

  
</div>
</div>
</li>
</ul>


  <div className="P-1 rounded-lg ">
      <ul className="   grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 " >

        <li className=" border-solid border-2 border-sky-500/100 border-bg-sky-500/100 rounded-sm col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
      >

      <div className="  w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="  flex items-center space-x-0 ">
            <img className="w-8 h-8 rounded-full flex-shrink-4 border-solid border-2 border-sky-500/100" src={francis} alt="" />
            {/* <PhoneIcon  className={`h-5 w-5 text-primary transition-all `} /> */}
            <div className="icone w-3 h-3 rounded-full flex-shrink-4 border-solid border-2 border-sky-500/100">
            <CheckIcon className={`h-2 w-2 text-primary transition-all border-sky-500/100 `} />
            </div>

            <li className="group/item hover:bg-slate-100 ...">
            <h3 className="flex-shrink-0 inline-block px-1 py-0.5 text-sky-500/100 text-sm font-medium ">
            Francis Nganou
            </h3>
            </li>
            
          </div>
          <span className=" text-gray-900 text-sm font-medium truncate  ">
          cotonou rue 39 Avenu 6
            </span>
          {/* <MapIcon className={`h-5 w-5 text-primary transition-all `}/> */}
          <p className="mt-1 text-gray-500 text-sm truncate">
          face hotel de select
          </p>
          <p className="mt-1 text-gray-500 text-sm truncate">
          00237690089951
          </p>
        </div>
          
        <img
          className=" image w-10 h-10 bg-gray-300 rounded-full flex-shrink-4"
          src={map}
          alt=""
        />
        {/* <p className=" py-1 mt-1 text-sm ">Localisation</p> */}

      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
        
          
        </div>
      </div>
      </li>
      </ul>
     
  </div>

  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

<li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
>

<div className="w-full flex items-center justify-between p-6 space-x-6">
<div className="flex-1 truncate">
  <div className="flex items-center space-x-0">
    <img className="w-8 h-8 rounded-full flex-shrink-4 border-solid border-2 border-yellow-300/100" src={dangote} alt="" />
    {/* <PhoneIcon  className={`h-5 w-5 text-primary transition-all `} /> */}
    <div className="iconne w-3 h-3 rounded-full flex-shrink-4 border-solid border-2 border-yellow-300/100">
            <BookmarkIcon className={`h-2 w-2 text-primary transition-all border-yellow-300/100 `} />
            </div>
    <li className="group/item hover:bg-slate-100 ...">
    <h3 className="flex-shrink-0 inline-block px-1 py-0.5 text-gray-900 text-sm font-medium ">
    mom nom ici
    </h3><br />
    </li>
  
  </div>
  <span className=" text-gray-900 text-sm font-medium truncate  ">
    ma position
    </span>
  {/* <MapIcon className={`h-5 w-5 text-primary transition-all `}/> */}
  <p className="mt-1 text-gray-500 text-sm truncate">
  mon adresse
  </p>
  <p className="mt-1 text-gray-500 text-sm truncate">
  Numero de telephone
  </p>
</div>
  
<img
  className=" image w-10 h-10 bg-gray-300 rounded-full flex-shrink-4"
  src={mapa}
  alt=""
/>
{/* <p className=" py-1 mt-1 text-sm ">Localisation</p> */}

</div>
<div>
<div className="-mt-px flex divide-x divide-gray-200">

  
</div>
</div>
</li>
</ul>

  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

<li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
>

<div className="w-full flex items-center justify-between p-6 space-x-6">
<div className="flex-1 truncate">
  <div className="flex items-center space-x-0">
    <img className="w-8 h-8 rounded-full flex-shrink-4 border-solid border-2 border-green-500/100" src={paul} alt="" />
    {/* <PhoneIcon  className={`h-5 w-5 text-primary transition-all `} /> */}
    <div className="icon w-3 h-3 rounded-full flex-shrink-4 border-solid border-2 border-green-500/100">
            <CheckIcon className={`h-2 w-2 text-primary transition-all border-green-500/100 `} />
            </div>
    <li className="group/item hover:bg-slate-100 ...">
    <h3 className="flex-shrink-0 inline-block px-1 py-0.5 text-gray-900 text-sm font-medium ">
    Paul fokam
    </h3><br />
    </li>
  
  </div>
  <span className=" text-gray-900 text-sm font-medium truncate  ">
  cotonou rue 309 Avenu digo
    </span>
  {/* <MapIcon className={`h-5 w-5 text-primary transition-all `}/> */}
  <p className="mt-1 text-gray-500 text-sm truncate">
  centre ville afriland firstBack
  </p>
  <p className="mt-1 text-gray-500 text-sm truncate">
  00237653890236
  </p>
</div>
  
<img
  className=" image w-10 h-10 bg-gray-300 rounded-full flex-shrink-4"
  src={maps}
  alt=""
/>
{/* <p className=" py-1 mt-1 text-sm ">Localisation</p> */}

</div>
<div>
<div className="-mt-px flex divide-x divide-gray-200">

  
</div>
</div>
</li>
</ul>

</div>
</section> 


  );
}

export default App;


