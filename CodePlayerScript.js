$(".lang-button").hover(function () {
    $(this).css("background-color", "#ccc");
    $(this).css("cursor", "default");
}, function () {
    if ($(this).hasClass("active-button")) {
        $(this).css("background-color", "#e8f2ff");
    } else {
        $(this).css("background-color", "#eee");
    }
});


$("#html-button").click(function () {
    $("#html-button").toggleClass("active-button");
    $("#html-div").toggleClass("active-lang-div");
    $("#html-div").toggleClass("inactive-lang-div");
});

$("#css-button").click(function () {
    $("#css-button").toggleClass("active-button");
    $("#css-div").toggleClass("active-lang-div");
    $("#css-div").toggleClass("inactive-lang-div");
});

$("#js-button").click(function () {
    $("#js-button").toggleClass("active-button");
    $("#js-div").toggleClass("active-lang-div");
    $("#js-div").toggleClass("inactive-lang-div");
});

$("#output-button").click(function () {
    $("#output-button").toggleClass("active-button");
    $("#output-div").toggleClass("active-lang-div");
    $("#output-div").toggleClass("inactive-lang-div");
});

function updateOutput() { 
    $("#output-iframe").contents().find("html").html("<html> <head> <style type='text/css'>" + $("#css-content").val() + "</style> <body>" + $("#html-content").val() + "</body> </html>");
    document.getElementById("output-iframe").contentWindow.eval($("#js-content").val());
}

updateOutput();

$("#html-content").on("change keyup paste", function() {
    updateOutput();   
    document.getElementById("output-iframe").contentWindow.eval($("#js-content").val()); 
});

$("#css-content").on("change keyup paste", function() {
    updateOutput();   
    document.getElementById("output-iframe").contentWindow.eval($("#js-content").val()); 
});

$("#js-content").on("change keyup paste", function() {
    updateOutput();   
    document.getElementById("output-iframe").contentWindow.eval($("#js-content").val()); 
});



$("textarea").keydown(function(e) {
    if(e.keyCode === 9) { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var $this = $(this);
        var value = $this.val();

        // set textarea value to: text before caret + tab + text after caret
        $this.val(value.substring(0, start)
                    + "\t"
                    + value.substring(end));

        // put caret at right position again (add one for the tab)
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        e.preventDefault();
    }
});