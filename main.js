x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please sppek";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recongnized as: " +
    content;
    if(content == "circle" || content == "Circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Stared drawing circle";
        draw_circle = "set";
    }
    if(content == "rectangle" || content == "Rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Stared drawing rectange";
        draw_rect = "set";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is draw";
        draw_circle = "";
    }
    if(draw_rect == "set")
    {
        radius = Math.floor(Math.random() * 100);
        rect(x, y, 70,50);
        document.getElementById("status").innerHTML = "Rectangle is draw";
        draw_rect = "";
    }
}
