var myChart3 = echarts.init(document.getElementById('main3'));
var option3 = {
    baseOption:{
        timeline:{
            itemStyle:{
                color:'#b9b0b0'
            },
            axisType: 'category',
            symbol:'rect',
            lineStyle:{
                show:false,
            },
            autoPlay: true,
            playInterval: 2000,
            data:['2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']
        },
        title: {
            subtext: '数据来自国家统计局',
            textStyle:{
                fontSize:24
            }
        },
        grid:{
            x:30,
            y:100
        },
        tooltip:{

        },
        legend:{
            data: ['女', '男'],
        },
        yAxis: [
            {
                name:"学历",
                'type':'category',
                'axisLabel':{'interval':0},
                'data':["普本专科","硕士"],
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: "#DC9FB4",
                        width: 2,
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'value',
                name: '比例',
                max: 60,
                interval:30,
                axisLabel:{
                    show:true,
                    formatter:'{value}%'
                },
                axisLine: {
                    lineStyle: {
                        color: "#DC9FB4",
                        width: 2,
                    }
                },
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
                markLine:{
                    data:[{
                        name:"中间线",
                        xAxis:50
                    }],
                    symbol:"none"
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