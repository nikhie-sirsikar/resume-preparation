/*
This is empty on purpose! Your code to build the resume will go here.
 */


 //$("#main").append("Nikhita");

// var formattedName = HTMLheaderName.replace("%data%", "Nikhita Sirsikar");
// var formattedRole = HTMLheaderRole.replace("%data%", "Systems Engineer");

var bio = {
 	"name" : "Nikhita Sirsikar",
 	"role" : "System Engineer",
 	"contacts" : [{
 		"mobile" : "+91809 527 1234",
 		"email" : "nikhitasirsikar701@gmail.com",
 		"github" : "nikhie-sirsikar",
 		"location" : "Karnataka India"
 	}],
 	"welcomeMessage" : "Hello.",
 	"skills" : [
 	"Good leader", "soft skills", "Adaptability", "Collaboration", "Time management" 
 	],
 	"bioPic" : "images/me.jpg"
 };

var work = {
	"jobs" : [
	{
		"employer": "Infosys Ltd",
		"title": "Systems Engineer",
		"dates": "February 2017-Future",
		"description":"Systems engineering uses a host of tools that include modeling and simulation, requirements analysis and scheduling to manage complexity. Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design and manage complex systems over their life cycles."

	}]
};

var projects = {
	"projects": [{
		"title": "Animal Trading Card",
		"dates" : "2017",
		"description" : "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. ",
		"images" : ["images/project1.png"] 

	},
	{
		"title": "Build a Portfolio Site",
		"dates" : "2017",
		"description" : "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.  Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.",
		"images" : ["images/project2.png", "images/project3.png"] 

	}]
};

var education = {
	"schools" : [{
		"name" : "B. V. Bhoomraddi College ",
		"city" : "Hubli, UK, Karnataka",
		"degree" : "BE",
		"majors" : "BT",
		"dates" : "2012-2016"
	},
	{
		"name" : "Divekar Science College",
		"city" : "Karwar, UK, Karnataka",
		"degree" : "PU",
		"majors" : "SC",
		"dates" : "2010-2012"
	}],
	"onlineCourses" : [{
		"title" : "Front-end Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2016-2017"

	}]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts[contact].github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts[contact].location);

		$('#topContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
	};
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription,formattedImage);
		
		for (image in projects.projects[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		
		$(".education-entry:last").prepend(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	};

	for(course in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);

		$(".education-entry:last").append(formattedTitle + formattedSchool,formattedDates);
	}
}



bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


 //$("#header").append(formattedRole);
 //$("#header").prepend(formattedName);

 /*$(document).ready(function() {
 	$("#menu").accordion({collapsible: true, active: false});
 })
 */

