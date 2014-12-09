var translationInitiated = setInterval( function () {
    $('*').each(function(){
        if($(this).text())
        {
            var tempElement = $(this).attr("class");

            if(tempElement === "blocklyText") {
                switch($(this).text()) {
                    case "move":
                        $(this).text("pokreni");
                        $(this).css("width", 150);
                        break;
                    case "turn":
                        $(this).text("okreni");
                        break;
                    case "degrees":
                        $(this).text("stepeni");
                        break;
                    case "pixels":
                        $(this).text("piksela");
                        break;
                    case "by":
                        $(this).text("za");
                        break;
                    case "forward ▼":
                        $(this).text("napred ▼");
                        break;
                    case "backward ▼":
                        $(this).text("nazad ▼");
                        break;
                    case "left ▼":
                        $(this).text("lijevo ▼");
                        break;
                    case "right ▼":
                        $(this).text("desno ▼");
                        break;
                    default:
                    //do nothing
                }
            }
        }
    })
},1000);