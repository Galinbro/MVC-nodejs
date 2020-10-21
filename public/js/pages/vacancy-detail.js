$(function () {
    $('#DAS').hide();
    $('#RFC').hide();
    $("#vacancyType").change(function () {
      var displayoption = $("#vacancyType option:selected").text();
      // $("#txtresults").val(displayoption)

      if (displayoption == "External") {
        $('#DAS').hide();
        $('#RFC').show();
      } else if (displayoption == "Internal") {
        $('#DAS').show();
        $('#RFC').hide();
      } else {
        $('#DAS').hide();
        $('#RFC').hide();
      }
    })
  })

  $(document).ready(function(){
  $('#stepOne').tooltip();  
  $('#stepTwo').tooltip(); 
  $('#stepThree').tooltip(); 
  $('#stepFour').tooltip(); 
  $('#stepFive').tooltip(); 
  $('#stepSix').tooltip(); 

});

$.widget.bridge('uibutton', $.ui.button)