//State
let events = []

// render 

async function render() {
    // assign async function to state
    events = await getEvents() // use async & await because is callHeroku is an async function
    const eventsElement = document.getElementById('events')
    const eventCards = events.map((event) => {
        console.log('event', event)
        const eventCard = document.createElement('li')
        eventCard.innerHTML = `

        `
    })





}
render()



const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2401-FTB-ET-WEB-FT/events'
// async fetch
async function getEvents() { //async function
    try {
        const response = await fetch(API_URL)
    const json = await response.json()

    console.log('Properties: ', json.data)
    // returns the data properties of json object
//    return json.data
    } catch (error) {
        console.error(error)
    }
}

getEvents()

//event listener