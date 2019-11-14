window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let squares = [];
    let clickedCoordinate = null;
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
                    height: 20,
                    centerOfSquare: {
                        x: i+10,
                        y: j+10
                    }
                }
                counter++;
            }
        }
    }

    // Fills grid with squares
    function fillGrid() {
        for (let i = 1; i < squares.length; i++) {

            if(blueSquares.includes(squares[i])){
                ctx.fillStyle = "blue";
            }
            else{
                ctx.fillStyle = "gray";
            }
            ctx.fillRect(squares[i].x, squares[i].y, 10, 10);
        }
    }

    // Checks if point selected is on square
    function checkCollision(point, square) {
        if (point.x < square.x + square.width &&
            point.x + point.width > square.x &&
            point.y < square.y + square.height &&
            point.y + point.height > square.y) {
            return true;
        }
    }

    // Finds squares selected and saves in blueSquares array
    function getBlueSquare(coordinate){
        for(let i=1; i<squares.length; i++){
            if(checkCollision(coordinate, squares[i])){
                blueSquares.push(squares[i]);
                updateCanvas();
            }
        }
    }

    // Gets the average X coordinates of blue squares
    function getAverageX(){
        let sum = 0;
        for(let i=0; i<blueSquares.length; i++){
            sum +=blueSquares[i].x;
        }
        return (sum/blueSquares.length);
    }

    // Gets the average Y coordinates of blue squares
    function getAverageY(){
        let sum = 0;
        for(let i=0; i<blueSquares.length; i++){
            sum +=blueSquares[i].y;
        }
        return (sum/blueSquares.length);
    }

    // Returns the average center coordinate of blue squares
    function getCenter(){
        return {
            x: getAverageX(),
            y: getAverageY()
        }
    }


    // Returns the distance between two points
    function getDistance(point, center){
        return Math.hypot(point.x - center.x, point.y - center.y);
    }


    // Average distance between the center and the blue squares
    function getAverageDistance(distances){
        let sum = 0;
        for(let i=0; i<distances.length; i++){
            sum += distances[i];
        }
        return (sum/distances.length);
    }



    // Generates blue circle based on blue squares
    function generateCircle(){
        let center = getCenter();
        let distances = [];
        for(let i=0; i<blueSquares.length; i++){
            distances.push(getDistance(blueSquares[i], center));
        }
        let radius = getAverageDistance(distances);

        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        return;
    }


    getSquares();
    fillGrid();

    canvas.onmousedown = function(e){
        updateCanvas();
        clickedCoordinate = {
            x: e.offsetX,
            y: e.offsetY,
            width: 1,
            height: 1
        }
        getBlueSquare(clickedCoordinate);
    }


    document.getElementById("generate").onclick = function () {
        generateCircle();
    }



    //Updating canvas 
    function updateCanvas() {
        ctx.clearRect(0, 0, 430, 430);
        fillGrid();
        getAverageX();
    }
}