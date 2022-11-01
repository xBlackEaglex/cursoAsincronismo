import fetch from 'node-fetch';
const API = 'http:api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    });
    return response
}

const data = {
    "title": "Unos Tacos",
    "price": 12,
    "description": "Un buen taco de bistec",
    "categoryId": 1,
    "images": ["https://www.shutterstock.com/image-photo/tacos-de-bistec-homemade-grilled-600w-2185630889.jpg"]
}


postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));