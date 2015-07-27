//JSON Objects
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
    "welcomeMessage": "ipsum lorem describum etceterum",
    "skills" : [" CSS"," HTML"," JS"," CCNA"],
    "biopic" : "images/fry.jpg",
    display: function (){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedPict = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").prepend(formattedPict);
        $("#topContacts").append(formattedEmail, formattedGit, formattedTwit, formattedLoc);
        $("#footerContacts").append(formattedEmail, formattedGit, formattedTwit, formattedLoc);
        $("#header").append(formattedWelcome);
        $("#header").append(HTMLskillsStart);
        for (var e=0; e < bio.skills.length; e++){
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[e]);
            $("#header").append(formattedSkills);
        }
        $("#map-div").append(googleMap);
    }
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
            "date" : "2015",
            "url" : "http://www.udacity.com"
        },
        {
            "title" : "Cisco Certified Network Associate",
            "school" : "Penticton Sr. Secondary",
            "date" : "1999",
            "url" : "http://www.cisco.com/"
        }
    ],
    display: function (){
        $("#education").append(HTMLschoolStart);
        for (var d=0; d < education.schools.length; d++) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[d].name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[d].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[d].major);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[d].dates);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[d].degree);

            $("#education").append(formattedSchoolName);
            //$("#education").append(formattedSchoolDegree);
            $("#education").append(formattedSchoolLocation);
            $("#education").append(formattedSchoolMajor);
            $("#education").append("<br>");
            $("#education").append(formattedSchoolDates);
            $("#education").append("<br>");
            }
        $("#education").append(HTMLonlineClasses);
        for (var c=0; c < education.onlineCourses.length; c++) {
            var formattedOCName = HTMLschoolName.replace("%data%", education.onlineCourses[c].school);
            var formattedOCTitle = HTMLschoolLocation.replace("%data%", education.onlineCourses[c].title);
            var formattedOCDate= HTMLschoolDates.replace("%data%", education.onlineCourses[c].date);
            var formattedOCUrl= HTMLschoolDates.replace("%data%", education.onlineCourses[c].url);

            $("#education").append(formattedOCTitle);
            $("#education").append(formattedOCName);
            $("#education").append(formattedOCUrl);
            $("#education").append("<br>");
            $("#education").append(formattedOCDate);
            $("#education").append("<br>");
            }
    }
}

var work = {
    "jobs": [
        {
            "employer": "Self Employed",
            "title": "Consultant",
            "location": "Roseisle, MB",
            "dates": "2008-2015",
            "description": "I have offered a wide range of computer services including running a VOIP server, network setup, and continuing to maintian client computers always protecting their privacy and ensuring their data is secure."
        },
        {
            "employer": "Someone",
            "title": "Something",
            "location": "Calgary, AB",
            "dates": "2005-2008",
            "description": "Did some stuff in a place and time far far away."
        }
    ],
    display: function (){
        $("#workExperience").append(HTMLworkStart);
        for (var a=0; a < work.jobs.length; a++){
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[a].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[a].title);
            var formattedWorkLocation = HTMLworkEmployer.replace("%data%", work.jobs[a].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[a].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[a].description);

            $("#workExperience").append(formattedWorkEmployer);
            $("#workExperience").append(formattedWorkTitle);
            $("#workExperience").append(formattedWorkLocation);
            $("#workExperience").append(formattedWorkDates);
            $("#workExperience").append(formattedWorkDescription);
        }
    }
}

var projects = {
    "projects": [
        {
            "title": "Project 1",
            "dates": "2015",
            "description": "This does something",
            "images": "images/thumb 1.png"
        },
        {
            "title": "Project 2",
            "dates": "2015",
            "description": "This does something else",
            "images": "images/thumb 2.png"
        }
    ],
    display: function (){
        $("#projects").append(HTMLprojectStart);
        for (var b=0; b < projects.projects.length; b++) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[b].title);
            var formatterProjectDates = HTMLprojectDates.replace("%data%", projects.projects[b].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[b].description);
            var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[b].images);

            $("#projects").append(formattedProjectTitle);
            $("#projects").append(formatterProjectDates);
            $("#projects").append(formattedProjectDescription);
            $("#projects").append(formattedProjectImages);
        }
    }
}


//Function Calls
bio.display();
work.display();
projects.display();
education.display();


//console.log();
