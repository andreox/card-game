({
    doInit : function(component, event, helper) {

        console.log("Initalization completed") ;
        const gameMode = component.get("v.mode") ;
        let column = 0 ;
        if (gameMode && gameMode == "Hard") { //if not equal to nall and game mode is equal to hard 
            column =  6 ;
        } else if ( gameMode === "Medium") {
            column = 4 ;
        } else {
            column = 3 ;
        }
        let blockSize = 12/column ;
        component.set("v.blockSize",blockSize);

        const words = helper.getWords(column*column) ;
        component.set("v.words", words) ;
        console.log("Test : "+words) ;
        const win_word = helper.getWinWord(words) ;
        component.set("v.winWord",win_word) ;
        console.log("Win word: "+win_word) ;
    },

    doRender : function(component, event, helper) {
        console.log("Render completed") ;
    }
})