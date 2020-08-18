Ext.define('TaskBoard.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',
	data: {
		selectedTask: null,
	},
	stores: {
		allTasks: {
			type: 'taskstore',
			autoLoad: true,
		},
		planTasks: {
			type: 'statustaskstore',
			source: '{allTasks}',
			status: 'PLAN',
		},
		inProgressTasks: {
			type: 'statustaskstore',
			source: '{allTasks}',
			status: 'IN PROGRESS',
		},
		testingTasks: {
			type: 'statustaskstore',
			source: '{allTasks}',
			status: 'TESTING',
		},
		doneTasks: {
			type: 'statustaskstore',
			source: '{allTasks}',
			status: 'DONE',
		},
	}
});
