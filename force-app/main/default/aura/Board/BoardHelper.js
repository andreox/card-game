({
    getWords : function(count) {

        if ( count > 100 ) return ;
        var wordsArray = ["Word1","Word2","Word3","Word4","Word5","Word6","Word7","Word8","Word9","Word10","Word11","Word12","Word13","Word14","Word15","Word16"] ; //insert here the words to play the game 

        wordsArray = this.randomizeArray(wordsArray) ; //this stands for "helper"
        return wordsArray.slice(0, count) ;
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
        return arr[randomIndex] ;

    },

    disableBoard : function(component) {
        
        component.set("v.boardDisabled",true) ;

    },

    enableBoard : function(component) {

        component.set("v.boardDisabled",false) ;
    }
})
