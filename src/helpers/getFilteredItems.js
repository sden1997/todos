

export const getFilteredItems = (todos, filter) => 
    todos.filter(({checked}) => 
        filter === 'All' || (filter === 'Completed' ? checked : !checked)
    );