function buttonClick() {
    window.alert('Hello World!!!');
}

$(document).ready(function() {
    $('#button').click(buttonClick);
});