const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerSubmit) ;

function handlerSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    for (const element of elements) {
        if (element.tagName === "input" && element.value.trim() === "") {
            alert("All form fields must be filled in");
            return;
        }
    }

}