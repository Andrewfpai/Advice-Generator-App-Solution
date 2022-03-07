const api_url = "https://api.adviceslip.com/advice"

async function getQuote(){
    // fetch(api_url)
    // .then((response) => {
    //     return response.json()
    // })
    // .then((data) => {
    //     resolve(data)
    // })
    // .catch((err) => {
    //     reject(err)
    // })

  


    const data = await fetch(api_url)
    const api_data = await data.json()

    const id = api_data.slip.id
    const advice = api_data.slip.advice
 
    document.getElementById("quote").textContent = advice
    document.getElementById("quote_id").textContent = "#" + id

  

}

function jsRunning(){
    try {
        getQuote();
    } catch (e) {
        console.error(e);
    } finally {
        console.log('All succesful');
    }
}




