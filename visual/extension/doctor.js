var myChart4 = echarts.init(document.getElementById('main4'))
var maxData = 100;

option4 = {
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