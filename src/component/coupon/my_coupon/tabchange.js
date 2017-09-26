/**
 * Created by Qiaodan on 2017/9/26.
 */


var couponTabChange={

    moveTab:function(){

        var clickEle=document.getElementsByClassName('coupon_label')[0].getElementsByClassName('label_part');

        var allTabEle=document.getElementsByClassName('all_coupon_tabs')[0];




        for(var i=0;i< clickEle.length;i++){

            clickEle[i].addEventListener('click',tabMoveFn,false);


        }



        function tabMoveFn(e){

            document.getElementsByClassName('show')[0].className= document.getElementsByClassName('show')[0].className.replace('show',"");

            this.className=this.className+" show";

            var thisIndex=getRightIndex();

            var thisWindowWidth=window.innerWidth;

            var moveDis=-thisWindowWidth*thisIndex;

            console.log(moveDis)


            allTabEle.style.transform='translate3d('+moveDis+'px,0,0)';



            /*  var evt=e||window.event;

             var thisTargetEle=evt.srcElement||evt.target;

             if(thisTargetEle.className.indexOf('label_part')>-1){

             document.getElementsByClassName('show')[0].className= document.getElementsByClassName('show')[0].className.replace('show',"")

             thisTargetEle.className=thisTargetEle.className+' show';

             }else {
             var thisParentEle=thisTargetEle.parentNode;

             for(var i=0;i<20;i++){

             if(thisParentEle.className.indexOf('label_part')>-1){

             document.getElementsByClassName('show')[0].className= document.getElementsByClassName('show')[0].className.replace('show',"")

             thisParentEle.className=thisParentEle.className+' show';

             break

             }else {
             thisTargetEle= thisParentEle;
             }


             }
             }

             */

        }
        function getRightIndex(){
            for(var j=0;j< clickEle.length;j++){

                if(clickEle[j].className.indexOf('show')>-1){

                    return j
                }
            }
        }




    }
}
