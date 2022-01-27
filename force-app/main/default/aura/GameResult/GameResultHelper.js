({
    fetchResult : function(component) {

       //create apex method collection
       const action = component.get("c.getResults") ; //c. represents APEX CONTROLLER here

       //define a callback 
       action.setCallback(this, function(response) {
           const state = response.getState() ;
           if ( state === 'SUCCESS' ) {
               const resp = response.getReturnValue() ;
               component.set("v.data",resp) ;
           }
       }) ;
       //call apex method ( in async way, so callback will be called only when the server answers from enqueue action )
       $A.enqueueAction(action) ;    }
})
