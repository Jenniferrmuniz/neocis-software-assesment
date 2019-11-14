window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    let squares = [];
    let clickedCoordinate = null;
    let blueSquares = [];


    getSquares();
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

    function checkCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
            return true;
        }
    }


    function getBlueSquare(coordinate){
        for(let i=1; i<squares.length; i++){
            if(checkCollision(coordinate, squares[i])){
                blueSquares.push(squares[i]);
                updateCanvas();
            }
        }
    }


    function getAverageX(){
        let sum = 0;
        for(let i=0; i<blueSquares.length; i++){
            sum +=blueSquares[i].x;
        }
        return (sum/blueSquares.length);
    }

    function getAverageY(){
        let sum = 0;
        for(let i=0; i<blueSquares.length; i++){
            sum +=blueSquares[i].y;
        }
        return (sum/blueSquares.length);
    }

    function getCenter(){
        return {
            x: getAverageX(),
            y: getAverageY()
        }
    }


    function getDistance(point, center){
        return Math.hypot(point.x - center.x, point.y - center.y);
    }

    function getAverageDistance(distances){
        let sum = 0;
        for(let i=0; i<distances.length; i++){
            sum += distances[i];
        }
        return (sum/distances.length);
    }




    function generateCircle(){
        let distances = [];
        let center = getCenter();
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
        generateCircle()
    }



    //Updating canvas 
    function updateCanvas() {
        ctx.clearRect(0, 0, 430, 430);
        fillGrid();
        getAverageX();


    }
}