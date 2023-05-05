export const  BreadthFirstDesc = {
  title: 'Breadth First Search',
  description: (
    <p>
      <a
        href="https://simple.wikipedia.org/wiki/Breadth-first_search"
        target="_blank"
        rel="noopener noreferrer"
      >
        BFS
      </a>{' '}
        breadth-first search (BFS) is a method used for traversing a graph. It starts at any item you want to use as a starting position in a graph, and explores all of the neighbor items at the present depth before to moving on to the items at the next depth level. A breadth-first search done on a tree (data structure) is called a level-order traversal. 
    </p>
  ),
  worstCase: (
    <span>
      O(|V|) where V is the number of nodes
    </span>
  ),
  avgCase: (
    <span>
      O(|V|)
    </span>
  ),
  bestCase: <span>O(1)</span>,
  space: <span>O(|V|)</span>,
  codeString:`function bfs(graph, start_vertex):
    queue = []
    visited = {}
    for vertex in graph:
        visited[vertex] = False
    queue.append(start_vertex)
    visited[start_vertex] = True
    while queue:
        current_vertex = queue.pop(0)
        print(current_vertex)
        for neighbor in graph[current_vertex]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)`
};
