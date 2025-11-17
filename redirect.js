document.getElementById("policy-form").addEventListener("submit", function(e){
    e.preventDefault();
    const value = document.getElementById("policy").value;

    if(!value) return;

    let target = "";
    if (value >= 1 && value <= 6) {
        target = "sustainable.html";
    } else if (value >= 7 && value <= 11) {
        target = "digital.html";
    } else {
        target = "participation.html";
    }

    window.location.href = `${target}?id=${value}`;
});
