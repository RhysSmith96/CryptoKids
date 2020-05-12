// Searches for canvas ID tag
var canvas = document.getElementById("canvas");
//Finds the first element with the name of Select, returns first element of array
var select = document.getElementsByTagName("select")[0];

//Sets height and width
var height = 204;
var width = 204;

//Scalable vector graphics, creates the element with an additional namespace
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute('width', width); //sets the width
svg.setAttribute('height', height); //sets the height
svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"); //pulling attributes from w3 


//This has been created to enable efficiency to typing out and appending the circles
var create = function(type, param) {

	var o = document.createElementNS('http://www.w3.org/2000/svg', type);

	for (var i in param) {
		o.setAttribute(i, param[i]);
	}
	return o;
}

//creates the circles for the vector
var circle = create("circle", { cx: width / 2, cy: height / 2, r: 100, fill: "white", stroke: "#111", "stroke-width": 2 });
svg.appendChild(circle);
//adds to the svg variable
var circle = create("circle", { cx: width / 2, cy: height / 2, r: 80, fill: "#8142f5", stroke: "#111", "stroke-width": 2 });
svg.appendChild(circle);

var circle = create("circle", { cx: width / 2, cy: height / 2, r: 62, fill: "white", stroke: "#111", "stroke-width": 2 });
svg.appendChild(circle);

var circle = create("circle", { cx: width / 2, cy: height / 2, r: 7, fill: "black", stroke: "none" });
svg.appendChild(circle);


var group = create("g", {}); //creates the outer circle
var P = [];
var off = 1 / 26 * 360; //How many degrees it has to shift round the circle
for (var i = 0; i < 26; i++) { //Any number between 0-25 increment

	var alpha = i / 26 * Math.PI * 2; //Trigonometry - working out the x/y coord for the circle points
	var x = Math.cos(alpha) * 86 + width / 2; //The x axis going through Cosine
	var y = Math.sin(alpha) * 86 + height / 2; //the y axis going through Sine
	var text = create("text", { style: "font-size:14px; fill: #17105a", transform: "translate(" + x + ", " + y + ")rotate(" + (alpha + Math.PI / 2) / Math.PI * 180 + ")" });
	//Create type text (character string), Creates a html text, css transform(moves) the circle depending on the rotation.
	text.textContent = String.fromCharCode(i + 65); // FromCharCode = alphabet
	group.appendChild(text); //append the text to the group

	P.push("M"); //adds * to the array, returning the new length
	P.push(Math.cos(alpha - off) * 80 + width / 2); //adds the cosine value to the array
	P.push(Math.sin(alpha - off) * 80 + height / 2); //adds the sine value to the array
	P.push("L");
	P.push(Math.cos(alpha - off) * 100 + width / 2);
	P.push(Math.sin(alpha - off) * 100 + height / 2);
}
svg.appendChild(group);


var path = create("path", { d: P.join(" "), stroke: "#111" }); //moves along the path
svg.appendChild(path);

select.onchange = function(ev) { //retrieves the newly changed value for computing
	state.ac = (26 - ev.target.value) / 26 * 360;
};

//creates the circle that moves.
var group = create("g", {}); //creates the inner circle
var P = [];
for (var i = 0; i < 26; i++) {
	var alpha = i / 26 * Math.PI * 2;
	var x = Math.cos(alpha) * 67 + width / 2;
	var y = Math.sin(alpha) * 67 + height / 2;
	var text = create("text", { style: "font-size:12px; fill: white", transform: "translate(" + x + ", " + y + ")rotate(" + (alpha + Math.PI / 2) / Math.PI * 180 + ")" });
	text.textContent = String.fromCharCode(i + 65);
	group.appendChild(text);

	P.push("M");
	P.push(Math.cos(alpha - off) * 80 + width / 2);
	P.push(Math.sin(alpha - off) * 80 + height / 2);
	P.push("L");
	P.push(Math.cos(alpha - off) * 62 + width / 2);
	P.push(Math.sin(alpha - off) * 62 + height / 2);
}
var path = create("path", { d: P.join(" "), stroke: "#111" });
group.appendChild(path);
svg.appendChild(group);



canvas.appendChild(svg); //adds the graphics to the canvas for visibility

var state = {
	init: false,
	c: (26 - 13) / 26 * 360, //clockwise rotation
	ac: (26 - 13) / 26 * 360 //anti-clockwise rotation

};

function loop() { //the loop for manuevering the circle dependent on the value
	if (Math.abs(state.c - state.ac) > 1e-2 || !state.init) {
		group.setAttribute("transform", "translate(" + (width / 2) + ", " + (height / 2) + ")rotate(" + state.c + ")translate(" + (-width / 2) + ", " + (-height / 2) + ")");
		state.init = true;
	}
	state.c += (state.ac - state.c) * 0.1;
	window.requestAnimationFrame(loop); //repaints the animation
}
window.requestAnimationFrame(loop);