var projectList = [
    { title: "NX-Autolearn", href: "https://matt-deve.github.io/NX-autolearn/"},
    { title: "Crosswords", href: ""}
]

function afterPageLoad() {
    projectList.forEach(element => {
        $(projectsContainer).append($("<h2></h2>").text(element.title).attr("href",element.href))
    });
    
}