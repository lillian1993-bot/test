function typeWriter(target, text, speed = 40) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function autoScroll(element, interval = 200) {
    setInterval(() => {
        element.scrollTop = element.scrollHeight;
    }, interval);
}
