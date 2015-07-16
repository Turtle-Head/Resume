//ARRAYS
var bio = {
    "name" : "James Fehr",
    "role" : "Front End Developer",
    "contacts" : {
        "mobile" : "651-651-6549",
        "email": "fehr.james@gmail.com",
        "github" : "Turtle-Head",
        "twitter" : "@StarkWarrior",
        "location" : "Roseisle, MB"
    },
    "welcomeMessage": "Developing your front end so you don't have to",
    "skills" : [" CSS"," HTML"," JS"," CCNA"],
    "biopic" : "images/fry.jpg"
}

var education = {
    "schools": [
        {
        "name": "DeVRY Institute of Technology",
        "location": "Calgary, AB",
        "degree": "Computer Science",
        "major": "Computer Science",
        "dates": "2000"
        },
    {
        "name": "Penticton Sr. Secondary",
        "location": "Penticton, BC",
        "degree": "High School Diploma",
        "major": "English, Computer Science",
        "dates": "1996-1999"
    }
    ],
    "onlineCourses": [
        {
            "title" : "Front End Nano Degree",
            "school" : "Udacity",
            "date": "2015",
            "url": "http://www.udacity.com"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "James Fehr",
            "title": "Consultant",
            "location": "Roseisle, MB",
            "dates": "2008-2015",
            "description": "I have offered a wide range of computer services including running a VOIP server for 1 year, network setup, and continuing to maintian client computers always protecting their privacy and ensuring their data is secure."
        },
        {
            "employer": "x",
            "title": "x",
            "location": "y",
            "dates": "2008-2015",
            "description": ""
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Project 1",
            "dates": "2015",
            "description": "This does something",
            "images": "images\thumb1.png"
        },
        {
            "title": "Project 2",
            "dates": "2015",
            "description": "This does something else",
            "images": "images\thumb2.png"
        }
    ]
}

//Functions
function displayBio(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedPict = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedPict);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedGit);
    $("#lets-connect").append(formattedEmail);
    $("#lets-connect").append(formattedMobile);
    $("#lets-connect").append(formattedGit);
    $("#topContacts").append(formattedTwit);
    $("#topContacts").append(formattedLoc);
    $("#header").append(formattedSkills);
    $("#header").append(formattedWelcome);

}
function displayEducation() {
    $("#education").append(HTMLschoolStart);
    for (x=0; x < education.schools.length; x++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[x].name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[x].major);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[x].dates);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);

        $("#education").append(formattedSchoolName);
        $("#education").append(formattedSchoolDegree);
        $("#education").append(formattedSchoolDates);
        $("#education").append(formattedSchoolLocation);
        $("#education").append(formattedSchoolMajor);


        }
    $("#education").append(HTMLonlineClasses);
    for (x=0; x < education.onlineCourses.length; x++) {
        var formattedOCName = HTMLschoolName.replace("%data%", education.onlineCourses[x].school);
        var formattedOCTitle = HTMLschoolLocation.replace("%data%", education.onlineCourses[x].title);
        var formattedOCDate= HTMLschoolDates.replace("%data%", education.onlineCourses[x].date);
        var formattedOCUrl= HTMLschoolDates.replace("%data%", education.onlineCourses[x].url);

        $("#education").append(formattedOCTitle);
        $("#education").append(formattedOCName);
        $("#education").append(formattedOCDate);
        $("#education").append(formattedOCUrl);
    }
}

function displayProjects() {
    $("#projects").append(HTMLprojectStart);
    for (x=0; x < projects.projects.length; x++) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
        var formatterProjectDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects.description);
        var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects.images);

        $("#projects").append(formattedProjectTitle);
        $("#projects").append(formatterProjectDates);
        $("#projects").append(formattedProjectDescription);
        $("#projects").append(formattedProjectImages);
    }
}

function displayWork() {
    $("#workExperience").append(HTMLworkStart);
    for (x=0; x < work.jobs.length; x++){
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
        var formattedWorkLocation = HTMLworkEmployer.replace("%data%", work.jobs.location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs.description);

        $("#workExperience").append(formattedWorkEmployer);
        $("#workExperience").append(formattedWorkTitle);
        $("#workExperience").append(formattedWorkLocation);
        $("#workExperience").append(formattedWorkDates);
        $("#workExperience").append(formattedWorkDescription);
    }
}
//Function Calls
displayBio();
displayWork();
displayProjects();
displayEducation();


console.log(education);
