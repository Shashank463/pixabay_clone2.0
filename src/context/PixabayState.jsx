import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
    const [Images, setImages] = useState([]);
    const [textInput, setTextInput] = useState('london');
    const api_key = "50787127-1c99b9004c1ce4df10f9e5121"
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${textInput}&per_page=100&image_type=photo&pretty=true`);
            const data = await api.json();
            setImages(data.hits);
            console.log(data.hits)
        }
        fetchData();
    }, [textInput])

    const fetchImagesByCAtegory = async (query) => {
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${query}&per_page=100&image_type=photo&pretty=true`);
        const data = await api.json();
        setImages(data.hits);
        console.log(data.hits)
    }
    return (
        <PixabayContext.Provider value={{
            Images,
            fetchImagesByCAtegory,
            setTextInput
        }}>
            {props.children}
        </PixabayContext.Provider>
    );
}
export default PixabayState;

