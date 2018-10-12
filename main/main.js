    var a=prompt("请输入一个数组（用,隔开）");
    var f=a.split(",");
    var dataIntArr=[];
    dataIntArr=f.map(function(data){
        return +data;
    });
    console.log(dataIntArr);
    function avg(dataIntArr) {
        var avg=0;
        for(var i=0;i<dataIntArr.length;i++){

            avg+=parseFloat(dataIntArr[i]);
        }
        return avg/dataIntArr.length;
    }
    alert("o)最小值 ="+Math.min.apply(Math, dataIntArr)+
    '\n'+"o)最大值 ="+Math.max.apply(Math, dataIntArr)+
    '\n'+"o)元素数量 ="+dataIntArr.length+
    '\n'+"o)平均值 ="+avg(dataIntArr))