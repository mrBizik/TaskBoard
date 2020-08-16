Ext.define('TaskBoard.Application', {
	extend: 'Ext.app.Application',
	name: 'TaskBoard',
	requires: ['TaskBoard.*'],
	defaultToken: 'homeview',

	launch: function () {
		// Ext.ariaWarn = Ext.emptyFn
		// Ext.getBody().removeCls('launching')
		const elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)

		// const whichView = 'mainview';
		// Ext.create({xtype: whichView, plugins: 'viewport'});
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
