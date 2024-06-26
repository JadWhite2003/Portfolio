function openNav() {
  document.getElementById("navbar").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("navbar").style.width = "0";
}


// var homeBtn = document.getElementById("home")
// var projectsBtn = document.getElementById("project")
// var experiBtn = document.getElementById("experience")
// var eduBtn = document.getElementById("skills")
// var contactBtn = document.getElementById("contact")

// homeBtn.addEventListener('click', function(){
//   var homeScroll = document.getElementById('about')
//   homeScroll.scrollIntoView(true)
// })

// projectsBtn.addEventListener('click', function(){
//   var projectScroll = document.getElementById('projects')
//   projectScroll.scrollIntoView(true)
// })

// experiBtn.addEventListener('click', function(){
//   var experiScroll = document.getElementById('experi')
//   experiScroll.scrollIntoView(true)
// })

// eduBtn.addEventListener('click', function(){
//   var eduScroll = document.getElementById('educ')
//   eduScroll.scrollIntoView(true)
// })

// contactBtn.addEventListener('click', function(){
//   var contactScroll = document.getElementById('contactArea')
//   contactScroll.scrollIntoView(true)
// })

// Define an array of button IDs


// // Attach event listeners to each button
// buttonIds.forEach(function(id) {
//   var button = document.getElementById(id);
//   button.addEventListener('click', function() {
//     var sectionId = id === "skills" ? "educ" : id;
//     var section = document.getElementById(sectionId);
//     section.scrollIntoView(true);
//   });
// });

var buttonIds = ["home", "project", "experience", "skills", "contact"];

var buttonSectionMap = {
  "home": "about",
  "project": "projects",
  "experience": "experi",
  "skills": "educ",
  "contact": "contactArea"
};

// Attach event listeners to each button
buttonIds.forEach(function(id) {
  var button = document.getElementById(id);
  button.addEventListener('click', function() {
    var sectionId = buttonSectionMap[id];
    var section = document.getElementById(sectionId);
    section.scrollIntoView(true);
  });
});

