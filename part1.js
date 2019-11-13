
window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let center = null;
    let movingMouse;
    let endpt = null;
    let radius;




    function fillGrid() {
        for (let i = 20; i <= 400; i += 20) {
            for (let j = 20; j <= 400; j += 20) {

                if(endpt){
                    if(getBlueSquares(i,j)){
                        ctx.fillStyle = "blue";
                    }
                    else if(getRedSquares(i,j)){
                        ctx.fillStyle = "red";
                    }
                    else{
                        ctx.fillStyle = "gray";
                    }
                }
                else{
                    ctx.fillStyle = "gray";
                }
                ctx.fillRect(i, j, 10, 10);
            }
        }
    }




    function createCircle() {
        updateCanvas();
        if (endpt) {
            radius = Math.hypot(center.x - endpt.x, center.y - endpt.y);
        }
        else {
            radius = Math.hypot(center.x - movingMouse.x, center.y - movingMouse.y);
        }

        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        return;
    }

    function getPoint(angle){
        return [center.x+Math.cos(angle)*radius,center.y+Math.sin(angle)*radius];
    }


    function getBlueSquares(xSquare, ySquare) {

        let point;
        for(let k=0; k<360; k++){
            point = getPoint(k);
            if(xSquare <= point[0]+5 && xSquare >= point[0]-5){
                if(ySquare <= point[1]+10 && ySquare >= point[1]-10){
                    return true;
                }
            }
            if(ySquare <= point[1]+5 && ySquare >= point[1]-5){
                if(xSquare <= point[0]+10 && xSquare >= point[0]-10){
                    return true;
                }
            }
        }
        return false;
    }


    function getRedSquares(){

    }






    fillGrid();

    canvas.onmousedown = function (e) {
        updateCanvas();
        endpt = null;
        center = {
            x: e.offsetX,
            y: e.offsetY
        }

        this.onmousemove = function (e) {
            movingMouse = {
                x: e.offsetX,
                y: e.offsetY
            }
            createCircle()
        }

    }



    canvas.onmouseup = function (e) {
        endpt = {
            x: e.offsetX,
            y: e.offsetY
        }
        createCircle();
        getBlueSquares();
    }
















    //Updating canvas 
    function updateCanvas() {
        ctx.clearRect(0, 0, 430, 430);
        fillGrid();
    }
}




