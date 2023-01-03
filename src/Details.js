import Data from './Data.json'
import { Link } from "react-router-dom"

// nested routes
//import Offers from "./Offers"

export default function ProductDetails() {

  return (
    <div className="content">
     <div className='dataContainer'>
      
      {
        Data.map((val) => {
            return (
              
              <div className="data" key={val.id}>
              <Link href={val.name} underline="none" color="inherit">
                <h3>Native:{val.native}</h3>
                <p>continent:{val.continent}</p>
              </Link>
              </div>
             
            )
          })
      }
    
    </div>
    

  
    </div>
  )
}
