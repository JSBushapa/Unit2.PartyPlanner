//State
let  events = []

/** API CALLS */

const eventsContainer = document.getElementById('events')


const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/jonathan'
// async fetch
async function getEvents() { //async function
    try {
        const response = await fetch(API_URL + '/events')
    const json = await response.json()

    // console.log('Properties: ', json.data)
    // returns the data properties of json object
   return json.data
    } catch (error) {
        console.error(error)
    }
}



// render 

 function renderEvent() {
    // assign async function to state
    // events = await getEvents() // use async & await because is callHeroku is an async function
    // const eventsElement = document.getElementById('#events')
    const htmlEvent = events.map((ev) => {
        // console.log('event', event)
        let div = document.createElement('div')
        div.className = 'Card'

        div.innerHTML = ` <h3>#${ev.id}</h3>
                         <h3>${ev.name}</h3>
                         <h3>${ev.description}</h3>
                         <h3>${ev.date}</h3>
                         <h3>${ev.location}</h3>`

        return div
        // const delete

        
    })
    eventsContainer.replaceChildren(...htmlEvent)

}

render()



async function startApp() {
    events = await getEvents() 
    console.log(events.data)

    render()
}
startApp()









//event listener