import React, { useState } from 'react';
import axios from 'axios';

export const FileUploader = () => {
    const [loading, setLoading] = useState(false);
    const [link, setLink] = useState(undefined);

    const handleFile = async (event) => {
        try{
            setLink(undefined);
            setLoading(true);
            const data = new FormData();
            data.append('file', event.target.files[0]);

            const res = await axios.put('http://localhost:3001/files/upload', data);
            setLink(res.data.link);
            setLoading(false);
        }catch(err){
            setLoading(false)
        }
    }

    return(
        <div>
            <input type='file' onChange={handleFile} />
            {loading &&(
                <div>
                    <p>Carregando....</p>
                </div>
            )}
            {link && (
                <div>
                    <p>Link: {link}</p>
                </div>
            )}
        </div>
    )
}