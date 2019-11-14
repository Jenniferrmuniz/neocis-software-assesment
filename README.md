# Neocis Software Assesment

[Click here to check out the demo!](https://jenniferrmuniz.github.io/neocis-software-assessment/index.html)

-----

## Part 1

A program capable of digitizing circles.  

The user can then click to place the center of a circle, and then drag to set its radius, similar to various graphics programs.
When the user releases the mouse button, the program highlights the points that correspond to the edge of the circle, in a way such that the points could be connected to reconstruct the circle.
Two additional circles are created corresponding to the largest and smallest radius of the highlighted points.


### Solution

First I created a squares array to fill the grid with.

The point at which the user clicks down on the grid is set as the center.

The point at which the user lets go of the mouse after dragging it is saved as the end point and the createBlueCircle and createRedCircles functions are called.

CreateBlueCircle calls update canvas which updates the canvas and fills the grid again.

If there is an endpoint set when the fillGrid function is called, we call getBlueSquares to check which squares should be blue which pushes the blue squares to an array.

In this function we also set the furthest blue squares from both inside and outside the blue circle.

CreateRedCircles calls insideCircle and outsideCircle functions which uses the furthest blue squares to find the the smallest and largest radius which is then used to create red circles.

-----

## Part 2

A program that allows the user to toggle points on the grid on and off.

When the user clicks the “Generate” button, a circle is generated that best fits the highlighted points.


### Solution 

First I created a squares array to fill the grid with. The point at which the user clicks is saved as an object which passed into a getBlueSquare function.

This function finds the square in the squares array that corresponds to that point and pushes that square to a blue squares array.

The squares are in the blue squares array are colored blue when fill grid is called when updating canvas.

Once the user clicks the "generate" button the generateCircle function is called. 

The generateCircle function gets the center point of the circle by finding the average X and Y coordinates of all of the blue squares.

Then the distanced between the blue squares and the center are pushed to an array which is used to find the average distance. 

This distance is used as the radius to create the blue circle at the center point.

-----

### Created by Jennifer Muniz