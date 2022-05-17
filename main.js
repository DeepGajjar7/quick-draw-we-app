function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
}

function setup(){
    canvas= createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas)
    synth=window.speechSynthesis
}

function draw(){
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
        stroke(0)
        strokeWeight(13)
    }
}

function clearcanvas(){
    background("white");
}

function classifycanvas(){
    classifier.classify(canvas,gotresult)
}

function gotresult(error,results){
    if (error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("label").innerHTML="label: "+results[0].label;
        document.getElementById("confidence").innerHTML="confidence: "+Math.round(results[0].confidence*100)+"%";
        utterthis=new SpeechSynthesisUtterance(results[0].label)
        synth.speak(utterthis)
    }
}















