import React from "react" ;
import produit from '../produits';


const Image = () =>  {

 return (
    <div>
        <img src={produit.imageUrl} alt={produit.name} style={{ width: "100%" }} />

    </div>
 )

} 

export default Image ;