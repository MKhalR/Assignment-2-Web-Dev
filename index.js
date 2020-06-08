window.onload = function () {
    //variables
    let form = document.getElementById("form");
}

/*function openPage(page){
    window.location.href = page;
}*/

//Home Button function
function homeButton(){
    //found this code at https://www.w3docs.com/snippets/html/how-to-make-button-onclick-in-html.html
    window.location.href = 'index.html';
}

//Portfolio Button function
function portfolioButton(){
    window.location.href = 'index_portfolio.html';
}

//CV Button Function
function cvButton(){
    window.location.href = 'index_cv.html';
}

//Contacts Button Function
function contactsButton(){
    window.location.href = 'index_contacts.html';
}

//GitHub Icon Function
function githubIcon(){
    //found this code at https://www.codexworld.com/how-to/open-url-in-new-browser-window-tab-javascript/
    window.open('https://github.com/MKhalR', '_blank');
}

//Positive-message Function
function posMessage(){
    //this code was on the same webpage as the window.location.href site
    document.getElementById("message").innerHTML = "No matter who you are, where you are from, just remember:</br> We are human. We are all equal, and make mistakes. But the two things that set You apart from others are your mind and personality. So never feel down. Always remember, You have your own mind and personality. Don't let anyone tell You different!";
}