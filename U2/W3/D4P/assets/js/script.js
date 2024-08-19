const dataURL = 'https://api.pexels.com/v1/search?query=nature&per_page=15';
const dataURL2 = 'https://api.pexels.com/v1/search?query=[your-secondary-query]';

// Funzione per leggere il parametro della query string
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Carica le immagini in base al parametro della query string
async function loadImages() {
    const apiParam = getQueryParam('api');
    let apiURL;
    let containerId;

    if (apiParam === '1') {
        apiURL = dataURL;
        containerId = 'photos-container';
    } else if (apiParam === '2') {
        apiURL = dataURL2;
        containerId = 'photos-container2';
    } else {
        // Nascondi entrambi i contenitori se non è presente un parametro valido
        document.getElementById('photos-container').style.display = 'none';
        document.getElementById('photos-container2').style.display = 'none';
        return; // Esci dalla funzione se nessuna API deve essere caricata
    }

    // Nascondi entrambi i contenitori per mostrare solo quello selezionato
    document.getElementById('photos-container').style.display = 'none';
    document.getElementById('photos-container2').style.display = 'none';

    const container = document.getElementById(containerId);
    container.style.display = ''; // Mostra il contenitore selezionato

    try {
        let read = await fetch(apiURL, {
            method: 'GET',
            headers: {
                'Authorization': 'hBjKm6CsIwD7gY872j3zbINm94W5t6E6oalL2UaQMUqrIdoW0g6eCJHL',
                'Content-Type': 'application/json'
            }
        });

        let response = await read.json();

        if (apiParam === '2') {
            populateCards2(response.photos);
        } else {
            populateCards1(response.photos);
        }
    } catch (error) {
        console.log(error);
        location.href = '404.html';
    }
}

function populateCards1(photos) {
    const container = document.getElementById('photos-container');
    container.innerHTML = '';

    photos.forEach((photoData) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';

        cardDiv.innerHTML = `
            <div class="card shadow-sm">
                <img src="${photoData.src.large}" class="card-img-top" alt="${photoData.alt}">
                <div class="card-body">
                    <h5 class="card-title">${photoData.photographer}</h5>
                    <p class="card-text">${photoData.alt}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a href="${photoData.url}" target="_blank" class="btn btn-sm btn-outline-secondary">View</a>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Hide</button>
                        </div>
                        <small class="text-muted">${photoData.id}</small>
                    </div>
                </div>
            </div>
        `;

        const hideButton = cardDiv.querySelector('.btn-outline-secondary:nth-child(2)');
        if (hideButton) {
            hideButton.addEventListener('click', (e) => {
                e.preventDefault();
                cardDiv.style.display = 'none';
            });
        }

        container.appendChild(cardDiv);
    });
}

function populateCards2(photos) {
    const container = document.getElementById('photos-container2');
    container.innerHTML = '';

    photos.forEach((photoData) => {
        const cardDiv2 = document.createElement('div');
        cardDiv2.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';

        cardDiv2.innerHTML = `
            <div class="card shadow-sm">
                <img src="${photoData.src.large}" class="card-img-top" alt="${photoData.alt}">
                <div class="card-body">
                    <h5 class="card-title">${photoData.photographer}</h5>
                    <p class="card-text">${photoData.alt}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a href="${photoData.url}" target="_blank" class="btn btn-sm btn-outline-secondary">View</a>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Hide</button>
                        </div>
                        <small class="text-muted">${photoData.id}</small>
                    </div>
                </div>
            </div>
        `;

        const hideButton = cardDiv2.querySelector('.btn-outline-secondary:nth-child(2)');
        if (hideButton) {
            hideButton.addEventListener('click', (e) => {
                e.preventDefault();
                cardDiv2.style.display = 'none';
            });
        }

        container.appendChild(cardDiv2);
    });
}

// Event listeners per i pulsanti di caricamento delle immagini
document.getElementById('caricaImmagine').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.search = '?api=1'; // Ricarica la pagina con parametro API 1
});

document.getElementById('caricaAltraImmagine').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.search = '?api=2'; // Ricarica la pagina con parametro API 2
});

// Carica le immagini in base al parametro della query string all'avvio
document.addEventListener('DOMContentLoaded', loadImages);
