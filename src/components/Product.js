import React from 'react'

export default function Product({match,data}) {
        let product= data.find(produit => produit.id === Number(match.params.productId));
        let productData;
      
        if(product)
          productData = <div>
                        <h3> {product.name} </h3>
                        <p>{product.description}</p>
                        <hr/>
                        <h4>{product.status}</h4>  </div>;
        return (
          <div style={{ display: 'flex' }}>
            <div style={{
               padding: '0 10% 0 10%',
               width: '80%',
               margin: 'auto',
               background: '#ffffff' }}> 
      
               {productData} 
            </div>
          </div>
        )    
      }
            
    

