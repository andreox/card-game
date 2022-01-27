({
    addResultRecord : function(component, gameResult) {
        //create apex method collection
        const action = component.get("c.addResult") ; //c. represents APEX CONTROLLER here
        const modeValue = component.get("v.selectedMode").toUpperCase() ;
        //set parameters
        action.setParams({
            result: gameResult.toUpperCase(),
            mode : modeValue 
        }) ;
        //define a callback 
        action.setCallback(this, function(response) {
            const state = response.getState() ;
            if ( state !== 'SUCCESS' ) {
                console.error("Error in saving record") ;
            }
        }) ;
        //call apex method ( in async way, so callback will be called only when the server answers from enqueue action )
        $A.enqueueAction(action) ;
    },

    showToast : function(titleValue, messageValue, typeValue) {
        var toastEvent = $A.get("e.force:showToast") ;
        toastEvent.setParams({
            "title" : titleValue,
            "message" : messageValue,
            "type" : typeValue
        }) ;
        toastEvent.fire() ;
    }
})
