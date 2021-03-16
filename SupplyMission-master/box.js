class box{

constructor(x,y,width,height){
options = {

restituion = 0,
isStatic=true,

}
this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);

}
display(){

rectMode(CENTER)
fill("red")
rect(x,y,this.width,this.height);

}

}