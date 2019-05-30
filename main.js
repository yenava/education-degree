var echarts = require('echarts');
var myChart1 = echarts.init(document.getElementById('main1'));
var option1 = {
    title: {
        text: '未上过学男女比例'
    },
    tooltip : {
        trigger: 'axis',
        formatter: function (params) {
                let res = params[0].name +'<br/>';
               for(var i=0;i<params.length;i++){
                    value = Math.floor(params[i].value*10000)/100 + '%'
                    res +=params[i].seriesName + ": " + value + '<br/>'
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
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine:false,

        }
    ],
    series : [
        {
            name:'男',
            type:'line',
            smooth:true,
            stack: '总量',
            areaStyle: {},
            
            data:[0.029469418, 0.028216608, 0.026558455, 0.028346009, 0.024029923, 0.021977766, 0.020739601, 0.020427378, 0.01822635, 0.016363291, 0.015987747, 0.015618746, 0.01600913, 0.016441854, 0.016955933, 0.015316454],
            color:"#f2e9de",
        },
        {
            name:'女',
            type:'line',
            smooth:true,
            stack: '总量',
            areaStyle: {},
            data:[0.072784195, 0.068632866, 0.06507038, 0.075339794, 0.063858141, 0.058170114, 0.054263517, 0.050749724, 0.04963602, 0.038666988, 0.036933193, 0.034303266, 0.037715956, 0.040479404, 0.040081795, 0.037469988],
            color:"#c75f65",
        },
    ]
};
myChart1.setOption(option1);


var myChart2 = echarts.init(document.getElementById('main2'));
var option2 = {
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            let res = params[0].name +'<br/>';
           for(var i=0;i<params.length;i++){
                value = Math.floor(params[i].value*10000)/100+'%'
                res +=params[i].seriesName +": "+ value + '<br/>'
           }
           return res
           } 
        },

    toolbox: {
        feature: {
            saveAsImage: {show: true}
        }
    },
    legend: {
        x: 'left',
        data:['小学男','小学女','初中男','初中女']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel:{rotate:-25}
        }
    ],
    yAxis : [
                {
                    type : 'value',
                    splitLine:false,
                    max:0.6
                }
            ],
    series: [
        {
            name:'小学男',
            type:'bar',
            color:'#f2e9de',
            data:[0.337407488409443, 0.321707046202669, 0.311414700312915, 0.323700069187873, 0.316763399509003, 0.301837330982611, 0.293849425867643, 0.282748154165276, 0.265755573622631, 0.255855406028053, 0.24971251096198, 0.245004435489933, 0.242908319108795, 0.246673214698747, 0.239285967660076, 0.235215403075527]
        },
        {
            name:'小学女',
            type:'bar',
            color:'#aa717b',
            data:[0.362234728573103, 0.347119330597452, 0.336463801775554, 0.342075490869317, 0.344869330556671, 0.334387474632842, 0.329890189321203, 0.320150049226806, 0.310068072125959, 0.296363351029828, 0.288725339237752, 0.283075758110775, 0.282908412993709, 0.278301686211687, 0.273688919046472, 0.270119738995466]
        },
        {
            name:'初中男',
            type:'line',
            color:'#999386',
            data:[0.409899178435304,0.410505949952796,0.421833241562697,0.415893600635756,0.420218464856887,0.430507372072853,0.4368669237462,0.442927805741307,0.440614827109203,0.433901235973,0.431255995198231,0.424525252221503,0.423221184080495,0.403753462936415,0.409599016231811,0.401602828173354]
        },
        {
            name:'初中女',
            type:'line',
            color:'#b9b0b0',
            data:[0.341938921189298,0.349256343558788,0.363347923480746,0.350722241223519,0.359165776441489,0.373467805621163,0.381312836313456,0.389968835360392,0.392511142905015,0.393361708968563,0.390132186753257,0.390906201814993,0.378916228875862,0.361812774090095,0.366242164977568,0.35875076983291]
        }
    ]
};
myChart2.setOption(option2);

