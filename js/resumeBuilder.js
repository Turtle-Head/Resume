
$(function(){
  var model = {
    "bio":{
      "name" : "James Fehr",
      "role" : "Front End Developer // Consultant // Troubleshooter",
      "contacts" : {
          "mobile" : "204-828-3613",
          "email": "fehr.james@gmail.com",
          "github" : "Turtle-Head",
          "twitter" : "@StarkWarrior",
          "location" : "Roseisle, MB"
        },
        "welcomeMessage": "Thank you for taking the time to check out my resume.",
        "skills" : ["CSS","HTML","JS","CCNA","JQuery"],
        "biopic" : "images/jfheadshot.jpg"
      },
      "education": {
        "schools": [
          {
            "name": "DeVRY Institute of Technology",
            "location": "Calgary, AB",
            "degree": "Computer Science -Did Not Finish-",
            "major": "Computer Science",
            "dates": "2000"
          },
          {
            "name": "Penticton Sr. Secondary",
            "location": "Penticton, BC",
            "degree": "Diploma, CCNA",
            "major": "English, CS, Networking",
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
          "jobs": [
            {
              "employer": "Self Employed",
              "title": "Consultant",
              "location": "Roseisle, MB",
              "dates": "2008-2015",
              "description": "Continuing to offer a wide range of computer services including VOIP servers, network setup, Virus, Malware and Rootkit removal as well as custom Web Sites and Computers."
            }
          ],
          "projects": [
            {
              "title": "Portfolio",
              "dates": "2015",
              "description": "Design Mockup of a Portfolio, repurposed to hold my information",
              "images": "images/SSPortfolioTop.jpg",
              "url": "http://turtle-head.github.io/Portfolio"
            },
            {
              "title": "Resume",
              "dates": "2015",
              "description": "This is the project you are looking at",
              "images": "images/SSResumeTop.png",
              "url": "http://turtle-head.github.io/Resume"
            },
            {
              "title": "Bugged",
              "dates": "2015",
              "description": "A clone of the classic arcade game Frogger",
              "images": "images/Bugged.png",
              "url": "http://turtle-head.github.io/Bugged/"
            }
          ]
        }
      };
      var octopus = {
        init: function(){
          view.displayBio(model.bio);
          view.displayWork(model.jobs);
          view.displayProject(model.projects);
          view.displaySchool(model.education);
          view.locationizer(model.jobs);
        }
      };
      var view = {
        displayBio: function (bio){
          var formattedName = HTMLheaderName.replace("%data%", bio.name);
          var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
          var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
          var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
          var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
          var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
          var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
          var formattedPict = HTMLbioPic.replace("%data%", bio.biopic);
          var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

          $("#header").prepend(internationalizeButton);
          $("#header").prepend(formattedRole);
          $("#header").prepend(formattedName);

          $("#header").append(formattedPict);
          $("#topContacts").append(formattedMobile, formattedEmail, formattedGit, formattedTwit, formattedLoc);
          $("#footerContacts").append(formattedMobile, formattedEmail, formattedGit, formattedTwit, formattedLoc);
          $("#header").append(formattedWelcome);
          $("#header").append(HTMLskillsStart);
          for (var e=0; e < bio.skills.length; e++){
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[e]);
            $("#header").append(formattedSkills);
          }
          $("#map").prepend(googleMap);
        },
        displaySchool: function (education){
          $("#education").append(HTMLschoolStart);
          for (var d=0; d < obj.schools.length; d++) {
            //format stuff
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[d].name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[d].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[d].major);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[d].dates);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[d].degree);
            //append stuff
            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append("<br>");
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append("<br>");
          }
          $(".education-entry:last").append(HTMLonlineClasses);
          for (var c=0; c < education.onlineCourses.length; c++) {
            //format stuff
            var formattedOCName = HTMLschoolName.replace("%data%", education.onlineCourses[c].school).replace("#", education.onlineCourses[c].url);
            var formattedOCTitle = HTMLschoolLocation.replace("%data%", education.onlineCourses[c].title);
            var formattedOCDate= HTMLschoolDates.replace("%data%", education.onlineCourses[c].date);
            var formattedOCUrl= HTMLonlineURL.replace("%data%", education.onlineCourses[c].url).replace("#", education.onlineCourses[c].url);
            //append stuff
            $(".education-entry:last").append(formattedOCTitle);
            $(".education-entry:last").append(formattedOCName);
            $(".education-entry:last").append(formattedOCUrl);
            $(".education-entry:last").append(formattedOCDate);
            $(".education-entry:last").append("<br>");
          }
        },
        displayWork: function (work){
          $("#workExperience").append(HTMLworkStart);
          for (var a=0; a < work.jobs.length; a++){
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[a].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[a].title);
            var formattedWorkLocation = HTMLworkEmployer.replace("%data%", work.jobs[a].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[a].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[a].description);

            $(".work-entry:last").append(formattedWorkEmployer);
            $(".work-entry:last").append(formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
          }
        },
        displayProject: function (projects){
          $("#projects").append(HTMLprojectStart);
          for (var b=0; b < projects.projects.length; b++) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[b].title).replace("#", projects.projects[b].url);
            var formatterProjectDates = HTMLprojectDates.replace("%data%", projects.projects[b].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[b].description);
            var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[b].images);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formatterProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImages);
          }
        },
        locationizer: function(work_obj) {
          var locations = [];
          for (var job in work_obj.jobs) {
            locations.push(work_obj.jobs[job].location);
          }
          return locations;
        },
        inName: function() {
          var nameSplit = bio.name.split(" ");
          nameSplit[nameSplit.length-1]=nameSplit[nameSplit.length-1].toUpperCase();
          var intName=nameSplit[0];
          for (var x=1; x < nameSplit.length; x++){
            intName+=" "+nameSplit[x];
          }
          console.log(intName);
          return intName;
        }
    };
    octopus.init();
});
