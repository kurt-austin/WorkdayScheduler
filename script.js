var hoursOfDay = $(".container");
var counter = 9
var mornAfter = "AM";
var hourText;
var newHourText;


for (var i = 0; i<9; i++){  
    if(counter>11){
        mornAfter = "PM"
    };

    if(counter > 12){
        counter = 1
    };
   
    hourText = counter.toString();

     if (counter > 0 & counter < 10){
         newHourText = hourText + mornAfter + "  "
     }

     if (counter >= 10){
         newHourText = hourText + mornAfter + ""
     }

    var hourEntries = $("<div>");
    hourEntries.text(newHourText).addClass("row hour");   
    var textArea = $("<textarea>");
    hourEntries.append(textArea);
    var saveBtn = $("<button>");
    var iTag = $("<i>");
    iTag.addClass("far fa-save fa-2x");
    saveBtn.addClass("saveBtn time-block hover");
    saveBtn.append(iTag)
    hourEntries.append(saveBtn);
    hoursOfDay.append(hourEntries);
    counter ++;

}