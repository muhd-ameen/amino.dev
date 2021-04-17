
$(document).ready(function() {

$("#name").blur(function (){
    var text=$(this).val()
    if (text.length<4) {
        $("#err1").show()
       
    } else {
        $("#err1").hide()
       
    }
    var text1=$(this).val()
    if(/^[a-zA-Z]+$/.test(text1)==false){
        $("#err2").show()
       
    }else{
        $("#err2").hide()
       
    }
})

$("#emailinput").blur(function(){

    var inputvalues=$(this).val()
    if(/^[a-zA-Z0-9-.]+\@[a-zA-Z]+\.[a-zA-Z0-9]+$/.test(inputvalues)==false){
        $("#err2").show()
       
    }else{
        $("#err2").hide()
       
    }
})

$("#numberinput").blur(function (){
    var text2=$(this).val()
    if (text2.length<10) {
        $("#err3").show()
    
    } else {
        $("#err3").hide()
    
    }

    var text2=$(this).val()
    if(/^[0-9+-]+$/.test(text2)==false){
        $("#err2").show()
       
    }else{
        $("#err2").hide()
       
    }
})




  })
