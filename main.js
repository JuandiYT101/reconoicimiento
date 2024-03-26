Webcam.attach("#camara");

camara = document.getElementById("camara")

Webcam.set({
    width:350,
    height:300,
    image_forward: "png",
    png_quality: 90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id  = "selfie_image" src "'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0RRV4QyKc/model.json',modelLoaded);

function modelLoaded(){
    console.log('Modelo cargado');
}

function check(){
    img =document.getElementById('selfie_image');
    classifier.classify(img,gotResult);
}

function gotResult(error, results ){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}