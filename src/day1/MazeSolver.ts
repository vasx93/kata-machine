export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        // each row is the same size, maze is square
        // fill seen with false > unvisited points
        const rowSize = maze[0].length;
        seen.push(Array(rowSize).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // base cases

    // finished
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    // off the map
    else if (
        curr.x < 0 ||
        curr.x >= maze[0].length || // horizontal size
        curr.y < 0 ||
        curr.y >= maze.length // vertical size
    )
        return false;
    // on the wall
    else if (maze[curr.y][curr.x] === wall) return false;
    // seen
    else if (seen[curr.y][curr.x]) return false;

    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    const dir = [
        [-1, 0], // left
        [1, 0], // right
        [0, -1], // up
        [0, 1], // down
    ];

    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path))
            return true;
    }
    // post
    path.pop();
    return false;
}
