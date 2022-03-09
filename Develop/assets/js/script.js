

//display current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//color textarea based on time
for(let i = 9; i < 18; i++) {
    console.log(moment().hour())
    if(moment().hour() === i){
        $("#" + i).addClass("present");
    }
    else if(moment().hour() < i){
        $("#" + i).addClass("future");

    }
    else if(moment().hour() > i){
        $("#" + i).addClass("past");
    }
}