import React from 'react'

function Main() {
    return (
        <main>
            <div className='specials-section'>
                <div className='specials-title'>
                    <h2>This weeks specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className='specials-items'>
                    <div className='card'>
                        <img src={require('../images/greek salad.jpg')} className='card-image'></img>
                        <div className='card-text'>
                            <div className='card-title'>
                                <h3>Greek salad</h3>
                                <h4>$12.99</h4>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            <div className='card-delivery'>
                                <a href='#'><h4>Order a delivery</h4></a>
                                <img src={require('../images/delivery.png')} className='card-image'></img>
                            </div>
                        </div>

                    </div>
                    <div className='card'>
                        <img src={require('../images/greek salad.jpg')} className='card-image'></img>
                        <div className='card-text'>
                            <div className='card-title'>
                                <h3>Bruchetta</h3>
                                <h4>$5.99</h4>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
                            <div className='card-delivery'>
                                <a href='#'><h4>Order a delivery</h4></a>
                                <img src={require('../images/delivery.png')}></img>
                            </div>                        </div>
                    </div>
                    <div className='card'>
                        <img src={require('../images/greek salad.jpg')} className='card-image'></img>
                        <div className='card-text'>
                            <div className='card-title'>
                                <h3>Lemon Dessert</h3>
                                <h4>$5.00</h4>
                            </div>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                            <div className='card-delivery'>
                                <a href='#'><h4>Order a delivery</h4></a>
                                <img src={require('../images/delivery.png')} className='card-image'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
