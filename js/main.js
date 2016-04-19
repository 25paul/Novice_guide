/**
 * Created by CXJ on 2016/4/4.
 */
window.onload = function(){
    var oMask = document.getElementById("mask");
    var oSearch = document.getElementById("searchTip");
    var aStep = oSearch.getElementsByTagName("div");
    var aA = oSearch.getElementsByTagName("a");
    var aClose = oSearch.getElementsByTagName("span");

    //读取cookies
    var res = document.cookie.substring(5);      //从第五个开始读起，这样才读到所要的值
 //   alert(res);   //一开始没有cookie时时空的
    //没有cookie时执行下一步动作
    if(res!="www.baidu.com"){
        alert("你还没有登录过呢");

        //把mask  父框  第一单元显示出来
        oMask.style.display = oSearch.style.display = aStep[0].style.display = "block";

        //下一步按钮
        for(var i = 0;i < aStep.length;i++){
            //给每一个aA增加一个索引,加一个index属性，为后面单元所用
            aA[i].index = i;
            aA[i].onclick = function(){
                this.parentNode.style.display = "none";   //父框隐藏

                //判断，否则会出现点击最后一个单元时还会执行，这时就会报错
                if(this.index < aStep.length - 1){
                    aStep[this.index + 1].style.display = "block";
                }
                else{
                    oMask.style.display = oSearch.style.display = "none";
                }
            }
        }
    }


    //关闭按钮
    for(var i = 0;i < aClose.length;i++){
        aClose[i].onclick = function(){
            oMask.style.display = oSearch.style.display = "none";
        }
    }

    //写cookies
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+30);//把当前时间设置为30天之后
    //alert(oDate);
    document.cookie = "name=www.baidu.com;expires="+oDate;
}
