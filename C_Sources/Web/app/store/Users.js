Ext.define("Igor.store.Users", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.User',
        pageSize: 5,
        autoLoad: true,
        sorters: 'date',
        grouper: {
            groupFn: function(record) {
                return record.get('!username');
            }
        },
        proxy: {
            type: 'ajax',
            url: 'data/users.json'
        }
        /*proxy: {
            type: 'jsonp',
            noCache: false,
            enablePagingParams: false,
            url: 'https://igor-assistant-ca-2012.appspot.com/igor/user/get_user_detail/2004',
            reader: {
                type: 'json',
                rootProperty: 'messages'
            }
        }*/
    }
});
