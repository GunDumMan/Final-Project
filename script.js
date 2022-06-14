function addtable(movie) {
    const movieResults = document.getElementById('movie_result')
    let item = document.createElement('div')

    item.classList.add('bg-dark')
    item.classList.add('card')
    item.classList.add('col-xl-2')
    item.classList.add('col-lg-3')
    item.classList.add('col-12')
    item.classList.add('mt-4')

    let img = document.createElement('img')
    img.setAttribute('src', movie.images.jpg.large_image_url)
    img.classList.add('img')

    item.appendChild(img)

    let card = document.createElement('div')
    card.classList.add('d-flex')

    let bot = document.createElement('div')

    bot.classList.add('d-flex')
    bot.classList.add('flex-column')
    bot.classList.add('width-100')

    let body = document.createElement('div')
    body.classList.add('card-body')

    const para = document.createElement('p')

    para.classList.add('card-text')
    para.classList.add('text-center')
    para.classList.add('text-light')
    para.innerHTML = movie.title

    const poom = document.createElement('button')
    poom.setAttribute('type', 'button')

    poom.classList.add('btn')
    poom.classList.add('btn-outline-warning')
    poom.classList.add('mx-3')
    poom.innerHTML = 'Detail'

    const poom2 = document.createElement('button')
    poom2.setAttribute('type', 'button')

    poom2.classList.add('btn')
    poom2.classList.add('btn-outline-danger')
    poom2.classList.add('mx-3')
    poom2.classList.add('mt-2')
    poom2.setAttribute('id', 'favButton')

    poom2.addEventListener('click', function () {
        poom2.style.backgroundColor = 'salmon';
        poom2.style.color = 'white';
    })



    const icon = document.createElement('i')
    icon.classList.add('bi')
    icon.classList.add('bi-heart-fill')



    icon.classList.add('me-1')

    poom2.appendChild(icon)

    poom2.innerHTML += "Favorite"


    body.appendChild(para)
    bot.appendChild(body)
    bot.appendChild(poom)
    bot.appendChild(poom2)
    card.appendChild(bot)
    item.appendChild(card)

    movieResults.appendChild(item)

}

function addtablePromos(movie) {
    const movieResults = document.getElementById('movie_result')
    let item = document.createElement('div')

    item.classList.add('bg-dark')
    item.classList.add('card')
    item.classList.add('col-xl-2')
    item.classList.add('col-lg-3')
    item.classList.add('col-12')
    item.classList.add('mt-4')

    let img = document.createElement('img')
    img.setAttribute('src', movie.entry.images.jpg.large_image_url)
    img.classList.add('img')

    item.appendChild(img)

    let card = document.createElement('div')
    card.classList.add('d-flex')

    let bot = document.createElement('div')

    bot.classList.add('d-flex')
    bot.classList.add('flex-column')
    bot.classList.add('width-100')

    let body = document.createElement('div')
    body.classList.add('card-body')

    const para = document.createElement('p')

    para.classList.add('card-text')
    para.classList.add('text-center')
    para.classList.add('text-light')
    para.innerHTML = movie.title

    const poom = document.createElement('button')
    poom.setAttribute('type', 'button')

    poom.classList.add('btn')
    poom.classList.add('btn-outline-warning')
    poom.classList.add('mx-3')
    poom.innerHTML = 'Watch'

    poom.addEventListener('click', function () {
        window.open(movie.trailer.url)
    })

    body.appendChild(para)
    bot.appendChild(body)
    bot.appendChild(poom)
    card.appendChild(bot)
    item.appendChild(card)

    movieResults.appendChild(item)

}

function addMovieList(movieList) {
    for (movies of movieList) {
        addtable(movies);
    }
}

function addMovieListPromos(movieList) {
    for (movies of movieList) {
        addtablePromos(movies);
    }
}

function onload() {
    fetch('https://api.jikan.moe/v4/top/anime').then(response => {
        return response.json().then(data => {
            let movie = data.data
            console.log(movie)
            addMovieList(movie)
        })
    })
}

document.getElementById('searchButton').addEventListener('click', () => {
    let textSearch = document.getElementById('inputText').value
    fetch(`https://api.jikan.moe/v4/anime?q=${textSearch}`)
        .then(response => {
            return response.json()
        }).then(student => {
            let movie2 = student.data
            console.log(movie2)
            movie_result.innerHTML = ''
            addMovieList(movie2)
        })
});

document.getElementById('promos').addEventListener('click', () => {
    fetch('https://api.jikan.moe/v4/watch/promos/popular').then(response => {
        return response.json().then(data => {
            let movie = data.data
            console.log(movie)
            movie_result.innerHTML = ''
            addMovieListPromos(movie)
        })
    })
});


