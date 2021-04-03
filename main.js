var canvas = new fabric.Canvas("my_canvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_image = "";
var block_image = "";

function player_update(){
    fabric.Image.fromURL("player.jpg", function(Img){
        player_image = Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
        top:player_y, left:player_x});
        canvas.add(player_image);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL( get_image, function(Img){
    block_image = Img;
    block_image.scaleToWidth(block_image_width);
    block_image.scaleToHeight(block_image_height);
    block_image.set({
    top:player_y, left:player_x});
    canvas.add(block_image);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed = '38'){
        up();
        console.log("up"); 
    }
    if(keyPressed = '40'){
        down();
        console.log("down"); 
    }
    if(keyPressed = '37'){
        left();
        console.log("left"); 
    }
    if(keyPressed = '39'){
        right();
        console.log("right"); 
    }
    if(keyPressed = '70'){
        new_image("ironman_face.png");
        console.log("f"); 
    }
    if(keyPressed = '66'){
        new_image("spiderman_body.png");
        console.log("b"); 
    }
    if(keyPressed = '76'){
        new_image("hulk_legs.png");
        console.log("l"); 
    }
    if(keyPressed = '82'){
        new_image("thor_right_hand.png");
        console.log("r"); 
    }
    if(keyPressed = '72'){
        new_image("captain_america_left_hand.png");
        console.log("h"); 
    }
}