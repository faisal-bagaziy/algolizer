export const  DepthFirstDesc = {
  title: 'Depth First Search',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Depth-first_search"
        target="_blank"
        rel="noopener noreferrer"
      >
        DFS
      </a>{' '}
        A depth-first search (DFS) is an algorithm for traversing a finite graph. DFS visits the child vertices before visiting the sibling vertices; that is, it traverses the depth of any particular path before exploring its breadth. A stack (often the program's call stack via recursion) is generally used when implementing the algorithm.
    </p>
  ),
  worstCase: (
    <span>
      O(V+E), where V is the number of nodes and E the number of edges
    </span>
  ),
  avgCase: (
    <span>
      O(|V|)
    </span>
  ),
  bestCase: <span>O(1)</span>,
  space: <span>O(V<sup>2</sup>)</span>,
  codeString:`dfs(graph, start_node, visited)
    visited[start_node] = True
    for neighbor in graph[start_node]
        if not visited[neighbor]
            dfs(graph, neighbor, visited)`
};
