//// COURSES //////////////////////////////////////////////////////////////////

var GENERAL_REQ = 0;
var MAJOR_REQ = 1;
var MINOR_REQ = 2;

// Math
var MATH_217 = "MATH 217";
var MATH_256 = "MATH 256";
var MATH_286 = "MATH 286";
var MATH_312 = "MATH 312";
var MATH_316 = "MATH 316";
var MATH_351 = "MATH 351";
var MATH_354 = "MATH 354";
var MATH_404 = "MATH 404";
var MATH_412 = "MATH 412";
var MATH_416 = "MATH 416";
var MATH_420 = "MATH 420";
var MATH_425 = "MATH 425";
var MATH_450 = "MATH 450";
var MATH_451 = "MATH 451";
var MATH_452 = "MATH 452";
var MATH_454 = "MATH 454";
var MATH_465 = "MATH 465";
var MATH_471 = "MATH 471";
var MATH_490 = "MATH 490";
var MATH_493 = "MATH 493";
var MATH_525 = "MATH 525";
var MATH_526 = "MATH 526";
var MATH_527 = "MATH 527";
var MATH_537 = "MATH 537";
var MATH_555 = "MATH 555";
var MATH_556 = "MATH 556";
var MATH_557 = "MATH 557";
var MATH_558 = "MATH 558";
var MATH_561 = "MATH 561";
var MATH_567 = "MATH 567";
var MATH_571 = "MATH 571";
var MATH_572 = "MATH 572";
var MATH_590 = "MATH 590";
var MATH_591 = "MATH 591";
var MATH_596 = "MATH 596";
var MATH_597 = "MATH 597";

// Statistics
var STATS_406 = "STATS 406";
var STATS_426 = "STATS 426";
var STATS_608 = "STATS 608";
var STATS_610 = "STATS 610";
var STATS_625 = "STATS 625";
var STATS_700 = "STATS 700";

// Physics
var PHYS_160 = "PHYS 160/161";
var PHYS_260 = "PHYS 260";
var PHYS_261 = "PHYS 261";
var PHYS_360 = "PHYS 360/341";
var PHYS_390 = "PHYS 390";
var PHYS_405 = "PHYS 405";

// Computer Science
var EECS_203 = "EECS 203";
var EECS_280 = "EECS 280";
var EECS_281 = "EECS 281";
var EECS_370 = "EECS 370";
var EECS_376 = "EECS 376";
var EECS_442 = "EECS 442";
var EECS_445 = "EECS 445";
var EECS_467 = "EECS 467";
var EECS_477 = "EECS 477";
var EECS_492 = "EECS 492";
var EECS_494 = "EECS 494";
var EECS_545 = "EECS 545";

// German
var GERM_232 = "GERMAN 232";
var GERM_300 = "GERMAN 300";
var GERM_304 = "GERMAN 304";
var GERM_306 = "GERMAN 306";
var GERM_315 = "GERMAN 315";
var GERM_322 = "GERMAN 322";
var GERM_325 = "GERMAN 325";
var GERM_326 = "GERMAN 326";
var GERM_333 = "GERMAN 333";
var GERM_375 = "GERMAN 375";
var GERM_378 = "GERMAN 378";
var GERM_425 = "GERMAN 425";
var GERM_449 = "GERMAN 449";
var GERM_464 = "GERMAN 464";
var GERM_501 = "GERMAN 501";

// Linguistics
var LING_210 = "LING 210";
var LING_313 = "LING 313";
var LING_315 = "LING 315";
var LING_316 = "LING 316";
var LING_317 = "LING 317";
var LING_421 = "LING 421";
var LING_441 = "LING 441";
var LING_515 = "LING 515";
var LING_521 = "LING 521";
var LING_541 = "LING 541";
var LING_615 = "LING 615";
var LING_702 = "LING 702";

