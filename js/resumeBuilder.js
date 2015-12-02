
$(function(){
  var model = {
    "bio":{
      "name" : "James Fehr",
      "internationalized" : false,
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
          ]},
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
            },
            {
              "title": "Unknown Crusade Killboard",
              "dates": "2015",
              "description": "A Killboard that displays kills for the online MMO EVE Online",
              "images": "http://i.gyazo.com/f0b803fdc0df3565dc04b6d593490738.png",
              "url": "http://turtle-head.github.io/Killboard/"
            },
            {
              "title": "Cat Clicker",
              "dates": "2015",
              "description": "Click the cats, the app counts the clicks. If you want to click on other cats, open the admin console to add your own.",
              "images": "http://i.gyazo.com/2698f87f89f83b0e581445550ba96768.png",
              "url": "http://turtle-head.github.io/CatClicker/"
            }
          ]
      };
      var octopus = {
        init: function(){
          view.displayBio(model.bio);
          view.displayWork(model.jobs);
          view.displayProject(model.projects);
          view.displaySchool(model.education);
          //view.locationizer(model);
        },
        initInName: function(){
          $("#inTb").click(function(){
            if(model.bio.internationalized){
              view.resetName(model.bio.name);
              model.bio.internationalized = false;
            } else {
              view.inName(model.bio.name);
              model.bio.internationalized = true;
            }
          });
        }
      };
      var view = {
        displayBio: function (obj){
          console.log(obj);
          // Formatted HTML strings for use later
          var HTMLheaderName = '<h1 id="name">%data%</h1>';
          var HTMLheaderRole = '<span>%data%</span><hr/>';
          var HTMLmobile = '<li class="flex-item"><span class="orange-text">phone</span><span class="white-text">%data%</span></li>';
          var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
          var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
          var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
          var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
          var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
          var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
          var HTMLbioPic = '<img src="%data%" class="biopic">';
          var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
          var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
          var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
          var googleMap = '<div id="map"></div>';
          var internationalizeButton = '<div id="inTb">Internationalize</div>';
          // Insert JSON data to the formatted HTML Strings
          var formattedName = HTMLheaderName.replace("%data%", obj.name);
          var formattedRole = HTMLheaderRole.replace("%data%", obj.role);
          var formattedEmail = HTMLemail.replace("%data%", obj.contacts.email);
          var formattedMobile = HTMLmobile.replace("%data%", obj.contacts.mobile);
          var formattedLoc = HTMLlocation.replace("%data%", obj.contacts.location);
          var formattedGit = HTMLgithub.replace("%data%", obj.contacts.github);
          var formattedTwit = HTMLtwitter.replace("%data%", obj.contacts.twitter);
          var formattedPict = HTMLbioPic.replace("%data%", obj.biopic);
          var formattedWelcome = HTMLwelcomeMsg.replace("%data%", obj.welcomeMessage);
          // Insert the formatted HTML Strings to the page
          $("#header").prepend(internationalizeButton);
          $("#header").prepend(formattedRole);
          $("#header").prepend(formattedName);
          $("#header").append(formattedPict);
          $("#topContacts").append(formattedMobile, formattedEmail, formattedGit, formattedTwit, formattedLoc);
          $("#footerContacts").append(formattedMobile, formattedEmail, formattedGit, formattedTwit, formattedLoc);
          $("#header").append(formattedWelcome);
          $("#header").append(HTMLskillsStart);
          // Place Skills beside the Picture
          for (var e=0; e < obj.skills.length; e++){
            var formattedSkills = HTMLskills.replace("%data%", obj.skills[e]);
            $("#header").append(formattedSkills);
          }
          $("#map").prepend(googleMap);
          octopus.initInName();
        },
        displaySchool: function (obj){
          // Formatted HTML Strings
          var HTMLschoolStart = '<div class="education-entry"></div>';
          var HTMLschoolName = '<a href="#">%data%';
          var HTMLschoolDegree = ' -- %data%</a>';
          var HTMLschoolDates = '<div class="date-text">%data%</div>';
          var HTMLschoolLocation = '<div class="location-text">%data%</div>';
          var HTMLschoolMajor = '<em><br>Major: %data%</em>';
          var HTMLonlineClasses = '<h3>Online Classes</h3>';
          var HTMLonlineTitle = '<a href="#">%data%';
          var HTMLonlineSchool = ' - %data%</a>';
          var HTMLonlineDates = '<div class="date-text">%data%</div>';
          var HTMLonlineURL = '<a href="#">%data%</a>';
          // Insert Data to the HTML Strings and then Insert them on the page
          $("#education").append(HTMLschoolStart);
          for (var d=0; d < obj.schools.length; d++) {
            //format stuff
            var formattedSchoolName = HTMLschoolName.replace("%data%", obj.schools[d].name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", obj.schools[d].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", obj.schools[d].major);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", obj.schools[d].dates);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", obj.schools[d].degree);
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
          for (var c=0; c < obj.onlineCourses.length; c++) {
            //format stuff
            var formattedOCName = HTMLschoolName.replace("%data%", obj.onlineCourses[c].school).replace("#", obj.onlineCourses[c].url);
            var formattedOCTitle = HTMLschoolLocation.replace("%data%", obj.onlineCourses[c].title);
            var formattedOCDate= HTMLschoolDates.replace("%data%", obj.onlineCourses[c].date);
            var formattedOCUrl= HTMLonlineURL.replace("%data%", obj.onlineCourses[c].url).replace("#", obj.onlineCourses[c].url);
            //append stuff
            $(".education-entry:last").append(formattedOCTitle);
            $(".education-entry:last").append(formattedOCName);
            $(".education-entry:last").append(formattedOCUrl);
            $(".education-entry:last").append(formattedOCDate);
            $(".education-entry:last").append("<br>");
          }
        },
        displayWork: function (obj){
          console.log(obj);
          // Formatted HTML Strings
          var HTMLworkStart = '<div class="work-entry"></div>';
          var HTMLworkEmployer = '<a href="#">%data%';
          var HTMLworkTitle = ' - %data%</a>';
          var HTMLworkDates = '<div class="date-text">%data%</div>';
          var HTMLworkLocation = '<div class="location-text">%data%</div>';
          var HTMLworkDescription = '<p><br>%data%</p>';
          // Insert Data to formatted HTML and insert them on the page
          $("#workExperience").append(HTMLworkStart);
          for (var a=0; a < obj.length; a++){
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", obj[a].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", obj[a].title);
            var formattedWorkLocation = HTMLworkEmployer.replace("%data%", obj[a].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", obj[a].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", obj[a].description);

            $(".work-entry:last").append(formattedWorkEmployer);
            $(".work-entry:last").append(formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
          }
        },
        displayProject: function (obj){
          // Formatted HTML Strings
          var HTMLprojectStart = '<div class="project-entry"></div>';
          var HTMLprojectTitle = '<a href="#">%data%</a>';
          var HTMLprojectDates = '<div class="date-text">%data%</div>';
          var HTMLprojectDescription = '<p><br>%data%</p>';
          var HTMLprojectImage = '<img src="%data%" width="10%">';
          // Insert Data to formatted HTML and insert them on the page
          $("#projects").append(HTMLprojectStart);
          for (var b=0; b < obj.length; b++) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", obj[b].title).replace("#", obj[b].url);
            var formatterProjectDates = HTMLprojectDates.replace("%data%", obj[b].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", obj[b].description);
            var formattedProjectImages = HTMLprojectImage.replace("%data%", obj[b].images);

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
        inName: function(obj) {
          var nameSplit = obj.split(" ");
          nameSplit[nameSplit.length-1]=nameSplit[nameSplit.length-1].toUpperCase();
          var intName=nameSplit[0];
          for (var x=1; x < nameSplit.length; x++){
            intName+=" "+nameSplit[x];
          }
          console.log(intName);
          $('#name').html(intName);
        },
        resetName: function(obj){
          $('#name').html(obj);
        },
        locationFinder: function(obj) {

          // initializes an empty array
          var locations = [];

          // adds the single location property from bio to the locations array
          locations.push(obj.bio.contacts.location);

          // iterates through school locations and appends each location to
          // the locations array
          for (var school in education.schools) {
            locations.push(obj.education.schools[school].location);
          }

          // iterates through work locations and appends each location to
          // the locations array
          for (var job in work.jobs) {
            locations.push(obj.work.jobs[job].location);
          }

          return locations;
        },
        createMapMarker: function(placeData) {

          // The next lines save location data from the search result object to local variables
          var lat = placeData.geometry.location.lat();  // latitude from the place service
          var lon = placeData.geometry.location.lng();  // longitude from the place service
          var name = placeData.formatted_address;   // name of the place from the place service
          var bounds = window.mapBounds;            // current boundaries of the map window

          // marker is an object with additional data about the pin for a single location
          var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
          });

          // infoWindows are the little helper windows that open when you click
          // or hover over a pin on a map. They usually contain more information
          // about a location.
          var infoWindow = new google.maps.InfoWindow({
            content: name
          });

          // hmmmm, I wonder what this is about...
          google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
            infoWindow.open(map,marker);
          });

          // this is where the pin actually gets added to the map.
          // bounds.extend() takes in a map location object
          bounds.extend(new google.maps.LatLng(lat, lon));
          // fit the map to the new marker
          map.fitBounds(bounds);
          // center the map
          map.setCenter(bounds.getCenter());
        }

    };
    octopus.init();
});
