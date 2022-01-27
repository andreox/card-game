({
    doInit : function(component, event, helper) {
            const columns = [ //Read documentation for more infos   
                    {label: 'Game Number', fieldName: 'Name', type: 'text'},
                    {label: 'Mode', fieldName: 'Mode__c', type: 'text'},
                    {label: 'Played On', fieldName: 'CreatedDate', type: 'date'},
                    {label: 'Result', fieldName: 'Result__c', type: 'text'}
            ] ;
            component.set("v.columns",columns) ;

            //get previous results
            helper.fetchResult(component) ;
    },

    onResultHandler : function(component, event, helper) { //When a game ends, update the Game Result board! This is linked to the event defined previously in BoardPanel, copied in GameResult component also!

        helper.fetchResult(component) ;

    }

});
