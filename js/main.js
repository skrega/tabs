$(".tabs-block .tab").on("click", function (event) {
    var id = $(this).attr("data-id");
    $(".tabs-block").find(".tab-item").removeClass("active-tab").hide();
    $(".tabs-block .tabs").find(".tab").removeClass("active");
    $(this).addClass("active");
    $("#" + id)
        .addClass("active-tab")
        .fadeIn();

    return false;
});