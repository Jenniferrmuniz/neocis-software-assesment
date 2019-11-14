
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
    let blueSquares = [];

 

    // Creates squares array
    function getSquares() {
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

    // Checks if square is inside the circle
    function isInsideCircle(index) {
        let centerOfSquareX = squares[index].x + 10;
        let centerOfSquareY = squares[index].y + 10;
        let formula = ((centerOfSquareX - center.x) * (centerOfSquareX - center.x)) + ((centerOfSquareY - center.y) * (centerOfSquareY - center.y));
        if (Math.sqrt(formula) < radius) {
            return true;
        }
        return false;
    }


    // Find the blue squares with the furthest distance inside and outside of circle
    function getFurthest(index, point) {

        let newDistance = getDistance(point.x, point.y, squares[index].x, squares[index].y);
        if (isInsideCircle(index)) {
            if (furthestInsideBlue === null || furthestInsideBlue.distance < newDistance) {
                furthestInsideBlue = {
                    theSquare: squares[index],
                    circlePoint: point,
                    distance: newDistance
                }
            }
            else {
                if (furthestOutsideBlue === null || furthestOutsideBlue.distance < newDistance) {
                    furthestOutsideBlue = {
                        theSquare: squares[index],
                        circlePoint: point,
                        distance: newDistance
                    }
                }
            }
        }
    }




    // Fills grid with squares
    function fillGrid() {
        for (let i = 1; i < squares.length; i++) {
            if (endpt) {
                if (getBlueSquares(i)) {
                    ctx.fillStyle = "blue";
                }
                else {
                    ctx.fillStyle = "gray";
                }
            }
            else {
                ctx.fillStyle = "gray";
            }
            ctx.fillRect(squares[i].x, squares[i].y, 10, 10);
        }
        if (endpt) {
            createRedCircles();
        }
    }




    // Creates blue circle
    function createBlueCircle() {
        updateCanvas();
        if (endpt) {
            radius = getDistance(center.x, center.y, endpt.x, endpt.y);
        }
        else {
            radius = getDistance(center.x, center.y, movingMouse.x, movingMouse.y);
        }

        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        return;
    }



    // Gets the coordinate of point on circle
    function getPoint(angle, r) {
        return {
            x: center.x + (Math.cos(angle) * r),
            y: center.y + (Math.sin(angle) * r),
            width: 1,
            height: 1
        }
    }



    // Distance between two coordinates
    function getDistance(x1, y1, x2, y2) {
        return Math.hypot(x1 - x2, y1 - y2);
    }




    // Checks if square is close enough to the circle to be colored blue
    function getBlueSquares(index) {
        let point;
        for (let k = 0; k < 360; k += 5) {
            point = getPoint(k * (Math.PI / 180), radius);
            if (checkCollision(point, squares[index])) {
                getFurthest(index, point);
                if (!blueSquares.includes(squares[index])) {
                    blueSquares.push(squares[index]);
                }
                return true;
            }
        }
        return false;
    }


    // Creates red circles
    function createRedCircles() {

        largeRedRadius = radius;
        smallRedRadius = radius;
        let r1 = outsideCircle(largeRedRadius);
        let r2 = insideCircle(smallRedRadius);

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(center.x, center.y, r1, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(center.x, center.y, r2, 0, 2 * Math.PI);
        ctx.stroke();

        return;
    }

    // Inner red circle
    function insideCircle(r) {
        for (let i = 0; i < blueSquares.length; i++) {
            for (let k = 0; k < 360; k += 5) {
                point = getPoint(k * (Math.PI / 180), r);
                if (checkCollision(point, blueSquares[i])) {
                    smallRedRadius -= 1;
                    return insideCircle(smallRedRadius);
                }
            }
        }
        return smallRedRadius;
    }

    // Outter red circle
    function outsideCircle(r) {
        for (let i = 0; i < blueSquares.length; i++) {
            for (let k = 0; k < 360; k += 5) {
                point = getPoint(k * (Math.PI / 180), r);

                if (checkCollision(point, blueSquares[i])) {
                    largeRedRadius+=1;
                    return outsideCircle(largeRedRadius);
                }
            }
        }
        return largeRedRadius;
    }



    // Checks if point collides with square
    function checkCollision(point, square) {
        if (point.x < square.x + square.width &&
            point.x + point.width > square.x &&
            point.y < square.y + square.height &&
            point.y + point.height > square.y) {
            return true;
        }
    }




    getSquares();
    fillGrid();

    // When mouse is originally clicked
    canvas.onmousedown = function (e) {
        updateCanvas();
        blueSquares = [];
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




