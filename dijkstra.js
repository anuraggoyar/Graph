class Node {
    constructor(x, y, distance) {
        this.x = x;
        this.y = y;
        this.distance = distance;
    }
}

function findSmallestDistance(grid, src, des) {
    let dis = new Array(n);  // Initialize dis as an array
    let origin = new Array(n);  // Initialize origin as an array

    const rows = [-1, 0, 1, 0];
    const cols = [0, -1, 0, 1];

    for (let i = 0; i < n; i++) {
        dis[i] = new Array(n);  // Initialize dis[i] as an array
        origin[i] = new Array(n);  // Initialize origin[i] as an array
        for (let j = 0; j < m; j++) {
            dis[i][j] = 100000000;
            origin[i][j] = m * i + j;
        }
    }

    dis[src[0]][src[1]] = 0;

    let queue = [new Node(src[0], src[1], 0)];

    while (queue.length != 0) {
        var node = queue[0];
        queue.splice(0, 1);

        for (let i = 0; i < 4; i++) {
            let nr = node.x + rows[i];
            let nc = node.y + cols[i];

            if (nr >= 0 && nc >= 0 && nr < n && nc < m && grid[nr][nc] != -1) {
                if (dis[nr][nc] > 1 + dis[node.x][node.y]) {
                    dis[nr][nc] = 1 + dis[node.x][node.y];
                    let newNode = new Node(nr, nc, dis[nr][nc]);

                    // Find the sorted index to insert the new node
                    const insertIndex = queue.findIndex(node => node.distance < newNode.distance);

                    // Insert the new node at the appropriate index
                    if (insertIndex === -1) {
                        queue.push(newNode); // Insert at the end if no greater distance found
                    } else {
                        queue.splice(insertIndex, 0, newNode); // Insert at the found index
                    }

                    origin[nr][nc] = node.x * m + node.y;
                }
            }
        }
    }
    updateGridWithShortestPath(origin, src, des);
}