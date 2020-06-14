 $(document).ready(function() {

 
// initializies and sets variables //

    var hoursOfDay = $(".container");
    var counter = 9;
    var presentCounter = 9;
    var idxCounter = 0;
    var mornAfter = "AM";
    var hourText;
    var newHourText;
    var currentHour = moment().hour();
    var currentDay = moment().format("MMMM Do YYYY");
    var jumbo = $(".jumbotron");
    var header = $("<h3>");
    var arrStorage =[];
    var kurt ='';
    
    var storedAppointments = JSON.parse(localStorage.getItem("appointments"));

    // var storedAppointments = JSON.parse(localStorage.getItem("appointment"));
 // appends current date //

    header.text(currentDay);
    jumbo.append(header);

// main processing to render the calendar and shade where appropriate //

// determines AM or PM and after 12PM, changes to 1PM //

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

    // adding elements and buttons and inputs //    
        
        var hourEntries = $("<div>");
      
        hourEntries.text(newHourText).addClass("row hour");
        
        var textArea = $("<textarea>");
        textArea.attr("data-index",i);
        textArea.addClass("entries");
        
         if (storedAppointments !==null){
             for(var j=0; j<storedAppointments.length; j++){
                 console.log(storedAppointments[j].idx);
                 console.log(storedAppointments[j].entry)
                if(storedAppointments[j].idx === i){
                  textArea.text(storedAppointments[j].entry);
                     
                 }
             }
         }
    
        hourEntries.append(textArea);
        var saveBtn = $("<button>");
        var iTag = $("<i>");
        iTag.addClass("far fa-save fa-2x");
        saveBtn.addClass("saveBtn time-block hover");
        saveBtn.append(iTag)
        hourEntries.append(saveBtn);
        hoursOfDay.append(hourEntries);

    // shading depending upon the hour //
    
        if (presentCounter === currentHour)
        {textArea.addClass("present")
        };

        if (presentCounter < currentHour){
            textArea.addClass("past")
        };

        if (presentCounter > currentHour){
            textArea.addClass("future")
        };

        counter ++;
        presentCounter ++;
        idxCounter++;
        
    }

    // takes user (appointment) inputs and save to Local Storage//

    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
    
        var textInput  = textArea.val();
       
        var parentIndex = $(this).parent().index();
       

      
        var hourEntry = $('.entries[data-index='+parentIndex+']').val()
    
        var savedEntries = { entry: hourEntry,
                             idx: parentIndex
        }

        
        arrStorage.push(savedEntries);
        console.log(savedEntries);
      
         localStorage.setItem("appointments", JSON.stringify(arrStorage));

        
        
    });
   
   
 });
