let { GraphNode } = require("./graph_node");

function breadthFirstSearch(startingNode, targetVal) {
	let queue = [startingNode];
	let visited = new Set();

	while (queue.length) {
		let node = queue.shift();
		if (visited.has(node.val)) continue;
		visited.add(node.val);
		if (node.val === targetVal) return node;
		queue.push(...node.neighbors);
	}
	return null; // targetVal not found
}

// let a = new GraphNode("a");
// let b = new GraphNode("b");
// let c = new GraphNode("c");
// a.neighbors = [b, c];
// console.log(breadthFirstSearch(a, "c")); // .to.equal(c);
// console.log(breadthFirstSearch(a, "a")); // .to.equal(a);

module.exports = {
	breadthFirstSearch
};