// Misc
var UC_280 = "UC 280";
var CLCIV_101 = "CLCIV 101";
var HIST_230 = "HIST 230";
var TCHNCLM_300 = "TCHNCLM 300";
var TCHNCLM_497 = "TCHNCLM 497";
var ENGLISH_308 = "ENGLISH 308";
var ASTRO_127 = "ASTRO 127";

//// COURSE NAMES & CREDITS ///////////////////////////////////////////////////

// Requirements
var MSA = "MSA";
var QR = "QR";
var HU = "HU";
var SS = "SS";
var NS = "NS";
var RE = "RE";
var FYWR = "FYWR";
var ULWR = "ULWR";
var AIM = "AIM";	// applied interdisciplinary mathematics
var MDE = "MDE";
var ID = "ID";

// Names
var courseData = [];

// Math ------------------------------------------------------------------------

// 200
courseData[MATH_217] = {credits: 4, name:"Linear Algebra", req:[MSA, QR]};
courseData[MATH_256] = {credits: 4, name:"Applied Honors Calculus IV", req:[MSA, QR]};
courseData[MATH_286] = {credits: 3, name:"Honors Differential Equations", req:[MSA, QR]};
// 300
courseData[MATH_312] = {credits: 3, name:"Applied Modern Algebra", req:[]};
courseData[MATH_316] = {credits: 3, name:"Differential Equations", req:[]};
courseData[MATH_351] = {credits: 3, name:"Principles of Analysis", req:[]};
courseData[MATH_354] = {credits: 3, name:"Fourier Analysis & Applications", req:[]};
// 400
courseData[MATH_404] = {credits: 3, name:"Intermediate Diff. Eqns. & Dynamics", req:[]};
courseData[MATH_412] = {credits: 3, name:"Introduction to Modern Algebra", req:[]};
courseData[MATH_416] = {credits: 3, name:"Theory of Algorithms", req:[]};
courseData[MATH_420] = {credits: 3, name:"Advanced Linear Algebra", req:[]};
courseData[MATH_425] = {credits: 3, name:"Introduction to Probability", req:[]};
courseData[MATH_450] = {credits: 4, name:"Advanced Math for Engineers I", req:[]};
courseData[MATH_451] = {credits: 3, name:"Advanced Calculus I", req:[]};
courseData[MATH_452] = {credits: 3, name:"Advanced Calculus II", req:[]};
courseData[MATH_454] = {credits: 3, name:"Partial Diff Eqns & BVPs", req:[]};
courseData[MATH_465] = {credits: 3, name:"Introduction to Combinatorics", req:[]};
courseData[MATH_471] = {credits: 3, name:"Introduction to Numerical Methods", req:[]};
courseData[MATH_490] = {credits: 3, name:"Introduction to Topology", req:[]};
courseData[MATH_493] = {credits: 3, name:"Honors Algebra I", req:[]};
// 500
courseData[MATH_525] = {credits: 3, name:"Probability Theory", req:[AIM]};
courseData[MATH_526] = {credits: 3, name:"Stochastic Processes", req:[AIM]};
courseData[MATH_537] = {credits: 3, name:"Differentiable Manifolds", req:[]};
courseData[MATH_555] = {credits: 3, name:"Complex Analysis", req:[AIM]};
courseData[MATH_556] = {credits: 3, name:"Applied Functional Analysis", req:[AIM]};
courseData[MATH_557] = {credits: 3, name:"Asymptotic Analysis", req:[AIM]};
courseData[MATH_558] = {credits: 3, name:"ODEs / Applied Nonlinear Dynamics", req:[AIM]};
courseData[MATH_561] = {credits: 3, name:"Linear Programming", req:[AIM]};
courseData[MATH_567] = {credits: 3, name:"Coding Theory", req:[]};
courseData[MATH_571] = {credits: 3, name:"Numerical Linear Algebra", req:[AIM]};
courseData[MATH_572] = {credits: 3, name:"Numerical Partial Diff. Eq.", req:[AIM]};
courseData[MATH_590] = {credits: 3, name:"Topology", req:[]};
courseData[MATH_591] = {credits: 3, name:"General and Differential Topology", req:[]};
courseData[MATH_596] = {credits: 3, name:"Analysis I (Complex)", req:[]};
courseData[MATH_597] = {credits: 3, name:"Analysis II (Measure Theory)", req:[]};

