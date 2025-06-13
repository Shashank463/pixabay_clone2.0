import React from 'react'
import pixabayContext from '../context/PixabayContext'
import { useContext } from 'react'
const Navbar = () => {
    const { fetchImagesByCAtegory, setTextInput } = useContext(pixabayContext)
    return (
        <>
            <div style={{ textAlign: "center", display: 'flex', justifyContent: 'space-around', padding: "8px", margin: '18px', marginTop: '10px', marginBottom: '10px' }}>
                <button onClick={() => fetchImagesByCAtegory("fashion")} type="button" className="btn btn-outline-primary">Fashion</button>
                <button onClick={() => fetchImagesByCAtegory("nature")} type="button" className="btn btn-outline-info">Nature</button>
                <button onClick={() => fetchImagesByCAtegory("science")} type="button" className="btn btn-outline-success">Science</button>
                <button onClick={() => fetchImagesByCAtegory("food")} type="button" className="btn btn-outline-danger">Food</button>
                <button onClick={() => fetchImagesByCAtegory("transportation")} type="button" className="btn btn-outline-warning">Transportation</button>
                <button onClick={() => fetchImagesByCAtegory("religion")} type="button" className="btn btn-outline-info">Religion</button>
                <button onClick={() => fetchImagesByCAtegory("animals")} type="button" className="btn btn-outline-danger">Animals</button>
                <button onClick={() => fetchImagesByCAtegory("sports")} type="button" className="btn btn-outline-warning">Sports</button>
            </div>

            <div style={{ textAlign: "center", display: 'flex', justifyContent: 'space-around', padding: "8px", margin: '18px', marginTop: '10px', marginBottom: '10px' }}>
                <input onChange={(e) => setTextInput(e.target.value)} type="text" placeholder="Search..." style={{ width: '60%', outline: 'none', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: 'transparent', color: 'white' }} />
            </div>

        </>
    )
}

export default Navbar
