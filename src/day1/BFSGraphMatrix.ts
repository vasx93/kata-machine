export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const prev = new Array(graph.length).fill(-1);
    const seen = new Array(graph.length).fill(false);

    seen[source] = true;

    const queue = [source];

    // start at source
    // move through all adjacent nodes
    // check connection (0/1)
    // if not already seen the node update
    // add to seen array, mark it in prev that it came from current one

    while (queue.length) {
        const curr = queue.shift() as number;
        if (curr === needle) break;

        const adjs = graph[curr];

        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0 || seen[i]) continue;

            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }
    }
    // if no "parent"
    if (prev[needle] === -1) return null;

    let curr = needle;
    const output: number[] = [];

    // traverse back to source so we get the path
    while (prev[curr] !== -1) {
        output.push(curr);
        curr = prev[curr];
    }

    // add source as start node
    return [source].concat(output.reverse());
}
