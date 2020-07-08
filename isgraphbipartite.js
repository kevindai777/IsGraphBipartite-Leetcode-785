//Objective is to see if a graph is bipartite

let graph = [[1,3],[0,2],[1,3],[0,2]]


//O(n) that visits each node once

let color = new Array(graph.length).fill(-1)
    
for (let i = 0; i < graph.length; i++) {
    //If it's unvisited, push it into the stack and update the color
    if (color[i] == -1) {
        let stack = [i]
        color[i] = 0
            
        while (stack.length > 0) {
            let node = stack.pop()
            for (let neighbor of graph[node]) {
                //If the node is unvisited, push it into the stack and update it's color
                if (color[neighbor] == -1) {
                    stack.push(neighbor)
                    color[neighbor] = color[node] ^ 1
                //If a neighbor's color is the same as the node's color, it is not bipartite
                } else if (color[neighbor] == color[node]) {
                    return false
                }
            }
        }
    }
}
    
return true