let image_div = document.querySelector("#img_div")
let image_arr = [
                    {url:"https://deasilex.com/wp-content/uploads/2021/02/Top-Mind-Bending-Movies-intersteller-1024x1024.jpg",},
                    {url:"https://deasilex.com/wp-content/uploads/2021/02/Top-Mind-Bending-Movies-Predestination-1068x618.jpg",},
                    {url:"https://www.bing.com/th?id=OIP.GV4ecYis-g78YCJKEbUsqgHaNL&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",},
                    {url:"https://deasilex.com/wp-content/uploads/2021/02/Top-Mind-Bending-Movies-The-invisible-guest-1068x561.jpg",},
                    {url:"https://m.media-amazon.com/images/M/MV5BNmQxNjBhOWItZWNmNy00NGE1LWFjMjQtNDI1MGM5MjYyYjg5XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_UX100_CR0,0,100,100_AL_.jpg",},
                    {url:"https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX100_CR0,0,100,100_AL_.jpg",},
                    {url:"https://m.media-amazon.com/images/M/MV5BOGQ3ZjMwZDctZTFkMi00ZjUwLTlmMDUtNDZlYzJjNzZiNTg5XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_UX100_CR0,0,100,100_AL_.jpg",},
                    {url:"https://m.media-amazon.com/images/M/MV5BNzgwNTVjYWQtNTY3YS00NzIzLTg1ZDAtYTA5MDNkNWZhZjA5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY100_CR45,0,100,100_AL_.jpg",},
                    {url:"https://m.media-amazon.com/images/M/MV5BZWEwNDhiNDctYjk3ZS00OTAzLTg5MWMtZTZlZmMzNTZjMDZiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX100_CR0,0,100,100_AL_.jpg",},
]
let id;
function start(){
    let img = document.createElement("img")
    img.id = "img"
    let i=0;
    
    id = setInterval(function(){
        if(i == image_arr.length){
            i=0
        }
        console.log(image_arr[i].url);
        img.src = image_arr[i].url
        image_div.append(img)
        i++
    },2000)
}
function stop(){
    clearInterval(id)
}

// Movies

var movies_arr = [
                    {
                        name:"Interstellar",
                        DOR : "26/10/2014",
                        poster : "https://deasilex.com/wp-content/uploads/2021/02/Top-Mind-Bending-Movies-intersteller-1024x1024.jpg",
                        rating : "8.6",
                        genre : "Science-fiction",
                    },
                    {
                        name:"Predestination",
                        DOR : "08/03/2012",
                        poster : "https://deasilex.com/wp-content/uploads/2021/02/Top-Mind-Bending-Movies-Predestination-1068x618.jpg",
                        rating : "7.5",
                        genre : "Science-fiction",
                    },
                    {
                        name:"Edge of Tomorrow",
                        DOR : "28/05/2014",
                        poster : "https://www.bing.com/th?id=OIP.GV4ecYis-g78YCJKEbUsqgHaNL&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                        rating : "7.9",
                        genre : "Science-fiction",
                    },
                    {
                        name:"The Invisible Guest",
                        DOR : "19/11/2016",
                        poster : "https://deasilex.com/wp-content/uploads/2021/02/Top-Mind-Bending-Movies-The-invisible-guest-1068x561.jpg",
                        rating : "8.1",
                        genre : "Thriller",
                    },
                    {
                        name:"Morbius",
                        DOR : "01/04/2022",
                        poster : "https://m.media-amazon.com/images/M/MV5BNmQxNjBhOWItZWNmNy00NGE1LWFjMjQtNDI1MGM5MjYyYjg5XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_UX100_CR0,0,100,100_AL_.jpg",
                        rating : "5.2",
                        genre : "Thriller",
                    },
                    {
                        name:"The Bat Man",
                        DOR : "04/03/2022",
                        poster : "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX100_CR0,0,100,100_AL_.jpg",
                        rating : "8.3",
                        genre : "Action",
                    },
                    {
                        name:"RRR",
                        DOR : "27/03/2022",
                        poster : "https://m.media-amazon.com/images/M/MV5BOGQ3ZjMwZDctZTFkMi00ZjUwLTlmMDUtNDZlYzJjNzZiNTg5XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_UX100_CR0,0,100,100_AL_.jpg",
                        rating : "9.0",
                        genre : "Drama",
                    },
                    {
                        name:"SpiderMan No Way Home",
                        DOR : "16/12/2021",
                        poster : "https://m.media-amazon.com/images/M/MV5BNzgwNTVjYWQtNTY3YS00NzIzLTg1ZDAtYTA5MDNkNWZhZjA5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY100_CR45,0,100,100_AL_.jpg",
                        rating : "8.5",
                        genre : "Action & Adventure",
                    },
                    {
                        name:"Sonic the Hedgehog",
                        DOR : "05/04/2020",
                        poster : "https://m.media-amazon.com/images/M/MV5BZWEwNDhiNDctYjk3ZS00OTAzLTg5MWMtZTZlZmMzNTZjMDZiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX100_CR0,0,100,100_AL_.jpg",
                        rating : "6.2",
                        genre : "Adventure",
                    },
]

localStorage.setItem("movies",JSON.stringify(movies_arr))

let movies_data = JSON.parse(localStorage.getItem("movies"))
window.addEventListener("load",function(){
    displayMovies(movies_data)
})
function displayMovies(movies_data){
    document.querySelector("#movies").innerText = ""
    movies_data.map(function(el){
        
        let box = document.createElement("div")
        box.id = "box"
        let img= document.createElement("img")
        img.src = el.poster
        img.style.width = "100%"
        img.style.height = "300px"
        img.style.borderRadius = "10px"
        let name = document.createElement("h3")
        name.innerText = `Name : ${el.name}`
        let rd = document.createElement("p")
        rd.innerText = `Release Date : ${el.DOR}`
        let rate = document.createElement("p")
        rate.innerText = `Rating : ${el.rating}`;
        let genre = document.createElement("p")
        genre.innerText = `Genre : ${el.genre}`
        box.append(img,name,rd,rate,genre)
        document.querySelector("#movies").append(box)
    })
}


// sorting

function lowToHigh() {
    event.preventDefault()
    let lh = movies_data.sort(function(a,b){
        return (a.rating) - (b.rating)
    })
    displayMovies(lh)
}

function highToLow() {
    event.preventDefault()
    let hl = movies_data.sort(function(a,b){
        return (b.rating) - (a.rating)
    })
    displayMovies(hl)
}