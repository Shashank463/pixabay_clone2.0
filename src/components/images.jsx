import React, { useContext } from 'react'
import pixabayContext from '../context/PixabayContext'

const Images = () => {
    const data = useContext(pixabayContext);
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: ''}}>
            {data.Images.map((Image) => (<div key={Image.id} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', height: 'auto', width: '30%', gap: '5px', borderRadius: '25px'}}>
                <div className="item" >
                    <img src={Image.largeImageURL} alt="." style={{marginTop: '10px', borderRadius: "25px", border: '2px solid yellow', height: '75%', width: '100%'}}/>
                </div>
            </div>))}
        </div>
    )
}

export default Images


