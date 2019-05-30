
var myChart1 = echarts.init(document.getElementById('main1'));
var option1 = {
    tooltip : {
        trigger: 'axis',
        formatter: function (params) {
            let res = params[0].name +'<br/>';
            for(var i=params.length-1;i>=0;i--){
                value = Math.floor(params[i].value*10000)/100+'%'
                res +=params[i].seriesName+"年:"+ value + '<br/>'
            }
            return res
        },
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
        }
    },
    legend: {
        data:['男','女']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },

    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLabel:{
                interval:1
            },
            name:"年份",
            axisLine:{
                lineStyle:{
                    color:"#DC9FB4",
                    width:2,
                }
            },
            label:{

            },
            data : ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']
        }
    ],
    yAxis : [
        {
            name:"百分比",
            type : 'value',
            splitLine:false,
            axisLine:{
                lineStyle:{
                    color:"#DC9FB4",
                    width:2,
                }
            },
            axisLabel:{
                formatter:function(params){
                    return params*100 + "%"
                }
            },
            axisTick:{
                type:"dashed"
            }

        }
    ],
    series : [
        {
            name:'男',
            type:'line',
            symbol:"none",
            smooth:true,
            stack: '总量',
            areaStyle: {},

            data:[0.029469418, 0.028216608, 0.026558455, 0.028346009, 0.024029923, 0.021977766, 0.020739601, 0.020427378, 0.01822635, 0.016363291, 0.015987747, 0.015618746, 0.01600913, 0.016441854, 0.016955933, 0.015316454],
            color:"#f2e9de",
        },
        {
            name:'女',
            type:'line',
            symbol:"none",
            smooth:true,
            stack: '总量',
            areaStyle: {},
            data:[0.072784195, 0.068632866, 0.06507038, 0.075339794, 0.063858141, 0.058170114, 0.054263517, 0.050749724, 0.04963602, 0.038666988, 0.036933193, 0.034303266, 0.037715956, 0.040479404, 0.040081795, 0.037469988],
            color:"#c75f65",
        },
    ]
};
myChart1.setOption(option1);