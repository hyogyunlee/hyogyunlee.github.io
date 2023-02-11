var Body={
    Color:function(color){
        document.querySelector('body').style.color=color;
    },
    BackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}
var Links={
    LinkColor:function(color){
        var i=0;
        var alist=document.querySelectorAll('a');
        while(i<alist.length){
            alist[i].style.color=color;
            i=i+1;
        }
    }
}
var button=document.querySelector('#night_day');
button.addEventListener('click',function(){
    var target=document.querySelector('body');
    if(this.value==='night'){
        Body.BackgroundColor('black');
        Body.Color('white');
        this.value='day';
        Links.LinkColor('powderblue');
    }
    else{
        Body.BackgroundColor('white');
        Body.Color('black');
        this.value='night';
        Links.LinkColor('black');
    }
})