import React from 'react';
import axios from 'axios';
import './style.css';

export function Gallery(){
    let [fileList, setFileInfo] = React.useState([]);

    React.useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL + '/image')
        .then(res => {
            console.log(res.data);
            setFileInfo(res.data.map(num => ({name: num.name, file: num.file})));
        })
    }, []);

    return (
        <div>
            {fileList.map((image, index) => (
                <div className="outer">
                    <img className="image" src={image.file} width="300"></img>
                    <p className="text" >{image.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Gallery;