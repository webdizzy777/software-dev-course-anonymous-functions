/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 }, 
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 }, 
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
  const incomplete = todos.filter(toDoList =>  toDoList["completed"] === false);
  
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
 const priority = [...todos].sort((toDoPriorityA, toDoPriorityB) => toDoPriorityA.priority - toDoPriorityB.priority);
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
  const completeList = todos.map(incompleteList =>{
    return {...incompleteList, completed: true };
  });

  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
  const prioritizedIncomplete = [...todos].filter(incompletedToDo => incompletedToDo["completed"] === false).sort((incompletedA, incompletedB) => incompletedA.priority - incompletedB.priority);

  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  // console.log("Incomplete Tasks:", ...);
  console.log("\nIncomplete Tasks:", incomplete);

  // console.log("Sorted by Priority:", ...);
  console.log("\nSorted by Priority:", priority);

  // console.log("All Tasks Completed:", ...);
  console.log("\nAll Tasks Completed:", completeList);

  // console.log("Sorted Incomplete Tasks:", ...);
  console.log("\nSorted Incomplete Tasks:", prioritizedIncomplete);