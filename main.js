// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }

function newElement() {
  // Get the task text and category from the input fields
  var taskText = document.getElementById("myInput").value;
  var category = document.getElementById("categorySelect").value;

  // Only add a new task if the input is not empty
  if (taskText === "") {
    alert("Please enter a task!");
  } else {
    // Create a new <li> element for the task
    var li = document.createElement("li");

    // Create a span element to show the task text
    var taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;
    li.appendChild(taskTextSpan);

    // Create another span element to show the category
    var categorySpan = document.createElement("span");
    categorySpan.textContent = " [" + category + "]";
    categorySpan.style.fontStyle = "italic";
    categorySpan.style.color = "#555";
    li.appendChild(categorySpan);

    // Append the new list item to the UL
    document.getElementById("myUL").appendChild(li);

    // Clear the input fields after adding the task
    document.getElementById("myInput").value = "";
    document.getElementById("categorySelect").value = "Personal"; // Reset to default category
  }
}
