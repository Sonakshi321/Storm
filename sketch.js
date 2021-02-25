const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain;
function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    rain= new Rain(random(0,400),random(0,400));
    
}

function draw(){
    background("black");
    Engine.update(engine);

    rain.display();
}   

