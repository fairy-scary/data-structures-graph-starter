function maxValue(node, visited=new Set()) {
    let max = node.val;
    let queue = [ node ];

    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node)) continue;
        if (max <= node.val)  max = node.val;
        visited.add(node);
        queue.push(...node.neighbors)
    }
    return max;
}

module.exports = {
    maxValue
};