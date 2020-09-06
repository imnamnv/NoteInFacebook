//array note
var arr = [];

//add key enter
$(function(){
    $('#note').keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            $('button[id = send]').click();
            return false;
        }
    });
})

//set event of add note
$(function () {
    $("#send").click(function () {
        var getNote = $("#note").val();
        //get hisloty note
        chrome.storage.local.get('data', function (items) {
            //if note not null. push new note to storage by array (set array = history)
            if(items.data){
                arr = items.data;
            }
            //add new note
            arr.push("<button class=\"clear\" value=\"" + getNote + "\" style=\"background-color: #a8d8ea;border: none;\">∙ " + getNote + "</button></br>");
            chrome.storage.local.set({
                data: arr
            }, function () {
                //call content js(run with dom?)
                chrome.tabs.executeScript({
                    file: "content.js"
                });
            });
        });
    });
})

//clear all
$(function () {
    $("#clear").click(function () {
        chrome.storage.local.set({ data: "" }, function () {
            arr=[];
            chrome.tabs.executeScript({
                file: "content.js"
            });
        });
    });
})