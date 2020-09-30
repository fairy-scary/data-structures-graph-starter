function numRegions(graph) {
	let visited = new Set();
	let count = 0;
	for (let node in graph) {
		if (depthFirst(node, graph, visited)) count++;
	}

	return count;
}

function depthFirst(node, graph, visited) {
	if (visited.has(node)) return false;
	visited.add(node);
	graph[node].forEach((neighbor) => depthFirst(neighbor, graph, visited));
	return true;
}

let graph1 = {
	a: ["b"],
	b: ["a"],
	c: ["d"],
	d: ["e", "c"],
	e: ["d"]
};

let graph2 = {
	q: ["r"],
	r: ["q"],
	s: ["t"],
	t: ["s", "u", "v"],
	u: ["t", "v"],
	v: ["u", "t"],
	w: []
};

console.log(numRegions(graph1));

module.exports = {
	numRegions
};
