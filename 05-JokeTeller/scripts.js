const audioElm = document.getElementById('audio');
const buttonElm = document.getElementById('button');

const API_KEY = "800da1c5387e426eb739f220e48c0b17";

function toggleButton() {
    buttonElm.disabled = !buttonElm.disabled;
}

/**
 * Play Joke with VoiceRSS API
 * @param {string} text 
*/
async function playText(text) {
    try {
        const url = `http://api.voicerss.org/?key=${API_KEY}&hl=en-us&c=MP3&f=16khz_16bit_stereo&src=${text}`;
        const response = await fetch(url);
        const data = await response.blob();
        var blobUrl = URL.createObjectURL(data);
        audioElm.src = blobUrl;
        audioElm.play();
        console.log('data', data);
    } catch (error) {
        console.log('Play Audio Voice RSS API Failure: ', error);
    }
}

// Get Joke API
async function getJokes() {
    let joke = '';
    // Disable Btn
    toggleButton();
    try {
        const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=0-185';
        const response = await fetch(url);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        console.log('[LOG]: ', joke);
        playText(joke);
    } catch (error) {
        console.log('Get Joke API Failure: ', error);
    }
}

buttonElm.addEventListener('click', () => {
    getJokes();
});

// Enable button once audio ended
audioElm.addEventListener('ended', toggleButton);