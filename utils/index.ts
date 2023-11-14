
export async function fetchCars() {

    const headers = {
        'X-RapidAPI-Key': 'd807482ef4msh98a47d7422e4bdep129c2ajsn9ebd442438dd',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });

    const result = await response.json();

    return result;
}