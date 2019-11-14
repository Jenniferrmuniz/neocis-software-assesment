window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    let squares = [];


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
                    height: 20
                }
                counter++;
            }
        }
    }

    // Fills grid with squares
    function fillGrid() {
        for (let i = 1; i < squares.length; i++) {
            ctx.fillStyle = "gray";
            ctx.fillRect(squares[i].x, squares[i].y, 10, 10);
        }
    }

    fillGrid();

    //Updating canvas 
    function updateCanvas() {
        ctx.clearRect(0, 0, 430, 430);
        fillGrid();
    }



}