import React from 'react';
import axios from 'axios';
import './style.css';

export function Upload(){
    let [fileList, setFileInfo] = React.useState([]);

    // React.useEffect(() => {
    //     axios.get('http://localhost:5000/image')
    //     .then(res => {
    //         console.log(res.data);
    //         setFileInfo(res.data.map(num => ({name: num.name, file: num.file})));
    //     })
    // }, []);

    const handleUpload = event => {
        setFileInfo([]);
        console.log(event.target.files.length)
        for (let i = 0; i < event.target.files.length; i++) {
            const data = new FormData();
            data.append("file", event.target.files[i]);
            data.append("name", event.target.files[i].name);

            axios.post(process.env.BACKEND_API+'/image/add', data)
            .then(res => {console.log(res.data)
                setFileInfo([...fileList, {name: res.data.Key, file: res.data.Location}])
            });

            // axios.get('http://localhost:5000/image')
            // .then(res => {
            //     console.log(res.data);
            //     setFileInfo(res.data.map(num => ({name: num.name, file: num.file})));
            // })

        }
    };

    // const handleSearch = event => {
    //     setSearchList([]);
    //     let str = event.target.value;
    //     for (let i = 0; i < fileList.length; i++) {
    //         //let test = fileList[i].name;
    //         if (fileList[i].name.includes(str)) {
    //             console.log(fileList[i].name);
    //             setSearchList([...searchList, fileList[i]]);
    //         }
    //     }
    // };

    return (
        <div className="upload">
            <input type="file" onChange={handleUpload} accept="image/*" multiple></input>
            {/* <input type="text" onChange={handleSearch}></input> */}
            {fileList.map((image, index) => (
                <div>
                <img src={image.file} width="300"></img>
                <p>{image.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Upload;