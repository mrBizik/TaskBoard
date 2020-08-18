Ext.define('TaskBoard.view.board.tiket.TiketView', {
    extend: 'Ext.panel.Panel',
    xtype: 'tiketview',
    requires: [
        'Ext.XTemplate',
    ],
    cls: 'tiketview',
    title: 'Info',
    config: {
        tiket: null,
    },
    tpl: new Ext.XTemplate(
        '<div class="tiket-wrap">',
        '<div class="tiket-base-info">',
        '<div class="tiket-id">{tiket.id}</div>',
        '<div class="tiket-name">{tiket.name}</div>',
        '<div class="tiket-status">Status: {tiket.status}</div>',
        '<div class="tiket-date">Date created: {tiket.dateString}</div>',
        '</div>',
        '<div class="tiket-status-info">',
        '<div class="tiket-user-name">Owner: {tiket.firstName} {tiket.secondName}</div>',
        '<div class="tiket-priority">Priority: {tiket.priority}</div>',
        '</div>',
        '</div>',
    ),
    updateTiket: function(newTiket, oldTiket) {
        this.setData({
            tiket: newTiket.getData(),
        });
    }
});