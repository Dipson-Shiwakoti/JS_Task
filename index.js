$(document).ready(function () {
  $("section").hide();

  $(".toggle-btn").click(function () {
    let sectionName = $(this).attr("name");
    $("." + sectionName).toggle();
  });
});

//JavaScript
function handleClick() {
  document.getElementById("eventOutput").innerText = "Button was clicked!";
}

document.getElementById("myBtn1").onclick = function () {
  alert("Button1 Clicked!");
};

document.getElementById("myBtn2").addEventListener("click", function () {
  alert("Button2 Clicked!");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    alert("Up arrow key pressed");
  } else if (e.key === "ArrowDown") {
    alert("Down arrow key pressed");
  } else if (e.key === "ArrowLeft") {
    alert("Left arrow key pressed");
  } else if (e.key === "ArrowRight") {
    alert("Right arrow key pressed");
  }
});

document.getElementById("mouseArea").addEventListener("click", function () {
  alert("Mouse Clicked!");
});

//JQuery
//Inclusion
$("#checkJQuery").click(function () {
  $("#jqueryVersion").text("jQuery version: " + $.fn.jquery);
});

// Element selection
$("#selectById").click(function () {
  $("#selectionDemo").find("*").removeClass("highlight");
  $("#demoId").addClass("highlight");
});

$("#selectByClass").click(function () {
  $("#selectionDemo").find("*").removeClass("highlight");
  $(".demoClass").addClass("highlight");
});

$("#selectByTag").click(function () {
  $("#selectionDemo").find("*").removeClass("highlight");
  $("#selectionDemo div").addClass("highlight");
});

$("#clearSelection").click(function () {
  $("#selectionDemo").find("*").removeClass("highlight");
});

// Event handling
$("#JBtn").click(function () {
  alert("Button clicked!");
});

$("#demoForm").submit(function (e) {
  e.preventDefault();
  alert("Form submitted!");
});

$("#hoverElement").hover(
  function () {
    $(this).css("background-color", "yellow");
  },
  function () {
    $(this).css("background-color", "lightblue");
  }
);

// Element manipulation
$("#appendBtn").click(function () {
  $("#myDiv").append('<span style="margin-left: 5px;">[Appended]</span>');
});

$("#prependBtn").click(function () {
  $("#myDiv").prepend('<span style="margin-right: 5px;">[Prepended]</span>');
});

$("#beforeBtn").click(function () {
  $("#myDiv").before('<p style="color: green;">Content before the div</p>');
});

$("#afterBtn").click(function () {
  $("#myDiv").after('<p style="color: blue;">Content after the div</p>');
});

$("#resetManipulation").click(function () {
  $("#myDiv").html("Original Content");
  $("#myDiv").nextAll("p").remove();
  $("#myDiv").prevAll("p").remove();
});

// jQuery methods
$("#htmlBtn").click(function () {
  $("#htmlDemo").html("<strong>New HTML content!</strong>");
});

$("#cssBtn").click(function () {
  $("#cssDemo").css("background-color", "lightgreen");
});

$("#textBtn").click(function () {
  $("#textDemo").text("New text content!");
});

$("#valBtn").click(function () {
  $("#valDemo").val("New input value");
});

$("#resetMethods").click(function () {
  $("#htmlDemo").html("Original HTML");
  $("#cssDemo").css("background-color", "lightblue");
  $("#textDemo").text("Original Text");
  $("#valDemo").val("Old input value");
});

// Show/hide/toggle
$("#showBtn").click(function () {
  $("#toggleDemo").show();
});

$("#hideBtn").click(function () {
  $("#toggleDemo").hide();
});

$("#toggleBtn").click(function () {
  $("#toggleDemo").toggle();
});