// Statistics ------------------------------------------------------------------

courseData[STATS_406] = {credits: 4, name:"Statistical Computing", req:[]};
courseData[STATS_426] = {credits: 3, name:"Introduction to Theoretical Statistics", req:[]};
courseData[STATS_608] = {credits: 2, name:"Optimization Methods in Statistics", req:[]}
courseData[STATS_610] = {credits: 3, name:"Statistical Inference", req:[]}
courseData[STATS_625] = {credits: 3, name:"Probability and Random Processes I", req:[]}
courseData[STATS_700] = {credits: 1.5, name:"Bayesian Nonparametrics", req:[]};

// Physics ---------------------------------------------------------------------

courseData[PHYS_160] = {credits: 5, name:"Honors Mechanics + Lab", req:[NS, QR]};
courseData[PHYS_260] = {credits: 4, name:"Honors E&M", req:[NS, QR]};
courseData[PHYS_261] = {credits: 1, name:"Honors E&M Lab", req:[NS]};
courseData[PHYS_360] = {credits: 5, name:"Honors Waves, Heat, and Light", req:[]};
courseData[PHYS_390] = {credits: 3, name:"Introduction to Modern Physics", req:[]};
courseData[PHYS_405] = {credits: 3, name:"Intermediate Electricity & Magnetism", req:[]};

// Computer Science ------------------------------------------------------------

courseData[EECS_203] = {credits: 4, name:"Discrete Math", req:[MSA]};
courseData[EECS_280] = {credits: 4, name:"Programming & Introductory Data Structures", req:[MSA]};
courseData[EECS_281] = {credits: 4, name:"Data Structures & Algorithms ", req:[]};
courseData[EECS_370] = {credits: 4, name:"Introduction to Computer Organization", req:[]};
courseData[EECS_376] = {credits: 4, name:"Foundations of Computer Science", req:[]};
courseData[EECS_442] = {credits: 4, name:"Computer Vision", req:[]};
courseData[EECS_445] = {credits: 4, name:"Intro to Machine Learning", req:[]};
courseData[EECS_467] = {credits: 4, name:"Autonomous Robotics", req:[]};
courseData[EECS_477] = {credits: 4, name:"Introduction to Algorithms", req:[]};
courseData[EECS_492] = {credits: 4, name:"Introduction to Artificial Intelligence", req:[]};
courseData[EECS_494] = {credits: 4, name:"Computer Game Design & Development", req:[MDE]};
courseData[EECS_545] = {credits: 3, name:"Machine Learning", req:[]};

// German ----------------------------------------------------------------------

courseData[GERM_232] = {credits: 4, name:"Scientific German", req:[]};
courseData[GERM_300] = {credits: 4, name:"German Grammar", req:[]};
courseData[GERM_304] = {credits: 1, name:"Studies in German Culture", req:[HU]}
courseData[GERM_306] = {credits: 1, name:"Conversation Practice", req:[]};
courseData[GERM_315] = {credits: 3, name:"Intro to German Lit", req:[HU]};
courseData[GERM_322] = {credits: 4, name:"Origins of Nazism", req:[HU,RE]};
courseData[GERM_325] = {credits: 3, name:"Intermediate German A", req:[]};
courseData[GERM_326] = {credits: 3, name:"Intermediate German B", req:[]};
courseData[GERM_333] = {credits: 3, name:"Fascist Cinemas", req:[HU,RE,ULWR]};
courseData[GERM_375] = {credits: 3, name:"Celtic and Nordic Mythology", req:[HU]};
courseData[GERM_378] = {credits: 3, name:"History of German Science", req:[ID]};
courseData[GERM_425] = {credits: 3, name:"Advanced German", req:[ULWR]};
courseData[GERM_449] = {credits: 3, name:"Special Topics in English Translation", req:[]};
courseData[GERM_464] = {credits: 3, name:"Postwar German Ethnicities", req:[RE]};
courseData[GERM_501] = {credits: 3, name:"Old English", req:[]};

