var videos = [
	{link: 'https://www.youtube.com/watch?v=Qg3XOfioapI',
	title: "Kolmogorov Music",
	summary: "About complexity of data and how that can be applied to music",
	type:"repo"},
	{link: "https://www.youtube.com/watch?v=7_m7JCLKmTY",
	title:"BayesDB: Query the Probable Implications of Data",
	summary: "About a database that instead of just returning a select number of rows of data instead returns the data and the confidence in that returned result. So you could ask: what type of satellite has a mass of 500kg? And the database will return a set of rows with the most probable satellites that satisfy the question.",
	type: "repo"},
	{
		link: "https://www.youtube.com/watch?v=uEFrE6cgVNY",
		title: "Evidence-Oriented Programming",
		summary: "Why do programming languages write the way they do? What is the data that writing for(int i ..) is the best way of writing a loop? Argues that that programming languages should be designed based on studies of what is most efficient. Also talks a bit about blind people programming, and how that is really hard because languages don't really support that.",
		type: "repo"
	},
	{
		link: "https://www.youtube.com/watch?v=JMP6gI5mLHc",
		title: "Category theory, the essence of interface-based design",
		summary: "The basics of category theory and how it relates to programming language design. Derives method reference in java from category theory. I don't fully understand the material, but it was interesting to watch. I need to rewatch it",
		type: "repo"
	}
]

var projects = [
	{link: "http://simonfra.se/Breach/",
	repo: "https://github.com/TerribleProductions/BREACH",
	title: "Breach",
	description: "Couch-competetive shooter developed over 6 weeks for course in game development",
	type:"project"},
	{
	repo: "https://github.com/JacobNorlin/DH2642Project",
	title: "Playmate",
	description: "Angular site for coordinating schedules for playing video games.",
	type:"project"},
	{link: "http://jnorlin.me",
	repo: "https://github.com/JacobNorlin/jnorlin-me",
	title: "jnorlin.me",
	description: "This website. A repository for lifelong learning and a project in playing with reactJS",
	type:"project"}
	]


var experience = [
	{workplace: "Silex microsystems",
	location: "Järfälla, Sweden",
	title: "Production operator",
	description: "Work in a clean room in charge of operating the machines producing microchips. The work placed a high demand on attention to detail, decision making and planning.",
	timeRange: ["June 10 - August 10", "June 13 - August 13"],
	type:"experience"
	},
	{workplace: "LeQuest BV",
	location: "Delft, Netherlands",
	title: "Frontend Developer",
	description: "Development of canvas based animations using JavaScript and CreateJS in an agile environment. The work placed a demand on collaborating with designers as well as other programmers.",
	timeRange: ["February 14 - June 14"],
	type: "experience"
	}
]
export {videos, projects, experience};



var d = {link: "",
	repo: "",
	title: "",
	description: "",
	type:"project"}