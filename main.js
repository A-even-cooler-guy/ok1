function preload(){
    classifier=ml5.imageClassifier("DoodleNet")  
}
function setup(){
    canvas=createCanvas(300,400)
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
    
    }
    
    function clearCanvas(){
        background("white");
    }
    
    
    
    function draw(){
       strokeWeight(12);
       stroke("black");   
       if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);

       }
    }
    
    function classifyCanvas(){
    classifier.classify(canvas,gotResult);
    }
    
    function gotResult(error,results){
    if(error){
        console.log(error);
    }
     console.log(results);
     document.getElementById("yourSketch").innerHTML= "You are drawing "+ results[0].label;
     document.getElementById("confidence").innerHTML="I am " + Math.round(results[0].confidence*100) +"%" +" sure";
     utterThis= new SpeechSynthesisUtterance(results[0].label);
     synth.speak(utterThis);
    }
    