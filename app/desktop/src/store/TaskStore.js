/**
 * Стор, получающий массив тикетов
 */
Ext.define('TaskBoard.store.TaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.taskstore',
    model: 'TaskBoard.model.Task',
	proxy: {
		type: 'ajax',
		url: '/resources/desktop/tikets.json',
		reader: {
            type: 'json',
			rootProperty: 'items',
		}
	}
});
