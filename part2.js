

window.onload = function () {

    var canvas = document.getElementById('canvas2');
    var ctx = canvas.getContext('2d');


    fillGrid();
    function fillGrid(){
        for(let i=20; i<=400; i+=20){
            for(let j=20; j<=400; j+=20){
                ctx.fillStyle = "gray";
                ctx.fillRect(i, j, 10, 10);
            }
        }
    }










    //Updating canvas 
    function updateCanvas() {
        window.requestAnimationFrame(updateCanvas);
    }
    window.requestAnimationFrame(updateCanvas);

}




