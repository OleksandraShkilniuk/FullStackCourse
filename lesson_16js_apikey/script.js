// Configuration object for Giphy API
const config = {
    giphy: {
        api_token: 'cnGXlyc7W8RAXDueL3OpNruQOr7biqHE',
        url: 'https://api.giphy.com/v1/gifs',
    }
};


// Fetch trending GIFs on page load
window.addEventListener('load', function (event) {
    fetchTrending();
});

// Function to fetch trending GIFs
function fetchTrending() {
    // Clear the gallery container
    document.getElementById('bow-gallery').innerHTML = '';

    // Fetch trending GIFs from Giphy API
   fetch(`${config.giphy.url}/trending?api_key=${config.giphy.api_token}`)
       .then((response) => response.json())
       // Iterate through the list and create HTML for each GIF

       .then((list) => {
           list.data.forEach((item) => createHtmlGiphy(item));
       })}
//
//update gallery once event list is clicked
function updateGallery() {
    // Get the search query and selected GIF count
    let query = document.getElementById('input').value;
    let limit = document.getElementById('choose-count').value;
    fetchLimit(limit, query);
}

//function that uses limit and query
function fetchLimit(limit, query) {

    document.getElementById('bow-gallery').innerHTML = '';
    fetch(`${config.giphy.url}/search?q=${encodeURIComponent(query)}&api_key=${config.giphy.api_token}&limit=${encodeURIComponent(limit)}`)
        .then((response) =>response.json())
        .then((list) => {
            list.data.forEach((item) =>  {
                createHtmlGiphy(item);
            })
        })
}

//test


//function created html
function createHtmlGiphy(item) {
    let div = document.createElement('div');
    const url = item.images.fixed_height.url;

    const link = item.url;
    div.classList.add('col-auto', 'my-2');
    div.id = `gallery-item-${item.id}`;
    div.innerHTML = `
    <a href="${link}" target="_blank">
    <img src="${url}" alt="${item.title}" loading="lazy">
    </a>
    `
    document.getElementById('bow-gallery').appendChild(div);
}
//listeners

document.getElementById('input').addEventListener('keydown', function(event) {
    updateGallery();
})

document.getElementById('input').addEventListener('blur', function(event) {
    updateGallery();
})

document.getElementById('choose-count').addEventListener('change', function () {
    updateGallery();
});

//
