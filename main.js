// https://teachablemachine.withgoogle.com/models/loQMQXhqu/

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 150
});

Webcam.attach("#camera");

function take_snapshot(data_uri){
    Webcam.snap((data_uri) => {
        document.getElementById("result").innerHTML = '<img id=\'captured_image\' src='+data_uri+'>';
    })
}

console.info('ml5 version: '+ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/loQMQXhqu/model.json', ()=>{
    console.info("Model Loaded")
});

function speak(prediction_1, prediction_2){
    var synth = window.speechSynthesis;
    synth.speak(new SpeechSynthesisUtterance("The first prediction was "+prediction_1+"\nThe second prediction was "+prediction_2));
};

function check(){
    speak("bunny ear", "thumbs up");
}