var projectList = [
    { title: "NX-Autolearn", href: "https://matt-deve.github.io/NX-autolearn/"},
    { title: "Crosswords", href: ""}
]

function afterPageLoad() {
    let i = 0;
    projectList.forEach(element => {
        $(projects-container).append(element.title)
    });
    
}