// Linguistics -----------------------------------------------------------------

courseData[LING_210] = {credits: 4, name:"Introduction to Linguistic Analysis", req:[SS]};
courseData[LING_313] = {credits: 3, name:"Sound Patterns", req:[ULWR, SS]};
courseData[LING_315] = {credits: 3, name:"Introduction to Syntax", req:[]};
courseData[LING_316] = {credits: 3, name:"Aspects of Meaning", req:[]};
courseData[LING_317] = {credits: 3, name:"Language and History", req:[HU]};
courseData[LING_421] = {credits: 3, name:"Morphology", req:[]};
courseData[LING_441] = {credits: 3, name:"Computational Linguistics I", req:[]};
courseData[LING_515] = {credits: 3, name:"Generative Syntax", req:[]};
courseData[LING_521] = {credits: 3, name:"Morphology", req:[]};
courseData[LING_541] = {credits: 3, name:"Natural Language Processing", req:[]};
courseData[LING_615] = {credits: 3, name:"Advanced Syntax", req:[]};
courseData[LING_702] = {credits: 3, name:"Language and Information", req:[]};

courseData[UC_280] = {credits: 4, name:"Undergraduate Research", req:[]};
courseData[CLCIV_101] = {credits: 4, name:"The Ancient Greeks", req:[FYWR]};
courseData[HIST_230] = {credits: 3, name:"Humanities Topics in History", req:[RE,HU]};
courseData[ENGLISH_308] = {credits: 3, name:"History of English Language", req:[HU]};
courseData[ASTRO_127] = {credits: 1, name:"Naked Eye Astronomy", req:[NS]};

//// MAJORS ///////////////////////////////////////////////////////////////////

/* Format for "type":
 * Indicates #courses or #credits needed from courses listed. Zero indicates
 * that all listed courses must be taken.  Positive numbers indicate courses,
 * negative numbers indicate credits.
 */

var computerScienceMajor = {
	name:  "Computer Science LSA Major",
	type:  MAJOR_REQ,
	categories:  [
		{ name:  "Prerequisites",
		  sections: [
			{ type: 1, courses: [EECS_203, MATH_465] },
			{ type: 0, courses: [EECS_280] }
		  ]
		},
		{ name:  "Core Courses",
		  sections: [
			{ name:  "Computer Science", 
				type: 0, courses: [EECS_281, EECS_370, EECS_376] },
			{ name:  "Probability and Statistics",
				type: 1, courses: [STATS_426] }
		  ]
		},
		{ name:  "Upper Level CS",
		  sections: [
			{ type: -16, courses: [EECS_442, EECS_445, EECS_467, EECS_477, EECS_492, EECS_545] }
		  ]
		},
		{ name: "Major Design Elective",
		  sections: [
			{ type: 1, courses: [EECS_494] }
		  ]
		}
	]
}

var mathHonorsMajor = {
	name:  "Math Major (Honors)",
	type:  MAJOR_REQ,
	categories:  [
		{ name:  "Prerequisites",
		  sections: [
			{ type: 0, courses: [MATH_217] }
		  ]
		},
		{ name:  "Basic Courses",
		  sections: [
			{ name:  "Differential Equations", 
				type: 1, courses: [MATH_404, MATH_454, MATH_558] },
			{ name:  "Linear Algebra",
				type: 1, courses: [MATH_420] },
			{ name:  "Analysis",
				type: 1, courses: [MATH_451] },
			{ name:  "Probability",
				type: 1, courses: [MATH_525] }
		  ]
		},
		{ name:  "Electives",
		  sections: [
			{ type: 4, courses: [MATH_416, MATH_452, MATH_465, MATH_471, MATH_490, MATH_526, MATH_537, MATH_555, MATH_558, MATH_561, MATH_571, MATH_572, MATH_590, MATH_591, MATH_596, MATH_597] }
		  ]
		}
	]
};

