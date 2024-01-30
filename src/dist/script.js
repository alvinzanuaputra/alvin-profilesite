const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        navigator.share({
            text: 'Lets work together',
            url: 'https://alvin-profilsite.vercel.app'
        }).then(() => {
            console.log('Thanks You !!!');
        })
            .catch(() => console.error(err));
    }
    else {
        alert("The current browser does not support the share function. Please, manually share the link.")
    }
});

const ref = document.getElementById('ref')

ref.addEventListener('click', event => {
    window.location.reload();
});


document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.typing-animation');
    const text = element.textContent.trim();
    element.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.1}s`; // Adjust the delay as needed
        element.appendChild(span);
    }
});