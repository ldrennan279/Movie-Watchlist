
fetch("http://www.omdbapi.com/?t=batman&apikey=98442dff")
.then(res => res.json())
.then(data => {
    console.log(data)
    document.getElementById("title").textContent = `
        ${data.Title}
        ${data.Year}
        ${data.Rated}
    `
})

fetch("http://img.omdbapi.com/?t=batman&apikey=98442dff")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("title").innerHTML = `

        `
    })