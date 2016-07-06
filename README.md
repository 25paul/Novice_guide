# Novice_guide
新手引导

首先，在HTML页面先设置“下一步”和“关闭”
<div id="searchTip">
    <div class="step1"><a>下一步</a><span title="关闭">关闭</span></div>
    <div class="step2"><a>下一步</a><span title="关闭">关闭</span></div>
    <div class="step3"><a>下一步</a><span title="关闭">关闭</span></div>
    <div class="step4"><a>下一步</a><span title="关闭">关闭</span></div>
    <div class="step5"><a>下一步</a></div>
</div>

在CSS样式表中
建立一个蒙版样式
#mask{
    height:200%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.5;
    filter:alpha( opacity=50);
    display: none;
}

设置一个父框，承载所有引导快
#searchTip{
    width: 980px;
    height: 625px;
    /*background-color: #333333;*/
    position: absolute;
    left: 50%;
    margin-left: -490px;
    /*opacity: 0.5;*/
    display: none; /*先让所有引导隐藏起来*/
}

设置每小块所需要的样式
#searchTip div{
    position: absolute;
    display: none;  /*把所有单元都隐藏*/
}
#searchTip div a{
    position: absolute;
    width: 95px;
    height: 32px;
    /*background-color: #DBDBDB;*//*方便查找*/
    text-indent: -999px;  /*将文本向负方向缩进，把文字移出有效区域*/
    overflow: hidden;
    cursor: pointer;
}
#searchTip div span{
    position: absolute;
    width: 30px;
    height: 30px;
    /*background-color: #DA0A0A;*/
    text-indent: -999px;  /*将文本向负方向缩进，把文字移出有效区域*/
    overflow: hidden;
    cursor: pointer;
}

然后再设置每小块的位置。


JS文件
设置下一步按钮
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
        
设置关闭按钮
for(var i = 0;i < aClose.length;i++){
        aClose[i].onclick = function(){
            oMask.style.display = oSearch.style.display = "none";
        }
    }
    
    
设置cookies
 var oDate = new Date();
    oDate.setDate(oDate.getDate()+30);//把当前时间设置为30天之后
    //alert(oDate);
    document.cookie = "name=www.baidu.com;expires="+oDate;
