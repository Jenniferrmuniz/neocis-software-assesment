
window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let center = null;
    let endpt = null;



    
    function fillGrid() {
        for (let i = 20; i <= 400; i += 20) {
            for (let j = 20; j <= 400; j += 20) {
                ctx.fillStyle = "gray";
                ctx.fillRect(i, j, 10, 10);
            }
        }
    }





    function createCircle(){
        console.log('Center: ', center);
        console.log('Endpt: ', endpt);
        let radius = Math.hypot(center.x-endpt.x, center.y-endpt.y);
        console.log('Radius: ', radius);
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        return;
    }






    fillGrid();


    canvas.onmousedown = function (e) {
        center = {
            x: e.offsetX,
            y: e.offsetY
        }
    }


    canvas.onmouseup = function (e) {
        endpt = {
            x: e.offsetX,
            y: e.offsetY
        }
        createCircle();
    }
















    //Updating canvas 
    function updateCanvas() {
        window.requestAnimationFrame(updateCanvas);
    }
    window.requestAnimationFrame(updateCanvas);

}




