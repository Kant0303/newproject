let canvas = document.getElementById("Canvas");
let context = canvas.getContext("2d");
// vẽ hình chữ nhật
context.fillStyle = "gold";
context.fillRect(150, 150, 150, 150);
// vẽ hình tròn
context.fillStyle ="green";
context.beginPath();
context.arc(195,130,60,Math.PI,2*Math.PI);
//context.stroke();
context.fill();

context.beginPath();
context.arc(395,130,60,Math.PI,2*Math.PI);
//context.stroke();
context.fill();
//text
context.font ="30px Arial";
context.fillText("Hello Canvas",200,300);
//image
let image = new Image();
image.onload = () => {
    context.drawImage(image,0,0);
}
Image.src ="https://images.unsplash.com/photo-1439923274069-a6f070db0c99?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29saWQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww";
