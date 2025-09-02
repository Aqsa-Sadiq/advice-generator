const advice= document.getElementById('quote');
const adviceno = document.getElementById('advice');
const api_url = 'https://api.adviceslip.com/advice';

async function getAdvice(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    advice.innerHTML = data.slip.advice;
    adviceno.innerHTML = `Advice #${data.slip.id}`;
}
getAdvice(api_url);

function tweetNow() {
    window.open("https://twitter.com/intent/tweet?text=" + advice.innerHTML, "tweet window", "width=600,height=400");
}
tweetNow();