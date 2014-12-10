

var notice = function() {
    console.log("Mistral Technologies translation for Code.org is initiated. Version 1.0");
};
notice();
var translationInitiated = setInterval(function () {
    $('*').each(function () {
        if ($(this).text()) {
            var tempElement = $(this).attr("class");

            if (tempElement === "blocklyText") {

                var tempVariable = $(this).text();

                if (tempVariable.indexOf("forward") >= 0) {
                    tempVariable = "move_f"
                }
                if (tempVariable.indexOf("when") >= 0) {
                    tempVariable = "when_r"
                }
                if (tempVariable.indexOf("until") >= 0) {
                    tempVariable = "repeat_u"
                }
                if (tempVariable.indexOf("color") >= 0) {
                    tempVariable = "set_c"
                }

                //Flap Game Specific
                if (tempVariable.indexOf("circle") >= 0) {
                    tempVariable = "create_c"
                }
                if (tempVariable.indexOf("scene") >= 0) {
                    tempVariable = "set_scene"
                }
                if (tempVariable.indexOf("game") >= 0) {
                    tempVariable = "end_game"
                }
                if (tempVariable.indexOf("speed") >= 0) {
                    tempVariable = "set_speed"
                }
                if (tempVariable.indexOf("point") >= 0) {
                    tempVariable = "score_point"
                }

                if (tempElement === "blocklyText") {
                    switch (tempVariable) {
                        case "score_point":
                            $(this).text("zaradi poen");
                            break;
                        case "set_speed":
                            $(this).text("postavi brzinu");
                            break;
                        case "end_game":
                            $(this).text("kraj igre");
                            break;
                        case "set_scene":
                            $(this).text("postavi scenu");
                            break;
                        case "move":
                            $(this).text("pokreni");
                            break;
                        case "move_f":
                            $(this).text("naprijed");
                            break;
                        case "create_c":
                            $(this).text("napravi krug");
                            break;
                        case "repeat_u":
                            $(this).text("ponavljaj do");
                            break;
                        case "set_c":
                            $(this).text("Oboji u:");
                            break;
                        case "when_r":
                            $(this).text("Start");
                            break;
                        case "turn":
                            $(this).text("okret");
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
                            $(this).text("napred▼");
                            break;
                        case "backward ▼":
                            $(this).text("nazad▼");
                            break;
                        case "left ↺ ▼":
                            $(this).text("lijevo↺▼");
                            break;
                        case "left ▼":
                            $(this).text("lijevo▼");
                            break;
                        case "right ▼":
                            $(this).text("desno▼");
                            break;
                        case "right ↻ ▼":
                            $(this).text("desno↻▼");
                            break;
                        case "repeat":
                            $(this).text("ponovi");
                            break;
                        case "times":
                            $(this).text("puta");
                            break;
                        case "do":
                            $(this).text("radi");
                            break;
                        case "jump":
                            $(this).text("skoci");
                            break;
                        case "else":
                            $(this).text("ili");
                            break;
                        case "flap":
                            $(this).text("leti");
                            break;
                        case "play":
                            $(this).text("pustaj");
                            break;
                        case "sound":
                            $(this).text("zvuk");
                            break;
                        default:
                        //Buy me a Lunch...
                    }
                }
            }
        }
    })
}, 1000);