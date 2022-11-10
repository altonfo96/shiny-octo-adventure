// Your code here

const poster = document.getElementById("poster")

const description = document.getElementById("film-info")
const showtime = document.getElementById("showtime")
const runtime = document.getElementById("runtime")
const buyTicket = document.getElementById("buy-ticket")


const request = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
    res.forEach((film)=>{
        let img = document.getElementById("poster")
        img.src = film.poster 
        let title = document.getElementById("title")
        title.innerText = film.title
        let runtime = document.getElementById("runtime")
        runtime.innerText= film.runtime
        let description = document.getElementById("film-info")
        description.innerText = film.description
        let showtime = document.getElementById("showtime")
        showtime.innerText = film.showtime  
        let ticketnum = document.getElementById("ticket-num")
        ticketnum.innerText = film.capacity - film.tickets_sold
        let filmtitle = document.getElementById("films")
        filmtitle [film.title]
    })
buyTicket.addEventListener("click", () =>{
    ticketnum.innerText.value - 1
})
}



request()