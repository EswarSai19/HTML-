

    let getData = async (url) =>{
        let res = await fetch(url)
        let data = await res.json()
        return data
    }

    const append = (data,container)=>{
        data.forEach(({title}))
    }