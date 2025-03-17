function play()
{
    mySound = new sound("squirrel-101soundboards.mp3");//This says what the song is
    mySound.play();//This says play the song
    document.getElementById("startButton").disabled = true;//This turns OFF the start button
    document.getElementById("stopButton").disabled = false;//This turns ON the start button
}
function stop()
{
    window.location.reload();
    document.getElementById("stopButton").disabled = true;//this says the stop button will be disabled when you reload it
}

function sound(src)
{// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    }
}