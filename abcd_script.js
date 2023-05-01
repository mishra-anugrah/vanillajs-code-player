$("#html-code").on("change keyup paste", function () {
    $("#output-iframe").contents().find("html").html($("#html-code").val());
});