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

    poom.addEventListener('click', function () {
        movieResults.innerHTML = ''
        detailCard.innerHTML = ''
        showDetailBlock(movie)
    })

    poom2.addEventListener('click', function () {
        let confirmButton = confirm(`Add ${movie.title} to your favorites`)
        if (confirmButton) {
            poom2.style.backgroundColor = 'salmon';
            poom2.style.color = 'white';
        }
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
    para.innerHTML = movie.entry.title + " " + movie.title

    const poom = document.createElement('button')
    poom.setAttribute('type', 'button')

    poom.classList.add('btn')
    poom.classList.add('btn-outline-success')
    poom.classList.add('mx-3')
    poom.innerHTML = 'Watch'

    poom.addEventListener('click', function () {
        window.open(movie.trailer.url)
    })

    body.appendChild(para)

    body.appendChild(para)
    bot.appendChild(body)
    bot.appendChild(poom)
    card.appendChild(bot)
    item.appendChild(card)

    movieResults.appendChild(item)

}

function showDetailBlock(movie) {
    const detailCard = document.getElementById('detailCard')
    let row = document.createElement('div')
    row.classList.add('row')

    let col1 = document.createElement('div')
    col1.classList.add('col')
    col1.innerHTML = '1'

    row.appendChild(col1)

    let col2 = document.createElement('div')
    col2.classList.add('col-9')
    col2.classList.add('bg-dark')

    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('mb-3')
    card.classList.add('bg-darkSecondary')

    let rowCard = document.createElement('div')
    rowCard.classList.add('row')
    rowCard.classList.add('g-0')

    let colImg = document.createElement('div')
    colImg.classList.add('col-md-4')

    let img = document.createElement('img')
    img.setAttribute('src', movie.images.jpg.large_image_url)
    img.classList.add('img-fluid')
    img.classList.add('rounded-start')
    img.classList.add('img2')

    colImg.appendChild(img)
    rowCard.appendChild(colImg)

    let colBody = document.createElement('div')
    colBody.classList.add('col-md-8')

    let innerBody = document.createElement('div')
    innerBody.classList.add('card-body')

    let ratingButton = document.createElement('button')
    ratingButton.setAttribute('type', 'button')
    ratingButton.classList.add('btn')
    ratingButton.classList.add('btn-outline-secondary')
    ratingButton.classList.add('mb-2')
    ratingButton.classList.add('disabled')

    ratingButton.innerHTML = movie.rating

    let nameEng = document.createElement('h2')
    nameEng.classList.add('card-title')
    nameEng.classList.add('text-light')
    nameEng.classList.add('fs-2')
    nameEng.innerHTML = movie.title

    let nameJapan = document.createElement('h2')
    nameJapan.classList.add('card-title')
    nameJapan.classList.add('text-light')
    nameJapan.classList.add('fs-6')
    nameJapan.innerHTML = movie.title_japanese

    let synopsis = document.createElement('h3')
    synopsis.classList.add('text-light')
    synopsis.classList.add('fs-4')
    synopsis.classList.add('pt-4')
    synopsis.classList.add('border-bottom')
    synopsis.classList.add('pb-2')
    synopsis.innerHTML = 'synopsis'

    let detailSynopsis = document.createElement('p')
    detailSynopsis.classList.add('card-text')
    detailSynopsis.classList.add('text-light')
    detailSynopsis.innerHTML = movie.synopsis

    const poom2 = document.createElement('button')
    poom2.setAttribute('type', 'button')

    poom2.classList.add('btn')
    poom2.classList.add('btn-outline-danger')
    poom2.classList.add('mx-3')
    poom2.classList.add('mt-2')
    poom2.setAttribute('id', 'favButton')
    const icon = document.createElement('i')
    icon.classList.add('bi')
    icon.classList.add('bi-heart-fill')
    icon.classList.add('me-1')

    poom2.appendChild(icon)

    poom2.innerHTML += "Favorite"

    poom2.addEventListener('click', function () {
        poom2.style.backgroundColor = 'salmon';
        poom2.style.color = 'white';
    })




    innerBody.appendChild(ratingButton)
    innerBody.appendChild(nameEng)
    innerBody.appendChild(nameJapan)
    innerBody.appendChild(synopsis)
    innerBody.appendChild(detailSynopsis)



    let col3 = document.createElement('div')
    col3.classList.add('col')
    col3.innerHTML = '3'

    colBody.appendChild(innerBody)
    colBody.appendChild(poom2)
    rowCard.appendChild(colBody)
    card.appendChild(rowCard)
    col2.appendChild(card)
    row.appendChild(col2)
    row.appendChild(col3)
    detailCard.appendChild(row)










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


