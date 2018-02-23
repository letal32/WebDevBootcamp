
init();

function init(){

    //Mark an event as completed
    $("ul").on("click","li", function(){
        $(this).toggleClass("completed");
    });

    //Remove completely an event
    $("ul").on("click", "li span", function(e){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        e.stopPropagation();
    });

    $("input[type=text]").on("keypress", function(e){
        if (e.key === "Enter") {
            var value = $(this).val();
            $(this).val("");
            $("ul").append("<li><span><i class=\"fa fa-trash-alt\"></i></span> " + value + "</li>");
        }
    });

    $("button").on("click", function(){
        $("input[type=text]").toggleClass("hide");
    });

}