
const toggleSpecify = (element) => {
const specifyDiv = document.getElementById("accessibility-specify");

if (element.id === "accessibility-yes") {
    specifyDiv.style.display = "block";
    document.getElementById("specify").required = true; // make the input required
} else {
    specifyDiv.style.display = "none";
    document.getElementById("specify").required = false; // remove required attribute
}
}

document.getElementById("reset").addEventListener("click", () => {
    const specifyDiv = document.getElementById("accessibility-specify");
    specifyDiv.style.display = "none";
    document.getElementById("specify").required = false; // remove required attribute
})


console.log("hello manav")
