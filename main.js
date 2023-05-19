timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function setup() {
    canvas = createCanvas(280, 280);
    background("#fff");
    canvas.mouseReleased(classifyCanvas);
}

function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}

function draw(){
    stroke("black");
    strokeWeight(13);
    if (mouseIsPressed == true) {
        line(pmouseX,  pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, resultado){
    if (!error) {
        console.log(resultado);
        drawn_sketch = document.getElementById("dibujo").innerHTML = "Tu dibujaste:" + resultado[0].label;
    }
    actualizarLienzo();
}

function actualizarLienzo() {
    background("white");
    quick_draw_data_set = ['pez', 'reloj', 'manzana', 'lapiz'];
    na = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
    Element_of_array = quick_draw_data_set[na];
    console.log(Element_of_array);
    sketch = Element_of_array;
    document.getElementById("reto").innerHTML = "Dibuja:" + sketch;

    if (drawn_sketch == sketch) {
        answer_holder = "set";
        score ++;
        document.getElementById("points").innerHTML = "Puntuacion:" + score;
    }
    tiempo();

}

function tiempo(){
    timer_counter = (time_counter ++ );
    document.getElementById("time").innerHTML = "Tiempo:" + timer_counter;
    console.log(timer_counter);
    check_time();
}

function check_time(){
    
    if (timer_counter > 400){
    timer_counter = 0;
    timer_check = completed;
    }
    if (timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
    }
}
