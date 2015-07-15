var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#main').append(bio.name);
$('#main').append(work.title);
$('#main').append(education.name);

var bio = {
	"name": "Andrea Grygo",
	"role": "GIS Web Developer",
	"contacts": {
		"mobile": "218-340-7657",
		"email": "andreagrygo@gmail.com",
		"twitter": "@agrygo",
		"github": "agrygo",
		"linkedin": "https://www.linkedin.com/pub/andrea-grygo/12/875/50",
		"location": "Colorado"
	},
	"welcomeMessage": "Thanks for checking",
	"skills":  ["GIS", "JavaScript", "manifesting greatness"],
	"photo": "images/ag.jpg"
};

var work = {
	"jobs":[
		{
			"employer": "Garfield County",
			"title": "GIS Analyst/Lead",
			"location": "Glenwood Springs, CO",
			"dates": "11/2014-present",
			"description": ["ArcGIS Server infrastructure organization", "Upgrade web application viewers to JavaScript API", "Create workflow to automate Colorado Employee Residence Report (CERR) verification"]
		},
		{
			"employer": "St. Louis County",
			"title": "GIS Manager",
			"location": "Duluth, MN",
			"dates": "4/2014 – 11/2014",
			"description": ["Provide GIS technical assistance to coordinate and prioritize Enterprise GIS projects", "Co-manage ArcGIS Server and web services", "Document GIS system design, geospatial workflows and web mapping standards", "Develop ArcGIS Online strategy, user account policies, and administer AGOL account", "Represent the county at local, regional, and national meetings, conferences and training sessions"]
		}]

}

var projects = {
	"projects":[
		{
			"title": "County Land Explorer",
			"dates": "2014-15",
			"description": "JavaScript land data viewer",
			"images": ["images/GarCoCLE.jpg"]
		},
		{
			"title": "Garfield County Tax Viewer",
			"dates": "2015",
			"description": "JavaScript tax viewer",
			"images": ["images/TaxViewer.jpg"]
		},
		{
			"title": "St. Louis County Land Explorer",
			"dates": "2013",
			"description": "Adobe Flex API parcel viewer",
			"images": ["images/CLE.jpg"]
		}]
	}

var education = {
	"schools":[
		{
			"name": "University of Wisconsin Superior",
			"location": "Superior, WI, US",
			"degree": "BS",
			"major": ["Biology"],
			"dates": "9/1995 - 5/2000",
			"url": "https://www.uwsuper.edu"
		},
		{
			"name": "University of Maine",
			"location": "Orono, ME, US",
			"degree": "n/a",
			"major": ["Ecology and Environmental Studies"],
			"dates": "9/2003-9/2005",
			"url": "http://umaine.edu/"
		},
		{
			"name": "University of Minnesota",
			"location": "Duluth, MN, US",
			"degree": "Masters",
			"major": ["Water Resource Science"],
			"dates": "2005-2009",
			"url": "http://www.d.umn.edu/"
		}],
	"onlineCourses": [
		{
			"title": "Python",
			"school": "Coursera",
			"dates": "Spring 2013",
			"url": "http://www.coursera.com"
		}]
}

bio.display = function(){
	//for (contact in bio.contacts){
		//$('#topContacts').append(HTMLcontactGeneric);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$('#topContacts').append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$('#topContacts').append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$('#topContacts').append(formattedTwitter);
		var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
		$('#topContacts').append(formattedGit);
		var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
		$('#topContacts').append(formattedLoc);
		var formattedPic = HTMLbioPic.replace("%data%", bio.photo);
		$('#topContacts').append(formattedPic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$('#topContacts').append(formattedWelcome);
		$("#topContacts").append(HTMLskillsStart);
	for (skill in bio.skills)	{


		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$('#topContacts').append(formattedSkills);
	}
	//}

}

work.display = function() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(
			formattedEmployerTitle);
		$(".work-entry:last").append(
			formattedLocation);
		$(".work-entry:last").append(
			formattedDate);
		$(".work-entry:last").append(
			formattedDescription);
	}
}

projects.display = function(){

	for (project in projects.projects){
		$('#projects').append(HTMLprojectStart);

		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(
			formattedProjTitle);
		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(
			formattedProjDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(
			formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function(){
	for (school in education.schools){
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(
			formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(
			formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(
			formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(
			formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(
			formattedSchoolMajor);
	}
}

bio.display();
work.display();
projects.display();
education.display();

//internationalize button
function inName(name) {
	var names = [];
	console.log(name);
	names = name.split(" ");
	names[1] = names[1].toUpperCase();
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	return names[0] + " " + names[1];
}

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);

//alternate Twitter follow
/*$('#letsConnect').click(function(){
		window.location = "https://twitter.com/agrygo"
});*/
