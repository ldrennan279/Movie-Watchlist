
fetch("http://www.omdbapi.com/?t=star&apikey=98442dff")
.then(res => res.json())
.then(data => {
    console.log(data)
    document.getElementById("title").innerHTML = `
        ${data.Title}
        ${data.Year}
        ${data.Rated}
        <img src="${data.Poster}"/>
    `
})
