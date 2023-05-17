const video = document.querySelector('.video iframe');
const suite = Array.from(document.querySelectorAll('figure'));

for (const value of suite) {
    // console.log(value)
    value.addEventListener('click', event =>{
        const dataUrl = event.currentTarget.dataset.url;
        // console.log(dataUrl);
        video.setAttribute('src', `https://www.youtube.com/embed/${dataUrl}`);
    });
}