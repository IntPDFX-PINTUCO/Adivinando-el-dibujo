function setup(){
    canvas=createCanvas(280,280)
    //canvas.center()
    canvas.parent("canvas")
    background("white")
    canvas.mouseReleased(analizar)
}
function draw(){
    strokeWeight(13)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function preload(){
dibujo=ml5.imageClassifier("DoodleNet")
}
function analizar(){
    dibujo.classify(canvas, respuesta)
}
function respuesta(error, resultados){
    if(error){
        console.log(error);
    }
    else{
        document.getElementById("dibujo").innerHTML="Tu dibujo puede ser: <br>"
        console.log(resultados);
        document.getElementById(("dibujo")).innerHTML+="<span id='lista' style='color: #F9D5AD !important;'>"
        for (let index = 0; index < 3;index++) {
            const element = resultados[index];
            document.getElementById(("dibujo")).innerHTML+=element.label+" "+Math.round(element.confidence*10000)/100+"%<br>"
        }
        document.getElementById(("dibujo")).innerHTML+="</span>"
    }
}
function borrar (){
    background("white")
}
