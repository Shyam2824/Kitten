import React from 'react';
import Photo from "../image.png"

function Home(){
    return(
        <>
        <div className='add-to-cart'>
                <img src="" alt=" Cart Image"/>
            </div>
            <h1>Home component</h1>
            
        
        <div className='cart-wrapper'>
            <div className='img-wrapper items'>
                <img src={Photo} alt="Rendom"/>
            </div>
            <div className='text-wrapper items'>
                <span>
                    I phone 
                </span>
                <span>
                    Price: $1000 
                </span>
            </div>
            <div className='btn-wrapper items'>
                <button>Add to cart</button>
            </div>
        </div>
        </>
    );
}

export default Home;