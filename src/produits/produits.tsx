import app from '../images/app.jpg'
import stor from '../images/stor.jpg'
import Progressbar from './progressbar';
import '../App'


export default function produits() {
    return(
        <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">

  
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
            <h1 className="test flex-shrink-3 inline-block px-5 py-0.5 text-purple-900 text-xl">
                ID: 95259105
                    </h1>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
               
                    <h1 className="  text-gray-400 text-sm">
                         17 Desc, 22   
                    </h1>
                    <p className="text-gray-400 text-sm">
                    77 Desc, 22 
                    </p>
                    
                </header>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-grey-darker font-bold text-gray-800 text-lg">
                           Berlin
                    </h1>
                    <p className="text-grey-darker font-bold text-gray-800 text-lg">
                      Dortmund
                    </p>
                    
                </header>
    
<Progressbar />
              
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  
                        <div className=" left-5 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-0">
  <div className="shrink-0">
  <div className=" grid gap-4 grid-cols-2">
                            <div className=" col-span-2 flex justify-between">
                                    <img className=" m-3 h-12 w-12" src={app} alt="ChitChat Logo" />
                                <div className="text-xl font-medium text-black">Iphne 11
                                    <p className="text-slate-500 text-sm">Capacite 128 Go!</p>
                                </div>
                                <div className="prix m-4 decoration-black"> $249.00 </div> 
                            </div>
                        </div>
                        </div>
</div>
                       
                </footer>
            </article>
           

        </div>

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
            <h1 className=" test flex-shrink-3 inline-block px-5 py-0.5 text-purple-900  text-xl">
                ID: 95259105
                    </h1>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
               
                    <h1 className="  text-gray-400 text-sm">
                         17 Desc, 22   
                    </h1>
                    <p className="text-gray-400 text-sm">
                    77 Desc, 22 
                    </p>
                    
                </header>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-grey-darker font-bold text-gray-800 text-lg">
                           Berlin
                    </h1>
                    <p className="text-grey-darker font-bold text-gray-800 text-lg">
                      Dortmund
                    </p>
                    
                </header>
             

                <Progressbar />
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  
                  <div className=" left-5 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-0">
<div className="shrink-0">
<div className=" grid gap-4 grid-cols-2">
                      <div className=" col-span-2 flex justify-between">
                              <img className=" m-3 h-12 w-12" src={stor} alt="ChitChat Logo" />
                          <div className="text-xl font-medium text-black">Samsung S20
                              <p className="text-slate-500 text-sm">Capacite 64 Go!</p>
                          </div>
                          <div className="prix m-4 decoration-black"> $730.00 </div> 
                      </div>
                  </div>
                  </div>
</div>
                 
          </footer>

    </article>
           
       
      
       
    </div>
</div></div>
    )
}