$(function () {
  var myDate = dayjs();
  

  $(".saveBtn").on("click", function() {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,description);
    console.log(time);
    console.log(description);

  });


$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-17"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));







  $("#currentDay").text(myDate.format("dddd, MMMM D YYYY, h:mm a"));


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

});
