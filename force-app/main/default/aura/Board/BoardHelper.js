({
    getWords : function(count) {

        if ( count > 100 ) return ;
        var wordsArray = ["Word1","Word2","Word3","Word4","Word5","Word6","Word7","Word8","Word9","Word10","Word11","Word12","Word13","Word14","Word15","Word16"] ; //insert here the words to play the game 

        wordsArray = this.randomizeArray(wordsArray) ; //this stands for "helper"

        //open = false property! Useful to make each Block blank after playing
        const wordObjArray = wordsArray.map( (element) => { //element is a Word. I'm creating an object with a String and a Boolean attribute.
            return { word : element, open : false} ;
        }) ;
        return wordObjArray.slice(0, count) ;
    },

    randomizeArray : function(arr) {

        const randomArr = arr ;
        for ( let i = randomArr.length - 1; i > 0 ; i-- ) {
            const j = Math.floor(Math.random() * i ) ;
            const temp = randomArr[i] ;
            randomArr[i] = randomArr[j] ;
            randomArr[j] = temp ;
        }

        return randomArr ;
    },

    getWinWord: function(arr) {

        const randomIndex = Math.floor(Math.random() * arr.length) ;
        //return arr[randomIndex] ; after changing array to a map, i need to make some changes :
        return arr[randomIndex].word ;
    },

    disableBoard : function(component) {
        
        component.set("v.boardDisabled",true) ;

    },

    enableBoard : function(component) {

        component.set("v.boardDisabled",false) ;
    },

    resetBoard : function(component, event, helper) {
        this.enableBoard(component) ;
        component.set("v.clickCount",0) ;
        component.set("v.result","") ;
    },

    fireResultEvent : function(resultValue) {
        const appevent = $A.get("e.c:ResultApplicationEvent") ;
        appevent.setParams({result: resultValue }) ;
        appevent.fire() ;
    }
})
