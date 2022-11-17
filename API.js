
////////////////// Load API //////////////////////////
// Here we'll use the XMLhttprequest.

// Let's create a new XMLHttprequest

const request = new XMLHttpRequest();

// Then open the Request

request.open('GET', 'the link to be droped here');

// and send the request

request.send();

// The request is already sent but we need to load it before we can have access to the data; using event

request.addEventListener('load', ()=>{
   return request.responseText;
})

// But the response will be brought in JSON, a big string we need to convert into an object, so we can work with it
// So instead of working the code on top, we change it with the code down here

request.addEventListener('load', ()=>{
    //we declare a variable where to store the data
    const data = JSON.parse(request.responseText); // We also need to dessctructure this variable in order to get this as one object, instead of an object stored in an array
    return data;

    //now we can access to all Live data and build something down here, even with a innerHtml
})

///////////////////// API 2nd /////////////////////////////

async function populate() {

    const request = new Request("url link here");

    const response = await fetch(request);
    const data = await response.json();
///we can access all the data through this data variable
}
