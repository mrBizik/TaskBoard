Ext.define('TaskBoard.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',
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
	}
});