var mathMajor = {
	name:  "Math Major (Mathematical Sciences Concentration)",
	type:  MAJOR_REQ,
	categories:  [
		{ name:  "Prerequisites",
		  sections: [
			{ type: 0, courses: [MATH_217, PHYS_160, PHYS_405, PHYS_261] }
		  ]
		},
		{ name:  "Basic Courses",
		  sections: [
			{ name:  "Differential Equations", 
				type: 1, courses: [MATH_256, MATH_286, MATH_316, MATH_404, MATH_558] },
			{ name:  "Discrete Math / Modern Algebra",
				type: 1, courses: [MATH_312, MATH_412, MATH_465, MATH_493] },
			{ name:  "Analysis",
				type: 1, courses: [MATH_351, MATH_354, MATH_450, /*MATH_451, MATH_454*/] },
			{ name:  "Probability and Statistics",
				type: 1, courses: [MATH_425, MATH_525] }
		  ]
		},
		{ name:  "Program Options (Numerical & Applied Analysis",
		  sections: [
			{ type: 3, courses: [MATH_451, MATH_454, MATH_471, MATH_555, MATH_571, MATH_596, MATH_597, STATS_406, STATS_426, PHYS_360] }
		  ]
		}
	]
};

var lingMinor = {
	name:  "Linguistics Minor",
	type:  MINOR_REQ,
	categories:  [
		{ name:  "Prerequisites",
		  sections: [
			{type: 0, courses: [LING_210]}
		  ]
		},
		{ name:  "Core",
		  sections: [
			{ type: 2, courses: [LING_313, LING_315, LING_316] }
		  ]
		},
		{ name:  "Electives",
		  sections: [
			{ type: -9, courses: [LING_317, LING_421, LING_441, LING_515, LING_521, LING_541, LING_615, LING_702] }
		  ]
		}
	]
};

var germanMinor = {
	name: "German Minor",
	type: MINOR_REQ,
	categories: [
		{ name: "Requirements",
			sections: [
				{type: 1, courses: [GERM_325, GERM_326] }
			]
		},
		{ name: "Options",
		  sections: [
				{type: -15, courses: [GERM_232, GERM_304, GERM_306, GERM_315, GERM_322, GERM_333, GERM_375, GERM_378, GERM_425, GERM_449, GERM_464] }
		  ]
		}
	]
};

var physicsMinor = {
	name:  "Physics Minor",
	type:  MINOR_REQ,
	categories: [
		{ name:   "Core",
		  sections:  [
			{type: 0, courses: [PHYS_160, PHYS_260, PHYS_360, PHYS_390]}
		  ]
		}
	]
}

var bachelorOfScience = {
	name:  "LSA Bachelor of Science Requirements",
	type:  GENERAL_REQ,
	categories: [
		{ name:  "General Requirements",
		  sections: [
			{type: 1, name:  "First Year Writing", req:FYWR},
			{type: 1, name:  "Upper Level Writing", req:ULWR},
			{type: 1, name:  "Quantitative Reasoning", req:QR},
			{type: 1, name:  "Race and Ethnicity", req:RE}
		  ]
		},
		{ name:  "Distribution",
		  sections: [
			{type: -10, name:  "Humanities", req:HU},
			{type: -7, name:  "Natural Science", req:NS},
			{type: -7, name:  "Social Science", req:SS},
			{type: -3, name:  "Interdisciplinary", req:ID},
			{type: -3, name:  "Math & Symbolic Analysis", req:MSA}
		  ]
		}
	]
}
