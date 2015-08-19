//// MISC /////////////////////////////////////////////////////////////////////

var requirements = [mathHonorsMajor, mathMajor, computerScienceMajor, germanMinor, bachelorOfScience]; 

var schedules = [MATH_HONORS, MATH_CS_GERMAN,MATH_CS,MATH_GERMAN];

//// SETUP ////////////////////////////////////////////////////////////////////

window.onload = function(){
	// Make Tabs
	makeTabs(schedules);
	
	// Show Schedule
	showSchedule(MATH_HONORS);
}

makeTabs = function(schedules){
	tabContainer = document.getElementById("tabs");
}

showSchedule = function(scheduleObj){
	container = document.getElementById("container");
	container.innerHTML = "";
	
	var scheduleName = scheduleObj.name;
	var schedule = scheduleObj.schedule;
	
	///////////////////////////////////////////////////////////////////////////
	
	var scheduledCourses = [];
	
	// Add Schedule
	var box = document.createElement("div");
	box.className = "box";
	
	var boxTitle = document.createElement("h2");
	box.appendChild(boxTitle);
	
	var creditCount = 0;
	
	// Keep track of scheduled classes; loop over all semesters defined
	for(var i = 0; i < schedule.length; i++){
		// Get Data
		var term = schedule[i];
		console.log(term);
		var maxCredits = term.status;
		var courses = term.courses.sort(function(a,b){ return courseData[b].credits - courseData[a].credits; });
		
		// Create & Populate Row
		var row = document.createElement("div");
		row.className = "row";
		row.innerHTML = "<h3>" + term.name + "</h3>";
		
		var box2 = document.createElement("div");
		box2.className = "box schedule-box";
		
		// Loop Courses
		for(var j = 0; j < courses.length; j++){
			var course = courses[j];
			var cd = courseData[course];
			creditCount += cd.credits;
			
			// Course Box
			var courseBox = document.createElement("div");
			courseBox.className = "schedule-course";
			courseBox.innerHTML = course;
			courseBox.style.width = (cd.credits/18*100) + "%";
			courseBox.style.backgroundColor = getCourseColor(course);
			
			if(scheduledCourses.indexOf(course) != -1){
				courseBox.style.border = "5px solid red";
			}
			
			// Append
			scheduledCourses.push(course);
			box2.appendChild(courseBox);
		}
		
		row.appendChild(box2);
		box.appendChild(row);
	}
	
	boxTitle.innerHTML = scheduleName + " (" + creditCount + " credits)";
	container.appendChild(box);
	
	///////////////////////////////////////////////////////////////////////////
	
	// Add Major Requirements
	for(var i = 0; i < requirements.length; i++){
		var r = requirements[i];
		var reqType = r.type;
		
		// Create Box
		var box = document.createElement("div");
		box.className = "box";
		box.innerHTML = "<h2>" + r.name + "</h2>";
		
		// Add Rows for each Category
		var categories = r.categories;
		for(var j = 0; j < categories.length; j++){
			var c = categories[j];
			
			// Create & Populate Row
			var row = document.createElement("div");
			row.className = "row";
			
			row.innerHTML = "<h3>" + c.name + "</h3>";
			var box2 = document.createElement("div");
			box2.className = "box";
			
			// Create "Blocks" for each section
			var sections = c.sections;
			for(var k = 0; k < sections.length; k++){
				var s = sections[k];
				var sectionType = s.type || s.courses.length;
				var sectionProgress = 0;
				
				// Container Div
				var sectionElement = document.createElement("div");
				sectionElement.className = "section";
				
				// Divider?
				if(k > 0){
					var line = document.createElement("hr");
					box2.appendChild(line);
				}
				
				// Requirements Block
				var reqBlock = document.createElement("div");
				reqBlock.className = "req-block";
				
				// Make list of requirements
				var list = document.createElement("ul");
				
				if(reqType == GENERAL_REQ){
					// List General Requirements
					var listItem = document.createElement("li");
					listItem.className = "general";
					listItem.innerHTML = '<span class="coursenum">' + s.req  + '</span>' + s.name;
					list.appendChild(listItem);
					
					// Check scheduled courses for this requirement
					for(var ii = 0; ii < scheduledCourses.length; ii++){
						var courseID = scheduledCourses[ii];
						var course = courseData[courseID];
						
						if(course.req.indexOf(s.req) != -1){
							sectionProgress += (sectionType<0)?course.credits:1;
							// display course
							var listItem = document.createElement("li");
							listItem.innerHTML = "<span class='coursenum'>" + courseID + "</span> " + course.name;
							list.appendChild(listItem);
						}
					}
				} else {
					// Iterate and List Courses
					var courses = s.courses;
					
					for(var ii = 0; ii < courses.length; ii++){
						var listItem = document.createElement("li");
						var course = courseData[courses[ii]];
						
						// Create List Item for this Course
						listItem.innerHTML = "<span class='coursenum'>" + courses[ii]  + " (" + course.credits + ")</span>" + course.name + "<span class='course-reqlist'>" + course.req + "</span>";
						
						// Check if this course is being taken
						if(scheduledCourses.indexOf(courses[ii]) != -1){
							listItem.className = "completed";
							// Increment Progress towards this Section
							sectionProgress += (sectionType<0)?course.credits:1;
						}
						
						list.appendChild(listItem);
					}
				}
				reqBlock.appendChild(list);
				
				// Type Block -- indicates progress towards degree requirement
				if((reqType!=GENERAL_REQ || courses.length > 1) && s.type != 0){
					var typeBlock = document.createElement("div");
					var credit = s.type < 0;
					typeBlock.className = "type-block " + (credit?"credit":"courses");
					typeBlock.innerHTML = '<div>' + sectionProgress + "/" + Math.abs(s.type) + '</div>';
					sectionElement.appendChild(typeBlock);
				}
				
				// Color Section with Green if this Section is Completed
				if(Math.abs(sectionProgress) >= Math.abs(sectionType)){
					sectionElement.style.backgroundColor = "#9d9";
				} else if(sectionProgress != 0){
					sectionElement.style.backgroundColor = "#dd9";
				} else {
					sectionElement.style.backgroundColor = "#d99";
				}
				
				// Add
				sectionElement.appendChild(reqBlock);
				box2.appendChild(sectionElement);
			}
			
			// Add the row
			row.appendChild(box2);
			box.appendChild(row);
		}
		
		// Add Everything to the page
		container.appendChild(box);
	}
}

//// MISC /////////////////////////////////////////////////////////////////////

var coursePrefixes = ["MATH", "STATS", "EECS", "LING", "GERMAN", "PHYS"];
var courseColors =   ["#9f9", "#9f9",  "#99f", "#ff9", "#f9f",   "#f99"];

function getCourseColor(course){
	console.log(course);
	for(var i = 0; i < coursePrefixes.length; i++){
		if(course.indexOf(coursePrefixes[i]) != -1){
			return courseColors[i];
		}
	}
	return "#999";
}
