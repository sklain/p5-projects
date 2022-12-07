function setup() {

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set up ball properties
var x = 50; // Initial x position of the ball
var y = 50; // Initial y position of the ball
var dx = 2; // Initial horizontal velocity of the ball
var dy = 4; // Initial vertical velocity of the ball
var radius = 10; // Radius of the ball

// Set up triangle properties
var triangleX = 100; // Initial x position of the triangle
var triangleY = 100; // Initial y position of the triangle
var triangleSize = 50; // Size of the triangle
var triangleOpacity = 0; // Initial opacity of the triangle
var triangleFadeIncrement = 0.1; // Amount by which the triangle's opacity changes on each animation frame

function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  // Update the ball's position
  x += dx;
  y += dy;

  // Check for collisions with the walls of the canvas
  if (x + dx > canvas.width - radius || x + dx < radius) {
    dx = -dx; // Reverse the ball's horizontal direction
  }
  if (y + dy > canvas.height - radius || y + dy < radius) {
    dy = -dy; // Reverse the ball's vertical direction
  }

  // Draw the triangle
  ctx.beginPath();
  ctx.moveTo(triangleX, triangleY);
  ctx.lineTo(triangleX +
  }

  