
window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');






    // ctx.fillRect(20, 20, 20, 20);
    // ctx.fillRect(60, 20, 20, 20);
    // ctx.fillRect(100, 20, 20, 20);
    // ctx.fillRect(140, 20, 20, 20);
    // ctx.fillRect(180, 20, 20, 20);
    // ctx.fillRect(220, 20, 20, 20);
    // ctx.fillRect(260, 20, 20, 20);
    // ctx.fillRect(300, 20, 20, 20);
    // ctx.fillRect(340, 20, 20, 20);
    // ctx.fillRect(380, 20, 20, 20);
    // ctx.fillRect(420, 20, 20, 20);
    // ctx.fillRect(460, 20, 20, 20);
    // ctx.fillRect(500, 20, 20, 20);
    // ctx.fillRect(540, 20, 20, 20);
    // ctx.fillRect(580, 20, 20, 20);
    // ctx.fillRect(620, 20, 20, 20);
    // ctx.fillRect(660, 20, 20, 20);
    // ctx.fillRect(700, 20, 20, 20);
    // ctx.fillRect(740, 20, 20, 20);
    // ctx.fillRect(780, 20, 20, 20);
    // ctx.fillRect(820, 20, 20, 20);
    // ctx.fillRect(860, 20, 20, 20);

    fillGrid();

    function fillGrid(){
        for(let i=20; i<=400; i+=20){
            for(let j=20; j<=400; j+=20){
                ctx.fillStyle = "gray";
                ctx.fillRect(i, j, 10, 10);
            }
        }
    }








    // ctx.fillRect(20, 60, 20, 20);
    // ctx.fillRect(60, 60, 20, 20);
    // ctx.fillRect(100, 60, 20, 20);
    // ctx.fillRect(140, 60, 20, 20);
    // ctx.fillRect(180, 60, 20, 20);
    // ctx.fillRect(220, 60, 20, 20);
    // ctx.fillRect(260, 60, 20, 20);
    // ctx.fillRect(300, 60, 20, 20);
    // ctx.fillRect(340, 60, 20, 20);
    // ctx.fillRect(380, 60, 20, 20);
    // ctx.fillRect(420, 60, 20, 20);
    // ctx.fillRect(460, 60, 20, 20);

    // ctx.fillRect(20, 100, 20, 20);
    // ctx.fillRect(60, 100, 20, 20);
    // ctx.fillRect(100, 100, 20, 20);
    // ctx.fillRect(140, 100, 20, 20);
    // ctx.fillRect(180, 100, 20, 20);
    // ctx.fillRect(220, 100, 20, 20);
    // ctx.fillRect(260, 100, 20, 20);
    // ctx.fillRect(300, 100, 20, 20);
    // ctx.fillRect(340, 100, 20, 20);
    // ctx.fillRect(380, 100, 20, 20);
    // ctx.fillRect(420, 100, 20, 20);
    // ctx.fillRect(460, 100, 20, 20);

    // ctx.fillRect(20, 140, 20, 20);
    // ctx.fillRect(60, 140, 20, 20);
    // ctx.fillRect(100, 140, 20, 20);
    // ctx.fillRect(140, 140, 20, 20);
    // ctx.fillRect(180, 140, 20, 20);
    // ctx.fillRect(220, 140, 20, 20);
    // ctx.fillRect(260, 140, 20, 20);
    // ctx.fillRect(300, 140, 20, 20);
    // ctx.fillRect(340, 140, 20, 20);
    // ctx.fillRect(380, 140, 20, 20);
    // ctx.fillRect(420, 140, 20, 20);
    // ctx.fillRect(460, 140, 20, 20);

    // ctx.fillRect(20, 180, 20, 20);
    // ctx.fillRect(60, 180, 20, 20);
    // ctx.fillRect(100, 180, 20, 20);
    // ctx.fillRect(140, 180, 20, 20);
    // ctx.fillRect(180, 180, 20, 20);
    // ctx.fillRect(220, 180, 20, 20);
    // ctx.fillRect(260, 180, 20, 20);
    // ctx.fillRect(300, 180, 20, 20);
    // ctx.fillRect(340, 180, 20, 20);
    // ctx.fillRect(380, 180, 20, 20);
    // ctx.fillRect(420, 180, 20, 20);
    // ctx.fillRect(460, 180, 20, 20);

    // ctx.fillRect(20, 220, 20, 20);
    // ctx.fillRect(60, 220, 20, 20);
    // ctx.fillRect(100, 220, 20, 20);
    // ctx.fillRect(140, 220, 20, 20);
    // ctx.fillRect(180, 220, 20, 20);
    // ctx.fillRect(220, 220, 20, 20);
    // ctx.fillRect(260, 220, 20, 20);
    // ctx.fillRect(300, 220, 20, 20);
    // ctx.fillRect(340, 220, 20, 20);
    // ctx.fillRect(380, 220, 20, 20);
    // ctx.fillRect(420, 220, 20, 20);
    // ctx.fillRect(460, 220, 20, 20);

    // ctx.fillRect(20, 260, 20, 20);
    // ctx.fillRect(60, 260, 20, 20);
    // ctx.fillRect(100, 260, 20, 20);
    // ctx.fillRect(140, 260, 20, 20);
    // ctx.fillRect(180, 260, 20, 20);
    // ctx.fillRect(220, 260, 20, 20);
    // ctx.fillRect(260, 260, 20, 20);
    // ctx.fillRect(300, 260, 20, 20);
    // ctx.fillRect(340, 260, 20, 20);
    // ctx.fillRect(380, 260, 20, 20);
    // ctx.fillRect(420, 260, 20, 20);
    // ctx.fillRect(460, 260, 20, 20);

    // ctx.fillRect(20, 300, 20, 20);
    // ctx.fillRect(60, 300, 20, 20);
    // ctx.fillRect(100, 300, 20, 20);
    // ctx.fillRect(140, 300, 20, 20);
    // ctx.fillRect(180, 300, 20, 20);
    // ctx.fillRect(220, 300, 20, 20);
    // ctx.fillRect(260, 300, 20, 20);
    // ctx.fillRect(300, 300, 20, 20);
    // ctx.fillRect(340, 300, 20, 20);
    // ctx.fillRect(380, 300, 20, 20);
    // ctx.fillRect(420, 300, 20, 20);
    // ctx.fillRect(460, 300, 20, 20);

    // ctx.fillRect(20, 340, 20, 20);
    // ctx.fillRect(60, 340, 20, 20);
    // ctx.fillRect(100, 340, 20, 20);
    // ctx.fillRect(140, 340, 20, 20);
    // ctx.fillRect(180, 340, 20, 20);
    // ctx.fillRect(220, 340, 20, 20);
    // ctx.fillRect(260, 340, 20, 20);
    // ctx.fillRect(300, 340, 20, 20);
    // ctx.fillRect(340, 340, 20, 20);
    // ctx.fillRect(380, 340, 20, 20);
    // ctx.fillRect(420, 340, 20, 20);
    // ctx.fillRect(460, 340, 20, 20);

    // ctx.fillRect(20, 380, 20, 20);
    // ctx.fillRect(60, 380, 20, 20);
    // ctx.fillRect(100, 380, 20, 20);
    // ctx.fillRect(140, 380, 20, 20);
    // ctx.fillRect(180, 380, 20, 20);
    // ctx.fillRect(220, 380, 20, 20);
    // ctx.fillRect(260, 380, 20, 20);
    // ctx.fillRect(300, 380, 20, 20);
    // ctx.fillRect(340, 380, 20, 20);
    // ctx.fillRect(380, 380, 20, 20);
    // ctx.fillRect(420, 380, 20, 20);
    // ctx.fillRect(460, 380, 20, 20);

    // ctx.fillRect(20, 420, 20, 20);
    // ctx.fillRect(60, 420, 20, 20);
    // ctx.fillRect(100, 420, 20, 20);
    // ctx.fillRect(140, 420, 20, 20);
    // ctx.fillRect(180, 420, 20, 20);
    // ctx.fillRect(220, 420, 20, 20);
    // ctx.fillRect(260, 420, 20, 20);
    // ctx.fillRect(300, 420, 20, 20);
    // ctx.fillRect(340, 420, 20, 20);
    // ctx.fillRect(380, 420, 20, 20);
    // ctx.fillRect(420, 420, 20, 20);
    // ctx.fillRect(460, 420, 20, 20);

    // ctx.fillRect(20, 460, 20, 20);
    // ctx.fillRect(60, 460, 20, 20);
    // ctx.fillRect(100, 460, 20, 20);
    // ctx.fillRect(140, 460, 20, 20);
    // ctx.fillRect(180, 460, 20, 20);
    // ctx.fillRect(220, 460, 20, 20);
    // ctx.fillRect(260, 460, 20, 20);
    // ctx.fillRect(300, 460, 20, 20);
    // ctx.fillRect(340, 460, 20, 20);
    // ctx.fillRect(380, 460, 20, 20);
    // ctx.fillRect(420, 460, 20, 20);
    // ctx.fillRect(460, 460, 20, 20);












    //Updating canvas 
    function updateCanvas() {
        window.requestAnimationFrame(updateCanvas);
    }
    window.requestAnimationFrame(updateCanvas);



}




