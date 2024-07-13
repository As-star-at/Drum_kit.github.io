var note;
var music= [];
var timeStamps= [];
var recording=false;

document.querySelector(".start").addEventListener("click", initialise);
document.querySelector(".stop").addEventListener("click", stop_rec);
document.querySelector(".play").addEventListener("click", play_rec);

function initialise(){
    note=0;
    music=[];
    timeStamps= [];
    recording=true;
    document.querySelector(".start").style.color="#FF1900";
    document.querySelector(".start").style.boxShadow="0 0 50px 5px #FF1900";
    document.querySelector(".start").style.borderColor= "#FF1900";
    console.log("Recording in progress...");
}

function stop_rec(){
    recording= false;
    document.querySelector(".start").style.color="black";
    document.querySelector(".start").style.boxShadow="";
    document.querySelector(".start").style.borderColor= "white";

    var stop_id= setInterval(style_stop, 1);
    setTimeout(function() {
        clearInterval(stop_id);
        document.querySelector(".stop").style.color="black";
        document.querySelector(".stop").style.boxShadow="";
        document.querySelector(".stop").style.borderColor= "white";}, 1000);
    console.log("Recording stopped");
}


function style_stop(){
    document.querySelector(".stop").style.color="#FF1900";
    document.querySelector(".stop").style.boxShadow="0 0 50px 5px #FF1900";
    document.querySelector(".stop").style.borderColor= "#FF1900";
}

function play_rec() {
    var playButton = document.querySelector(".play");
    playButton.style.color = "#FF1900";
    playButton.style.boxShadow = "0 0 50px 5px #FF1900";
    playButton.style.borderColor = "#FF1900";

    console.log("Playing recording");
    var p = 0;

    function playNext() {
        if (p < music.length) {
            var audi = new Audio('sounds/' + music[p] + '.mp3');
            audi.play();
            p++;

            if(p < music.length){
                var delay= (p==0) ? 0:(timeStamps[p] - timeStamps[p - 1]);
                setTimeout(playNext, delay);
            }
        }
    }
        if( music.length > 0){playNext();}
        var dela = timeStamps[timeStamps.length-1] - timeStamps[0] + 520;
        setTimeout(style_stop2, dela);
}

function style_stop2(){
        document.querySelector(".play").style.color="black";
        document.querySelector(".play").style.boxShadow="";
        document.querySelector(".play").style.borderColor= "white";
}

document.addEventListener("keydown", function(e){
    trigger(e);
    glow(e);
});


function trigger(e){
    var button= e.key;
    sound(button);
    if(recording)
        {
            music.push(e.key);
            timeStamps.push(Date.now());
        }
}

function glow(e){
    var press= e.key ;
    var element =document.querySelector("."+press);
    function reset(){
        element.style.backgroundColor= "";
        element.style.boxShadow= "";
        element.style.borderColor= "black";
    }
    switch(press){
            case "a":
                element.style.backgroundColor= "#FF008C";
                element.style.boxShadow= "0 0 50px 5px #FF008C";
                element.style.borderColor= "#FF008C";
                setTimeout(reset, 350);
                break; 
        

            case "b":
                element.style.backgroundColor= "#00FF2E";
                element.style.boxShadow= "0 0 50px 5px #00FF2E";
                element.style.borderColor= "#00FF2E";
                setTimeout(reset, 350);
                break;

            case "c":
                element.style.backgroundColor= "#FFFA00";
                element.style.boxShadow= "0 0 50px 5px #FFFA00";
                element.style.borderColor= "#FFFA00";
                setTimeout(reset, 350);
                break;

            case "d":
                element.style.backgroundColor= "#00A7EA";
                element.style.boxShadow= "0 0 50px 5px #00A7EA";
                element.style.borderColor= "#00A7EA";
                setTimeout(reset, 350);
                break; 

            case "e":
                element.style.backgroundColor= "#FF5500";
                element.style.boxShadow= "0 0 50px 5px #FF5500";
                element.style.borderColor= "#FF5500";
                setTimeout(reset, 350);
                break;
                

            case "f":
                element.style.backgroundColor= "#FF00FF";
                element.style.boxShadow= "0 0 50px 5px #FF00FF";
                element.style.borderColor= "#FF00FF";
                setTimeout(reset, 350);
                break;
    }
}

function sound(button)
    {
        switch(button){
            case "a":
                var audio = new Audio('sounds/a.mp3');
                audio.play();
                break;
            case "b":
                var audio = new Audio('sounds/b.mp3');
                audio.play();

                break; 
            case "c":
                var audio = new Audio('sounds/c.mp3');
                audio.play();

                break;
            case "d":
                var audio = new Audio('sounds/d.mp3');
                audio.play();

                break;
            case "e":
                var audio = new Audio('sounds/e.mp3');
                audio.play();

                break;
            case "f":
                var audio = new Audio('sounds/f.mp3');
                audio.play();

                break;
            default:
                console.log("Not valid!");
        }
    }

document.querySelector(".loop1").addEventListener("click", function(){
    setInterval(loop_the_loop, (timeStamps[timeStamps.length-1] - timeStamps[0])+400);
    document.querySelector(".loop1").style.color="#FF1900";
    document.querySelector(".loop1").style.boxShadow="0 0 50px 5px #FF1900";
    document.querySelector(".loop1").style.borderColor= "#FF1900";
})

function loop_the_loop(){
    console.log("Playing loop");
    var p = 0;

    function playNext() {
        if (p < music.length) {
            var audi = new Audio('sounds/' + music[p] + '.mp3');
            audi.play();
            p++;

            if(p < music.length){
                var delay= (p==0) ? 0:(timeStamps[p] - timeStamps[p - 1]);
                setTimeout(playNext, delay);
            }
        }
    }
        if( music.length > 0){playNext();}
}

document.querySelector(".loop2").addEventListener("click", function(){
        stop_loop();
        setTimeout(function(){location.reload();}, 1000);
        });


function stop_loop(){
        document.querySelector(".loop1").style.color="black";
        document.querySelector(".loop1").style.boxShadow="";
        document.querySelector(".loop1").style.borderColor= "white";
        document.querySelector(".loop2").style.color="#FF1900";
        document.querySelector(".loop2").style.boxShadow="0 0 50px 5px #FF1900";
        document.querySelector(".loop2").style.borderColor= "#FF1900";
}
