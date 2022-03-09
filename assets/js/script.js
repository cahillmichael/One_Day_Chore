//display current date, assign by id
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//color textarea based on time
//iterate from 9 to 17 (hours in work day)
//compare current time to each hour and assign appropriate style
for(let i = 9; i < 18; i++) {
    if(moment().hour() === i){
        $("#" + i).addClass("present");
    }
    else if(moment().hour() < i){
        $("#" + i).addClass("future");
    }
    else if(moment().hour() > i){
        $("#" + i).addClass("past");
    }
};

//save text
//on save button click
$(".saveBtn").on("click", function(){

    // identify the id of the textarea in the same row
    var rowId = $(this).closest(".row").find("textarea").attr("id");

    // grab text from textarea with that id
    var taskText = $("#" + rowId).val();

    //write text and id to localStorage
    localStorage.setItem(rowId, taskText);
});

//load text
//iterate from 9 to 17
//assign localStorage data with corresponding key to textarea with that id
for(let i = 9; i < 18; i++) {
    $("#" + i).val(localStorage.getItem(i));
};