import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState('')
    const [err, setErr] = useState(null)


    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => setErr(err))


    },[url])
    return { data, err }
};

export default useFetch;