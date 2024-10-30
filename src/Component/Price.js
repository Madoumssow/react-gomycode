import React from "react" ;
import produit from '../produits';



const Price = () =>  {

 return (
    <div>
        <p>{produit ? `${produit.price} €` : "Prix non disponible"}</p>
        
    </div>
 )

} 

export default Price ;