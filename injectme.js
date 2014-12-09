var translationInitiated = setInterval( function () {
    $('*').each(function(){
        if($(this).text())
        {
            var tempElement = $(this).attr("class");

            if(tempElement === "blocklyText") {
                console.log("Sve klase: " + $(this).text());

                var tempVariable = $(this).text();

                if(tempVariable.indexOf("forward") >= 0){
                    tempVariable = "move_f"
                }
                if(tempVariable.indexOf("when") >= 0){
                    tempVariable = "when_r"
                }

            if(tempElement === "blocklyText") {
                switch(tempVariable) {
                    case "move":
                        $(this).text("pokreni");
                        break;
                    case "move_f":
                        $(this).text("kreni naprijed");
                        break;
                    case "when_r":
                        $(this).text("Start");
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
                    case "left ↺ ▼":
                        $(this).text("lijevo ↺ ▼");
                        break;
                    case "left ▼":
                        $(this).text("lijevo ▼");
                        break;
                    case "right ▼":
                        $(this).text("desno ▼");
                        break;
                    case "right ↻ ▼":
                        $(this).text("desno ↻ ▼");
                        break;
                    default:
                    //do nothing
                }
            }
        }
    })
},1000);