if (Ext.BLANK_IMAGE_URL.substr(0,5) != 'data:') {
  Ext.BLANK_IMAGE_URL = '/ext/resources/images/default/s.gif';
}
Ext.onReady(function() { 
    Ext.Msg.show({
        title: 'Milton',
        msg: 'Have you seen my stapler?',
        buttons: { 
            yes: true, 
            no:true, 
            cancel:true 
        },
        fn: function(btn) {
            switch(btn) {
                case 'yes':
                  Ext.Msg.prompt('Milton', 'Where is it?', function(btn,txt) {
                    if (txt.toLowerCase() == 'the office') {
                      Ext.get('my_id').dom.innerHTML = 'Dull work';
                    } else {
                       Ext.get('my_id').dom.innerHTML = 'Exciting work';
                    }
                });
                break;
                case 'no':
                  Ext.Msg.alert('Milton', 'I\'m going to burn the building down', function(){
                    Ext.DomHelper.applyStyles(Ext.getBody(),{
                        'background-color': '#FF0000'
                    });
                    Ext.getBody().highlight('FFCC00', {
                        endColor: 'FF0000',
                        duration: 6
                    });
                });
                break;
                case 'cancel':
                  Ext.Msg.wait('Saving tables to disk', 'File / Copy');
                break;              
            }
        }
    });
});