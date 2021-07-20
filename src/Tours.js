import React, { useState } from 'react'

function Tours({ tour  , removeTour}) {

    const [readMore, setReadMore] = useState(false);
    return (
        <>
            {
                tour.map((tours) => {
                    const { id, image, info, price, name } = tours;
                    return (
                        <article key={id} className="single-article">
                            <img src={image} alt="" />
                            <footer>
                                <div className="tour-info">
                                    <h4>{name}</h4>
                                    <h4 className="tour-price">${price}</h4>
                                </div>
                                <p>
                                    {readMore ? info : `${info.substring(0, 200)}...`}
                                    <button className="btn" onClick={() => setReadMore(!readMore)}>
                                        {readMore ? 'show less' : '  read more'}
                                    </button>
                                </p>
                                <button className="remove-btn" onClick = {() => removeTour(id)}> Remove Button</button>
                            </footer>
                        </article>
                    )
                })
            }
        </>
    )
}

export default Tours
