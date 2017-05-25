

var bio = {
    "name" : "Tsigereda A. Demisse",
    "role" : "Senior consultant",
    "contacts" :{
        "mobile" : "94152442",
        "email" : "tsigeredasfw@gmail.com",
        "github" : "tsigereda",
        "location" : "Stavanger"
    },
    "welcomeMessage" : "Hi, welcome and thanks for the visit. Take contact, i am friendly or so i think :)",
    "skills" : ["SharePoint",".Net", "JS", "MVC"],
    "biopic":"images/me.jpg",
    "display" : function(){

       
        var formattedName= HTMLheaderName.replace("%data%",this.name);
        var formattedRole= HTMLheaderRole.replace("%data%",this.role);

                $("#header").prepend(formattedRole);
                $("#header").prepend(formattedName);

        addToList("#topContacts",this);
        addToList("#footerContacts",this);
       formattedBioPic = HTMLbioPic.replace("%data%",this.biopic);
       $("#header").append(formattedBioPic);
       
        $("#header").append(HTMLwelcomeMsg.replace("%data%",this.welcomeMessage));
        if(this.skills.length>0){
            $("#header").append(HTMLskillsStart);

            this.skills.forEach(function(element) {
                var formattedSkill = HTMLskills.replace("%data%",element);
                $("#skills").append(formattedSkill);
            }, this);                     
        }   
     }
}
bio.display();

var education = {
    "schools" : [{
        "name" : "Haramaya University/ Alemaya University",
        "City" : "Harrar",
        "degree" : "Bachelors degree in Computer Science and IT",
        "dates" : 2006
    },{
        "name" : "Oslo University college",
        "City" : "Oslo",
        "degree" : " Joint Masters degree in Digital Libraries learning",
        "dates" : 2009
    }],
    "OnlineCourses":[
    {
        "name" : "C# learning path",
        "School" : "Pluralsight",
        "dates":2016,
        "url":"https://www.pluralsight.com/paths/csharp"        
    },
    {
        "name" : "Front-end web developer Nanodegree",
        "School" : "Udacity",
        "dates":2017,
        "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"        
    }
    ]
}

var work={
    "jobs" :[{
        "employer" :"Bahirdar University",
        "title": "Graduate assistant",
       "dates":"July 2006 - July 2017",
       "location" : "Bahirdar, Ethiopia",
       "description":"Thought introduction to computer science and programing courses for computer science students. Project adviser and assistant for more advanced subjects for the last year students" 
            },
            {"employer" :"CERN",
            "title": "Intern",
            "dates":"September 2008 - December 2008",
            "location" : "Genev, Switzerland",
            "description":"Python developer in the IT department developing and maintaining the opensource digital library software."},
            
            {"employer" :"Statoil ASA",
            "title": "Solutions Architect",
            "dates":"July 2010 - June 2014",
             "location" : "Stavanger, Norway",
            "description":"Worked mainly with SharePoint and applications built ontop of it. I worked  in the department maintaining and developing the companies collaboration and document managment system"
        },
        {"employer" :"Capgemini Norway",
        "title": "Senior consultant",
       "dates":"June 2014 - Present",
       "description":" Belogs to a software engineering department and i work with a team that maintains and develops .Net applications for customers in the Oil and Gas industry. "
        }]
}

var projects = {
    project : [{
       title : "Fast track project",
       description : "sharepoint based projects to solve bussines needs",
       dates : "2013 - 2014" 
    },
    {
        
       title : "EniGas",
       description : "a .Net application for gas sales reporting",
       dates : "2015 - 2016" 
    
    }]
}

projects.display = function(){
      this.project.forEach(function(element) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%",element.title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%",element.dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%",element.description);
      $(".project-entry:last").append(formattedDescription);

  }, this);
};
projects.display();

work.display = function displayWork(){
    this.jobs.forEach(function(element) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",element.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",element.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", element.dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",element.description);
    $(".work-entry:last").append(formattedDescription);
}, this);
}

work.display();


$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    console.log( x + y);
});

$("#mapDiv").append(googleMap);
