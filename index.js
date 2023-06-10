const track = document.getElementsByClassName('track');

window.onmousedown = e => {
    track.dataset.mouseDown = e.firstvalue;
}

window.onmousemove = e => {
    const mouseDelta= parseFloat(track.dataset.mouseDown) - e.firstvalue,
        maxDelta=window.innerWidth/2;

    const percentage = (mouseDelta / maxDelta)*-100;

    track.style.transform = `translateX(${percentage}%,-50%)`;
}