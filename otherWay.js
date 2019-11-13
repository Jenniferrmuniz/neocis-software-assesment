
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
    let squares = [];

    getSquares();

    function getSquares(){
        let counter = 1;
        for (let i = 20; i <= 400; i += 20) {
            for (let j = 20; j <= 400; j += 20) {
                squares[counter] = {
                    x: i,
                    y: j,
                    width: 20,
                    height: 20
                }
                counter++;
            }
        }
    }

    // Fills grid with squares
    function fillGrid() {


        for (let i = 20; i <= 400; i += 20) {
            for (let j = 20; j <= 400; j += 20) {
                if (endpt) {
                    if (getBlueSquares(i, j)) {

                        ctx.fillStyle = "blue";
                    }
                    else {
                        ctx.fillStyle = "gray";
                    }
                }
                else {
                    ctx.fillStyle = "gray";
                }
                ctx.fillRect(i, j, 10, 10);
            }
        }
        if (endpt) {
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
    function getPoint(angle) {
        return {
            x: center.x + (Math.cos(angle) * radius),
            y: center.y + (Math.sin(angle) * radius),
            width: 10,
            height: 10
        }
    }


    // Distance between two coordinates
    function getDistance(x1, y1, x2, y2) {
        return Math.hypot(x1 - x2, y1 - y2);
    }










    // Checks if square is close enough to the circle to be colored blue
    function getBlueSquares(xSquare, ySquare) {

        let point;

        for (let k = 0; k < 360; k++) {
            point = getPoint(k);

            if (checkAllCollisions(point)) {
                console.log('here');
                return true;
            }

            // point.x += 5;
            // if (checkAllCollisions(point)) {
            //     console.log('here');
            //     return true;
            // }

            // point.y += 5;
            // if (checkAllCollisions(point)) {
            //     console.log('here');
            //     return true;
            // }

            // point.x - 5
            // if (checkAllCollisions(point)) {
            //     console.log('here');
            //     return true;
            // }

        }
        return false;
    }




    // Creates red circles based on furthest blue squares from circle
    function getRedCircles() {
        // ctx.beginPath();
        // ctx.strokeStyle = "red";
        // ctx.arc(center.x, center.y, largeRedRadius, 0, 2 * Math.PI);
        // ctx.stroke();
        return;
    }







    function checkCollision(rect1, rect2) {

        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
            return true;
        }
    }








    //Check each block in maze for collision
    function checkAllCollisions(p) {
        for (let i = 0; i < squares.length; i++) {
            if (checkCollision(p, squares[i+1])) {
                return true;
            }
        }
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




