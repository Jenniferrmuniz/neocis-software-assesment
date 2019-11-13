
window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let center = null;
    let movingMouse;
    let endpt = null;
    let radius;
    let furthestOutsideBlue = null;
    let furthestInsideBlue = null;
    let smallRedRadius = null;
    let largeRedRadius = null;


    // Fills grid with squares
    function fillGrid() {
        for (let i = 20; i <= 400; i += 20) {
            for (let j = 20; j <= 400; j += 20) {

                if(endpt){
                    if(getBlueSquares(i,j)){
                        ctx.fillStyle = "blue";
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
        if(endpt){
            getRedCircles();
        }
    }




    // Creates blue circle
    function createBlueCircle() {
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




    // Gets the coordinate on circle
    function getPoint(angle){
        return [center.x+(Math.cos(angle)*radius),center.y+(Math.sin(angle)*radius)];
    }


    // Distance between two coordinates
    function getDistance(x1, y1, x2, y2){
        return Math.hypot(x1 - x2, y1 - y2);
    }


    // Checks if coordinate is inside the circle
    function insideCircle(x, y){
        let formula = ((x-center.x)*(x-center.x))+((y-center.y)*(y-center.y));
        if(Math.sqrt(formula) < radius){
            return true;
        }
        return false;
    }



    // Finds the furthest blue square outside of the circle
    function findFurthestOutsideBlue(x,y, point){
        let distance = getDistance(x, y, point[0], point[1]);
        if(furthestOutsideBlue === null || distance > furthestOutsideBlue.distance){
            furthestOutsideBlue = {
                x: x,
                y: y,
                distance: distance,
                point: point
            }
        }
    }


    // Finds the furthest blue square inside the circle 
    function findFurthestInsideBlue(x, y, point){
        let distance = getDistance(x, y, point[0], point[1]);
        if(furthestInsideBlue === null || distance > furthestInsideBlue.distance){
            furthestInsideBlue = {
                x: x,
                y: y,
                distance: distance,
                point: point
            }
        }
    }



    // Checks if square is close enough to the circle to be colored blue
    function getBlueSquares(xSquare, ySquare) {

        let point;

        for(let k=0; k<360; k++){
            point = getPoint(k);
            if(xSquare <= point[0]+5 && xSquare >= point[0]-5){
                if(ySquare <= point[1]+10 && ySquare >= point[1]-10){

                    if(insideCircle(xSquare, ySquare)){
                        findFurthestInsideBlue(xSquare,ySquare, point);
                    }
                    else {
                        findFurthestOutsideBlue(xSquare, ySquare, point);
                    }
                    return true;
                }
            }
            if(ySquare <= point[1]+5 && ySquare >= point[1]-5){
                if(xSquare <= point[0]+10 && xSquare >= point[0]-10){
                    if(insideCircle(xSquare, ySquare)){
                        findFurthestInsideBlue(xSquare,ySquare, point);
                    }
                    else {
                        findFurthestOutsideBlue(xSquare, ySquare, point);
                    }
                    return true;
                }
            }
        }
        return false;
    }




    // Creates red circles based on furthest blue squares from circle
    function getRedCircles(){
        if(furthestOutsideBlue.point[0]<furthestOutsideBlue.x){

            if(furthestOutsideBlue.point[1]<furthestOutsideBlue.y){

                // BOTTOM RIGHT
                largeRedRadius = getDistance(center.x, center.y, furthestOutsideBlue.x+21, furthestOutsideBlue.y+21);
            }
            else if(furthestOutsideBlue.point[1]>furthestOutsideBlue.y){
                // TOP RIGHT
                largeRedRadius = getDistance(center.x, center.y, furthestOutsideBlue.x+21, furthestOutsideBlue.y-1);
            }
            else{
                // RIGHT
                largeRedRadius = getDistance(center.x, center.y, furthestOutsideBlue.x+21, furthestOutsideBlue.y);
            }
        }
        else if(furthestOutsideBlue.point[0]>furthestOutsideBlue.x){

            // BOTTOM LEFT
            if(furthestOutsideBlue.point[1]<furthestOutsideBlue.y){
                largeRedRadius = getDistance(center.x, center.y, furthestOutsideBlue.x-1, furthestOutsideBlue.y+21);
            }

            // TOP LEFT
            else if(furthestOutsideBlue.point[1]>furthestOutsideBlue.y){
                largeRedRadius = getDistance(center.x, center.y, furthestOutsideBlue.x-1, furthestOutsideBlue.y-1);
            }
            // LEFT
            else {
                largeRedRadius = getDistance(center.x, center.y, furthestOutsideBlue.x-1, furthestOutsideBlue.y);
            }
        }
        else {

            // BOTTOM
            if(furthestOutsideBlue.point[1]<furthestOutsideBlue.y){
                largeRedRadius = getDistance(center.x, center.y, furthestOutsideBlue.x, furthestOutsideBlue.y+21);
            }

            // TOP
            else if(furthestOutsideBlue.point[1]>furthestOutsideBlue.y){
                largeRedRadius = getDistance(center.x, center.y, furthestOutsideBlue.x, furthestOutsideBlue.y-21);
            }

            // ON CIRCLE
            else {
                largeRedRadius = getDistance(center.x, center.y, furthestOutsideBlue.x, furthestOutsideBlue.y);
            }
        }

        console.log('large red radius: ', largeRedRadius);
        console.log('radius: ', radius);
    

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(center.x, center.y, largeRedRadius, 0, 2 * Math.PI);
        ctx.stroke();
        return;
    }















    fillGrid();

    // When mouse is originally clicked
    canvas.onmousedown = function (e) {
        updateCanvas();
        endpt = null;
        center = {
            x: e.offsetX,
            y: e.offsetY
        }

        // When mouse is dragged
        this.onmousemove = function (e) {
            movingMouse = {
                x: e.offsetX,
                y: e.offsetY
            }
            createBlueCircle()
        }

    }


    // When click is let go
    canvas.onmouseup = function (e) {
        endpt = {
            x: e.offsetX,
            y: e.offsetY
        }
        createBlueCircle();
    }



    //Updating canvas 
    function updateCanvas() {
        ctx.clearRect(0, 0, 430, 430);
        fillGrid();
    }
}




