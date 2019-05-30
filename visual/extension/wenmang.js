var myChart5 = echarts.init(document.getElementById('main5'));
var option5 = {
    
    xAxis:{
        show: false,

        data:['男','女']
    },

    yAxis: {
        max: 25,
        show: false
    },
    series: [{
        name:'图一',
        type:'bar',
        barWidth : 122,//柱图宽度
        //barGap:'200%',/*多个并排柱子设置柱子之间的间距*/
        //barCategoryGap:'50%',/*多个并排柱子设置柱子之间的间距*/
        color:'#c75f65',


        data: [3,7.65],
        label: {
            normal: {

                //position: 'right',

                show: true,
                formatter:'{c}%' ,
                textStyle:{
                    fontSize: 16
                }

            }
        },
    }]
};
myChart5.setOption(option5);