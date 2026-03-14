const API="https://api.openf1.org/v1"

async function meetings(){
let r=await fetch(API+"/meetings?year=2024")
let d=await r.json()

meetings.innerHTML=d.slice(0,5).map(m=>
m.meeting_name+"<br>"+m.location+"<br>"+m.country_name
).join("<br><br>")
}

async function sessions(){
let r=await fetch(API+"/sessions?session_key=latest")
let d=await r.json()

sessions.innerHTML=d.map(s=>
s.session_name+" "+s.location
).join("<br>")
}

async function weather(){
let r=await fetch(API+"/weather?session_key=latest")
let d=await r.json()

if(!d.length)return

let w=d[d.length-1]

weather.innerHTML=
"Track "+w.track_temperature+"°C<br>"+
"Air "+w.air_temperature+"°C<br>"+
"Wind "+w.wind_speed
}

async function drivers(){
let r=await fetch(API+"/drivers?session_key=latest")
let d=await r.json()

let html="<tr><th>Driver</th><th>Team</th></tr>"

d.forEach(x=>{
html+=`<tr><td>${x.full_name}</td><td>${x.team_name}</td></tr>`
})

drivers.innerHTML=html
}

async function position(){
let r=await fetch(API+"/position?session_key=latest")
let d=await r.json()

let html="<tr><th>Driver</th><th>Pos</th></tr>"

d.slice(0,20).forEach(p=>{
html+=`<tr><td>${p.driver_number}</td><td>${p.position}</td></tr>`
})

position.innerHTML=html
}

async function intervals(){
let r=await fetch(API+"/intervals?session_key=latest")
let d=await r.json()

let html="<tr><th>Driver</th><th>Gap</th></tr>"

d.slice(0,10).forEach(i=>{
html+=`<tr><td>${i.driver_number}</td><td>${i.gap_to_leader}</td></tr>`
})

intervals.innerHTML=html
}

async function laps(){
let r=await fetch(API+"/laps?session_key=latest")
let d=await r.json()

let html="<tr><th>Driver</th><th>Lap</th><th>Time</th></tr>"

d.slice(-15).forEach(l=>{
html+=`<tr><td>${l.driver_number}</td><td>${l.lap_number}</td><td>${l.lap_duration}</td></tr>`
})

laps.innerHTML=html
}

async function pit(){
let r=await fetch(API+"/pit?session_key=latest")
let d=await r.json()

let html="<tr><th>Driver</th><th>Lap</th><th>Stop</th></tr>"

d.slice(-10).forEach(p=>{
html+=`<tr><td>${p.driver_number}</td><td>${p.lap_number}</td><td>${p.stop_duration}</td></tr>`
})

pit.innerHTML=html
}

async function stints(){
let r=await fetch(API+"/stints?session_key=latest")
let d=await r.json()

let html="<tr><th>Driver</th><th>Tyre</th><th>Laps</th></tr>"

d.slice(0,10).forEach(s=>{
html+=`<tr><td>${s.driver_number}</td><td>${s.compound}</td><td>${s.lap_start}-${s.lap_end}</td></tr>`
})

stints.innerHTML=html
}

async function overtakes(){
let r=await fetch(API+"/overtakes?session_key=latest")
let d=await r.json()

overtakes.innerHTML=d.slice(-5).map(o=>
"<div class='alert'>Driver "+
o.overtaking_driver_number+
" passed "+
o.overtaken_driver_number+
"</div>"
).join("")
}

async function racecontrol(){
let r=await fetch(API+"/race_control?session_key=latest")
let d=await r.json()

racecontrol.innerHTML=d.slice(-5).map(x=>x.message).join("<br>")
}

async function grid(){
let r=await fetch(API+"/starting_grid?session_key=latest")
let d=await r.json()

let html="<tr><th>Pos</th><th>Driver</th></tr>"

d.forEach(g=>{
html+=`<tr><td>${g.position}</td><td>${g.driver_number}</td></tr>`
})

grid.innerHTML=html
}

async function results(){
let r=await fetch(API+"/session_result?session_key=latest")
let d=await r.json()

let html="<tr><th>Pos</th><th>Driver</th></tr>"

d.slice(0,10).forEach(x=>{
html+=`<tr><td>${x.position}</td><td>${x.driver_number}</td></tr>`
})

results.innerHTML=html
}

async function location(){

let r=await fetch(API+"/location?session_key=latest")
let d=await r.json()

if(!d.length)return

let track=document.getElementById("track")
track.innerHTML=""

d.slice(-12).forEach(c=>{

let car=document.createElement("div")

car.className="car"

car.style.left=(c.x/20)+"px"
car.style.top=(c.y/20)+"px"

track.appendChild(car)

})
}

async function radio(){

let r=await fetch(API+"/team_radio?session_key=latest")
let d=await r.json()

radio.innerHTML=d.slice(-3).map(x=>
`Driver ${x.driver_number}<br>
<audio controls src="${x.recording_url}"></audio>`
).join("<br>")
}

function loadAll(){

meetings()
sessions()
weather()
drivers()
position()
intervals()
laps()
pit()
stints()
overtakes()
racecontrol()
grid()
results()
location()
radio()

}

loadAll()

setInterval(loadAll,8000)
