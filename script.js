var columnDiv = '<div class="row-wrapper"></div>';
var gridDiv = '<div class="grid-square"></div>';

//creates a new grid, taking the parameter as the length per side
function createNewDivGrid(divNumber){
    $("#inner-wrapper").empty();
    for(i = 1; i <= divNumber; i++){
        $("#inner-wrapper").append(columnDiv);
        for(j = 1; j <= divNumber; j++){
            $(".row-wrapper").last().append(gridDiv);
        }
    }
}

function newGridButton(){
    var sideLength = prompt("How many squares per side would you like for the new grid?");
    createNewDivGrid(sideLength);
    hoverEvent();
}

function hoverEvent(){
    $(".grid-square").hover(function(){
        $(this).css("background-color", "#000000");
    });
}

$(document).ready(function(){
    createNewDivGrid(16);
    hoverEvent();
    $("#grid-button").on("click", newGridButton);
});