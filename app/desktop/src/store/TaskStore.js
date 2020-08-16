/**
 * Стор, получающий массив тикетов
 */
Ext.define('TestTask.store.TaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.taskstore',
    model: 'TestTask.model.Task',
	proxy: {
		type: 'ajax',
		reader: {
            type: 'json',
            url: '/resources/desktop/tikets.json',
			rootProperty: 'items'
		}
	}
});
