const constants = function() { };

constants.KANBAN_BOARD = 'Kanban Board';
constants.KANBAN_COLUMNS =[
    {
        title: 'To Do',
        tasks: [],
        statusColor: '#87CEFA'
    },
    {
        title: 'In Progress',
        tasks: [],
        statusColor: '#FFA500'
    },
    {
        title: 'Done',
        tasks: [],
        statusColor: '#32CD32'
    }
]
constants.SEARCH_TASK_PLACEHOLDER = 'Search Tasks'
constants.TODO = 'To Do'
constants.ADD_A_NEW_TASK = 'Add a New Task'
constants.NO_TASKS = 'No Tasks!'
constants.CANCEL = 'Cancel'
constants.ADD = 'Add'
constants.CLOSE = 'Close'
constants.TASK_DETAILS = 'Task Details'


export default constants;