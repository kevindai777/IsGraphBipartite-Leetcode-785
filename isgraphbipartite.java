//Java Solution

class Solution {
    public boolean isBipartite(int[][] graph) {
        int[] color = new int[graph.length];
        Arrays.fill(color, -1);
        
        for (int i = 0; i < graph.length; i++) {
            if (color[i] == -1) {
                Stack<Integer> stack = new Stack<>();
                stack.push(i);
                
                while (!stack.isEmpty()) {
                    int node = stack.pop();
                    
                    for (int neighbor : graph[node]) {
                        if (color[neighbor] == -1) {
                            stack.push(neighbor);
                            color[neighbor] = color[node] ^ 1;
                        } else if (color[neighbor] == color[node]) {
                            return false;
                        }
                    }
                }
            }
        }
        
        return true;
    }
}