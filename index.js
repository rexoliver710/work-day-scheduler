var currenthour=moment().hours()
$(".saveBtn").click(function(){
var textvalue=$(this).siblings(".description").val()
var id=$(this).parent().attr("id")
localStorage.setItem(id,textvalue)
})

var today=moment().format("MMM Do, YYYY")
$("#currentDay").text(today)
$(".time-block").each(function(){
    var timeid=$(this).attr("id")
    if(timeid>currenthour){
        $(this).addClass("future")
    }else if(timeid < currenthour){
        $(this).addClass("past")
    }else{
        $(this).addClass("present")
    }

    var storage=localStorage.getItem(timeid)
    $(this).find($(".description")).val(storage)
})