var myChart3 = echarts.init(document.getElementById('main3'));
var dataPZ = {
    "女":[45.6, 47.1, 48.1, 49.1, 49.9, 50.5, 50.9, 51.1, 51.4, 51.7, 52.1, 52.4, 52.5, 52.5],
    "男":[54.4, 52.9, 51.9, 50.9, 50.1, 49.5, 49.1, 48.9, 48.6, 48.3, 47.9, 47.6, 47.5, 47.5],
        }

var dataBS = {
    "女":[44.2, 46, 46.4, 47.2, 48.2, 49.6, 50.4, 50.9, 51.5, 51.4, 51.6, 52.2, 53.1, 49.9], 
    "男":[55.8, 54, 53.6, 52.8, 51.8, 50.4, 49.6, 49.1, 48.5, 48.6, 48.4, 47.9, 46.9, 50.1],
}
var option3 = {
    baseOption:{
        timeline:{
            axisType: 'category',
            autoPlay: true,
            playInterval: 2000,
            data:['2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']
        },
        title: {
            subtext: '数据来自国家统计局'
        },
        grid: {},
        tooltip:{

        },
        legend:{
            x: 'right',
            data: ['女', '男'],
        },
        yAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':["普本专科","硕士"],
                splitLine: {show: false}
            }
        ],
        xAxis: [
            {
                type: 'value',
                name: '比例',
                max: 100,
                interval:50,
                axisLabel:{
                    show:true,
                    formatter:'{value}%'
                }
            }
        ],
        series: [
            { // 系列一的一些其他配置
                name:"女",
                type: 'bar',
                color:"#c75f65",
                tooltip:{
                    formatter:"{a}</br> {b}: {c}%"
                },
                label:{
                    normal:{
                    show:true,
                    position:'right',
                    fontWeight:'bold',
                    formatter:function(params){
                        return '{img1|}'
                    },
                    rich:{
                        img1:{
                            backgroundColor:{
                                image:'images/girl.png',
                            },
                            height:50,
                            width:40
                        }
                    }
                    }
            }
            },
            { // 系列一的一些其他配置
                name:"男",
                type: 'bar',
                color:"#f2e9de",
                tooltip:{
                    formatter:"{a}</br> {b}: {c}%"
                },
                label:{
                show:true,
                position:'right',
                fontWeight:'bold',
                formatter:function(params){
                        return '{img1|}'
                    },
                    rich:{
                        img1:{
                            backgroundColor:{
                                image:'images/boy.png',
                            },
                            height:50,
                            width:40
                        }
                    }
            }
            },
        ]
    },
    options: [
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2004年统计值'
            },
            series: [
                {data:[dataPZ["女"][0],dataBS["女"][0]]},
                {data:[dataPZ["男"][0],dataBS["男"][0]]}, 
            ],

        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2005年统计值'
            },
            series: [
                {data:[dataPZ["女"][1],dataBS["女"][1]]},
                {data:[dataPZ["男"][1],dataBS["男"][1]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2006年统计值'
            },
            series: [
                {data: [dataPZ["女"][2],dataBS["女"][2]]},
                {data: [dataPZ["男"][2],dataBS["男"][2]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2007年统计值'
            },
            series: [
                {data: [dataPZ["女"][3],dataBS["女"][3]]},
                {data: [dataPZ["男"][3],dataBS["男"][3]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2008年统计值'
            },
            series: [
                {data: [dataPZ["女"][4],dataBS["女"][4]]},
                {data: [dataPZ["男"][4],dataBS["男"][4]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2009年统计值'
            },
            series: [
                {data: [dataPZ["女"][5],dataBS["女"][5]]},
                {data: [dataPZ["男"][5],dataBS["男"][5]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2010年统计值'
            },
            series: [
                {data: [dataPZ["女"][6],dataBS["女"][6]]},
                {data: [dataPZ["男"][6],dataBS["男"][6]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2011年统计值'
            },
            series: [
                {data: [dataPZ["女"][7],dataBS["女"][7]]},
                {data: [dataPZ["男"][7],dataBS["男"][7]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2012年统计值'
            },
            series: [
                {data: [dataPZ["女"][8],dataBS["女"][8]]},
                {data: [dataPZ["男"][8],dataBS["男"][8]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2013年统计值'
            },
            series: [
                {data: [dataPZ["女"][9],dataBS["女"][9]]},
                {data: [dataPZ["男"][9],dataBS["男"][9]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2014年统计值'
            },
            series: [
                {data: [dataPZ["女"][10],dataBS["女"][10]]},
                {data: [dataPZ["男"][10],dataBS["男"][10]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2015年统计值'
            },
            series: [
                {data: [dataPZ["女"][11],dataBS["女"][11]]},
                {data: [dataPZ["男"][11],dataBS["男"][11]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2016年统计值'
            },
            series: [
                {data: [dataPZ["女"][12],dataBS["女"][12]]},
                {data: [dataPZ["男"][12],dataBS["男"][12]]}, 
            ]
        },
        { // 这是'2002-01-01' 对应的 option
            title: {
                text: '2017年统计值'
            },
            series: [
                {data: [dataPZ["女"][13],dataBS["女"][13]]},
                {data: [dataPZ["男"][13],dataBS["男"][13]]}, 
            ]
        },
        
    ]
}
myChart3.setOption(option3);
var myChart4 = echarts.init(document.getElementById('main4'))
var maxData = 100;

option4 = {
    tooltip: {
    },
    xAxis: {
        show:false,
        max: maxData,
        splitLine: {show: false},
        offset: 10,
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            margin: 10,
            formatter:"{value}%"
        }
    },
    yAxis: {
        data: ['2004', '2017'],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#999',
                fontSize: 16
            }
        }
    },
    grid: {
        top: 'center',
        height: 200,
        left: 70,
        right: 100
    },
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: 'image://./images/gbs.jpg',
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbolClip: true,
        symbolSize: 60,
        symbolBoundingData: maxData,
        data: [ 31.3, 39.2],
        
        z: 10
    }, {
        // full data
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 1
            }
        },
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    return params.value+"%"
                },
                position: 'right',
                offset: [10, 0],
                textStyle: {
                    color: '#aa7f7b',
                    fontSize: 18
                }
            }
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbol: 'image://./images/bbs.png',
        symbolSize: 60,
        //symbolBoundingData: maxData,
        data: [31.3, 39.2],
        z: 5
    }]
};
myChart4.setOption(option4);

var myChart5 = echarts.init(document.getElementById('main5'));
var option5 = {
    xAxis:{
        show: false,
        data:['男','女']
    },
    title:[

    {
        left: 'center',
        top: 20,
        text: '2002-2017男女文盲比例',
        subtext: ' 这里的男女比例指 6岁以上未上过学的男性/抽查男性，6岁以上未上过学的女性/抽查女性',
    },
    {
        text:'⬇2.8%',
        left: '16',
        top: '50%',
        textStyle: {
            fontSize: 36,
            color: '#aa7f7b'
            //color: 'rgba(255, 255, 255, 0.7)'
        }

    },
    {
        text:'⬇7.15%',
        left: '80%',
        top: '50%',
        textStyle: {
            fontSize: 36,
            color: '#aa7f7b'
            //color: 'rgba(255, 255, 255, 0.7)'
        }

    }],

    yAxis: {
        max: 0.25,
        show: false
    },
    series: [{
        name:'图一',
        type:'bar',
        barWidth : 122,//柱图宽度
        //barGap:'200%',/*多个并排柱子设置柱子之间的间距*/
        //barCategoryGap:'50%',/*多个并排柱子设置柱子之间的间距*/
        color:'#c75f65',


        data: [0.03,0.0765],
        label: {
            normal: {

                 //position: 'right',

                 show: true,
                 textStyle:{
                    fontSize: 16
                 }

            }
        },
    }]
};
myChart5.setOption(option5);