const api_key = 'GET-YOUR-KEY'

function albumRow(album) {
  const row = `<div class="row m-t-1">
                <div class="col-xs-12">
                  <img src="${album.image[1]['#text']}" class='pull-left m-r-1'>
                  <h2>${album.name}</h2>
                  <p>${album.artist.name}</p>
                </div>
              </div>`

  return row;
}

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('search');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let artist = document.getElementById('artist').value;
    console.log(`artist = ${artist}`)

    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${api_key}&format=json&limit=5`;

    let container = document.getElementById('albums-container')

    fetch(url)
    .then( response => response.json() )
    .then( data => {
      container.innerHTML = ''
      console.log(data);
      data.topalbums.album.forEach( (album) => {
        const row = albumRow(album);
        container.insertAdjacentHTML('beforeend', row);
      });
    })

  });


});

