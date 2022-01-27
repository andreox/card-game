({
    startGame : function(component, event, helper) {
        let gameModeComboBox = component.find("gameMode") ;

        let selectedValue = gameModeComboBox.get("v.value") ;
        
        const selectedMode = component.get("v.selectedMode") ;
        component.set("v.selectedMode",selectedValue);
        console.log('The game mode is '+selectedValue);

        if (selectedMode) {
            const boardComp = component.find("boardComp") ; //Find the method in Board component
            boardComp.startGame(); //call the Aura method in Board component!
        }
        //alert('The game mode is '+selectedValue);
    },

    reshuffleBoard : function(component, event, helper) {
        const boardComp = component.find("boardComp") ;
        boardComp.reshuffleBoard() ;
        component.set("v.reshuffleDisabled",true) ;
    },

    onResultHandler : function(component, event, helper) {
        const result = event.getParam("result") ;
        if ( result === "win") {
            component.set("v.reshuffleDisabled",true) ;
            console.log("Result is : "+result) ;
            helper.showToast("YOU WIN", "Hooray!!", "success") ;
        } 
        else {
            component.set("v.reshuffleDisabled",false) ;
            console.log("RESULT is : "+result);
            helper.showToast("YOU LOSE", "Reshuffle the board to keep playing!", "error") ;
        }

        helper.addResultRecord(component, result) ;
    }
})
