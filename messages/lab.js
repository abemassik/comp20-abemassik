// Your JavaScript goes here...

function parse() {
        call = new XMLHttpRequest();

        call.open('GET', 'data.json', true);

        
        call.onreadystatechange = function() {
                if (call.readyState == 4 && call.status == 200) {
                        messageInfo = JSON.parse(call.responseText);

                        output = "";

                        for (var i = 0; i < messageInfo.length; i++) {
                                output += "<p id=\"bubble\">" + 
                                messageInfo[i].username + ": " + 
                                messageInfo[i].content + "</p>";
                        }
                        document.getElementById('messages').innerHTML = output;
                }
        }

        call.send();




}