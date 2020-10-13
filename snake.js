class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.speedx=1;
        this.speedy=0;
        this.total =0;
        this.tail=[];
    }

    update(){

        if(this.total === this.tail.length){
            for (var i = 0; i<this.tail.length-1; i++){
                this.tail[i]=this.tail[i+1]
            } 
        }
        this.tail[this.total-1]= createVector(this.x,this.y);

        this.x=this.x +this.speedx*inc;
        this.y=this.y +this.speedy*inc;

        this.x = constrain(this.x,0,width-inc);
        this.y = constrain(this.y,0,height-inc);
    }

    mov(x,y){
        this.speedx=x;
        this.speedy=y;
    }

    eat(pos){
        var distance = dist(this.x,this.y,pos.x,pos.y);
        if(distance<1){
           this.total++
            return true;
        } else{
        return false;
        }
    }

    gameover(){
        for(var i = 0;i< this.tail.length;i++){
            var pos=this.tail[i];
            var dista = dist(this.x,this.y,pos.x,pos.y)

             if(dista<1){
                this.total = dull;
                this.tail = [];

                return true;
            }else{
                return false;
            }
        }
    }

    display(){
        fill("yellow");
        
        for(var i=0; i<this.total; i++){
            rect(this.tail[i].x,this.tail[i].y,20,20);
        }
        rect(this.x,this.y,20,20);

        if(this.total>=10){
            fill("blue");
            rect(this.x,this.y,20,20);
        }else  if(this.total>=20){
            fill("green");
            rect(this.x,this.y,20,20);
        }else if(this.total>=30){
            fill("black");
            rect(this.x,this.y,20,20);
        }else if(this.total>=40){
            fill("orange");
            rect(this.x,this.y,20,20);
        }else if(this.total>=50){
            fill("white");
            rect(this.x,this.y,20,20);
        }
    }
}