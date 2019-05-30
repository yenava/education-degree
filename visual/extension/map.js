window.onload = function(){
    var myChart6 = echarts.init(document.getElementById('main6'));
    myChart6.setOption({
        baseOption : {
            timeline : {
                autoPlay:true,
                data:['2013','2014','2015','2016','2017'],
                axisType: 'category',
                right:0,
                bottom:20,
                padding:6,
                symbol:'rect',
                orient:'vertical',
                height:200,
                controlPosition:'right',
                inverse:true,
                label:{
                    show:false
                },
                lineStyle:{
                    width:5,
                    type:'solid',
                    color:"#c75f65",
                    borderColor:"#f2e9de",
                    borderWidth:2
                },
                itemStyle:{
                    color:"#c75f65",
                    borderColor:"#f2e9de",
                    borderWidth:2
                },
                checkpointStyle:{
                    //红点样式
                    symbol:"diamond",
                    symbolSize:15,
                },
                controlStyle:{
                    //箭头以及按钮
                    color:"#c75f65",
                    borderColor:"#c75f65",
                    borderWidth:3
                }
            },
            visualMap: {
                min: 0.4,
                max: 0.6,
                precision:1,
                text:["High","Low"],
                itemHeight:100,
                itemWidth:15,
                inRange: {
                    color: ['#f2e9de', '#c75f65']
                },
                calculable : true,
                realtime:false,
                textStyle: {
                    color: 'black'
                },
                bottom: 30
            },
            series: [{
                type: 'map',
                map:'china',
                roam:true,
                //缩放功能
                emphasis:{
                    //高亮颜色
                    itemStyle:{
                        areaColor:"#843944"
                    }
                }

            }],
        },
        options:[
            {
                title:{
                    text:'2013年'
                },
                series:[{
                    data:[{'name': '北京', 'value': 0.4709947893937868}, {'name': '天津', 'value': 0.533305677373474}, {'name': '河北', 'value': 0.5587341035877641}, {'name': '山西', 'value': 0.5545444618352564}, {'name': '内蒙古',selected:true,'value': 0.5926495827661715}, {'name': '辽宁', 'value': 0.5297728272650205}, {'name': '吉林', 'value': 0.5595873104997192}, {'name': '黑龙江', 'value': 0.48755803306077206}, {'name': '上海', 'value': 0.46639811868040565}, {'name': '江苏', 'value': 0.46257202957237903}, {'name': '浙江', 'value': 0.4704416878600716}, {'name': '安徽', 'value': 0.42882638799294714}, {'name': '福建', 'value': 0.5144802304268133}, {'name': '江西', 'value': 0.4976452715533612}, {'name': '山东', 'value': 0.5475590033167951}, {'name': '河南', 'value': 0.5655671278926674}, {'name': '湖北', 'value': 0.4648779578908142}, {'name': '湖南', 'value': 0.47951774005760156}, {'name': '广东', 'value': 0.47709556233857714}, {'name': '广西', 'value': 0.4864886568962056}, {'name': '海南',selected:true, 'value': 0.5705986360191968}, {'name': '重庆', 'value': 0.4960174237710019}, {'name': '四川', 'value': 0.4387161848204268}, {'name': '贵州', 'value': 0.5257167247634631}, {'name': '云南', 'value': 0.5258375551560712}, {'name': '西藏', 'value': 0.5570739549839229}, {'name': '陕西', 'value': 0.4603562372441091}, {'name': '甘肃', 'value': 0.4839521283829729}, {'name': '青海', 'value': 0.5406636304489265}, {'name': '宁夏', 'value': 0.5406636304489265}, {'name': '新疆',selected:true, 'value': 0.5745538625718859}],
                },

                ],
            },
            {
                title:{
                    text:'2014年'
                },
                series:[{
                    data:[{'name': '总计', 'value': 0.4915800223955438}, {'name': '北京', 'value': 0.46274227038142357}, {'name': '天津', 'value': 0.5384076854264711}, {'name': '河北', 'value': 0.5787256176853056}, {'name': '山西', 'value': 0.5667334239324798}, {'name': '内蒙古',selected:true, 'value': 0.5934714666049311}, {'name': '辽宁', 'value': 0.5317418309478801}, {'name': '吉林', 'value': 0.5499843961302403}, {'name': '黑龙江', 'value': 0.49375551704972703}, {'name': '上海', 'value': 0.47156955239079323}, {'name': '江苏', 'value': 0.464682460680868}, {'name': '浙江', 'value': 0.47416172266199536}, {'name': '安徽', 'value': 0.43571581884524574}, {'name': '福建', 'value': 0.5096153846153846}, {'name': '江西', 'value': 0.501590744757773}, {'name': '山东', 'value': 0.549486630872122}, {'name': '河南', 'value': 0.5781645569620253}, {'name': '湖北', 'value': 0.4629277318808475}, {'name': '湖南', 'value': 0.48229828186988066}, {'name': '广东', 'value': 0.482048794011644}, {'name': '广西', 'value': 0.5121677997527813}, {'name': '海南', 'value': 0.5760556621880998}, {'name': '重庆', 'value': 0.5062373670348517}, {'name': '四川', 'value': 0.4462198550081373}, {'name': '贵州', 'value': 0.5353514692847889}, {'name': '云南', 'value': 0.5343447385409942}, {'name': '西藏', 'value': 0.5637254901960784}, {'name': '陕西', 'value': 0.45940499817732594}, {'name': '甘肃', 'value': 0.4872764786795048}, {'name': '青海', 'value': 0.5436573311367381}, {'name': '宁夏',selected:true, 'value': 0.6038740920096852}, {'name': '新疆',selected:true, 'value': 0.5851791719819088}]
                }],
            },
            {
                title:{
                    text:'2015年'
                },
                series:[{
                    data:[{'name': '北京', 'value': 0.4679216673119112}, {'name': '天津', 'value': 0.5510169427568771}, {'name': '河北', 'value': 0.573415572092094}, {'name': '山西', 'value': 0.5819729314915585}, {'name': '内蒙古',selected:true, 'value': 0.6041086738670527}, {'name': '辽宁', 'value': 0.5342896797228431}, {'name': '吉林', 'value': 0.5717974761994938}, {'name': '黑龙江', 'value': 0.4941815485784282}, {'name': '上海', 'value': 0.48175895058826934}, {'name': '江苏', 'value': 0.4656788377474929}, {'name': '浙江', 'value': 0.47860785795239896}, {'name': '安徽', 'value': 0.43084705415592145}, {'name': '福建', 'value': 0.5074265808699018}, {'name': '江西', 'value': 0.5051614244145767}, {'name': '山东', 'value': 0.553729228391086}, {'name': '河南', 'value': 0.5767725445299395}, {'name': '湖北', 'value': 0.4670663252327573}, {'name': '湖南', 'value': 0.4872513431102076}, {'name': '广东', 'value': 0.4889266699476533}, {'name': '广西', 'value': 0.5212674422954622}, {'name': '海南', 'value': 0.5713653463155566}, {'name': '重庆', 'value': 0.5128230498278387}, {'name': '四川', 'value': 0.4499098577756015}, {'name': '贵州', 'value': 0.5415267372771894}, {'name': '云南', 'value': 0.5455710045305421}, {'name': '西藏', 'value': 0.5677506775067751}, {'name': '陕西', 'value': 0.47186206625997923}, {'name': '甘肃', 'value': 0.49471943853966327}, {'name': '青海', 'value': 0.5369335816263191}, {'name': '宁夏',selected:true, 'value': 0.6154894390188508}, {'name': '新疆',selected:true, 'value': 0.5887083356441684}]
                }],
            },
            {
                title:{
                    text:'2016年'
                },
                series:[{
                    data:[{'name': '总计', 'value': 0.5076196249657885}, {'name': '北京', 'value': 0.48015041920655205}, {'name': '天津', 'value': 0.55948688774293}, {'name': '河北', 'value': 0.5705869622718638}, {'name': '山西',selected:true, 'value': 0.5965815485996705}, {'name': '内蒙古',selected:true, 'value': 0.6153014912470283}, {'name': '辽宁', 'value': 0.535654370894391}, {'name': '吉林', 'value': 0.5834015879648976}, {'name': '黑龙江', 'value': 0.49379139072847683}, {'name': '上海', 'value': 0.4988830559588965}, {'name': '江苏', 'value': 0.47569233062903005}, {'name': '浙江', 'value': 0.48392350216644253}, {'name': '安徽', 'value': 0.44140224684339774}, {'name': '福建', 'value': 0.5120511674935923}, {'name': '江西', 'value': 0.5198721328763511}, {'name': '山东', 'value': 0.5577993748779059}, {'name': '河南', 'value': 0.586743252173029}, {'name': '湖北', 'value': 0.4781576924362445}, {'name': '湖南', 'value': 0.49815372861932855}, {'name': '广东', 'value': 0.5020200492589552}, {'name': '广西', 'value': 0.5261790495435356}, {'name': '海南', 'value': 0.5748831538305222}, {'name': '重庆', 'value': 0.5167850969848281}, {'name': '四川', 'value': 0.4710780831648544}, {'name': '贵州', 'value': 0.5569066147859922}, {'name': '云南', 'value': 0.5522641738497026}, {'name': '西藏', 'value': 0.5634256278171281}, {'name': '陕西', 'value': 0.4845917308479546}, {'name': '甘肃', 'value': 0.5061839732027827}, {'name': '青海', 'value': 0.5367730900798175}, {'name': '宁夏',selected:true, 'value': 0.6064516129032258}, {'name': '新疆', 'value': 0.5923285104611221}]
                }],
            },
            {
                title:{
                    text:'2017年'
                },
                series:[{
                    data:[{'name': '总计', 'value': 0.48493709234061433}, {'name': '北京', 'value': 0.4591232808453907}, {'name': '天津', 'value': 0.515026942947614}, {'name': '河北', 'value': 0.5375568388941118}, {'name': '山西', 'value': 0.5530299006851134}, {'name': '内蒙古',selected:true, 'value': 0.5934197258841543}, {'name': '辽宁', 'value': 0.5173542787625431}, {'name': '吉林', 'value': 0.5627166107522111}, {'name': '黑龙江', 'value': 0.47486089153896904}, {'name': '上海', 'value': 0.47379373263764313}, {'name': '江苏', 'value': 0.43885357279466675}, {'name': '浙江', 'value': 0.47306158318123437}, {'name': '安徽', 'value': 0.4208072647755573}, {'name': '福建', 'value': 0.4890421862563014}, {'name': '江西', 'value': 0.5058398495496387}, {'name': '山东', 'value': 0.5171661559237521}, {'name': '河南', 'value': 0.5550778548329813}, {'name': '湖北', 'value': 0.44721220827799313}, {'name': '湖南', 'value': 0.4802640891351384}, {'name': '广东', 'value': 0.4898742432857286}, {'name': '广西', 'value': 0.5215047530721075}, {'name': '海南', 'value': 0.5330007674597084}, {'name': '重庆', 'value': 0.5417614913942301}, {'name': '四川', 'value': 0.4506750244984896}, {'name': '贵州', 'value': 0.540798336422404}, {'name': '云南', 'value': 0.5315381531471335}, {'name': '西藏', 'value': 0.5465631929046563}, {'name': '陕西', 'value': 0.46581933664599673}, {'name': '甘肃', 'value': 0.500819126606256}, {'name': '青海',selected:true, 'value': 0.5933928942447538}, {'name': '宁夏',selected:true, 'value': 0.620651486401012}, {'name': '新疆', 'value': 0.574763892829638}]
                }],
            },
        ]
    })
    var myChart7 = echarts.init(document.getElementById('main7'));
    myChart7.setOption({
        baseOption : {
            timeline : {
                show:false,
                autoPlay:true,
                data:['2013','2014','2015','2016','2017'],
                axisType: 'category',
            },
            title:{
                show:false
            },
            xAxis:[{
                type:'category',
            }],
            yAxis:[{
                type:'value',
                max:100,
                splitNumber:2,
                formatter:"{c}%"
            }],

            series: {
                type: 'bar',
                barWidth:30,
                color:'#843944',
                label:{
                    show:true,
                    position:'top',
                    formatter:"{c}%"
                }

            },
        },
        options:[{
            title:{
                text:'2013年',
            },
            series:{
                data:[59.2,57.1,57.4]
            },
            xAxis:{
                data:["内蒙古","海南","新疆"]
            }
        },
            {
                series:{
                    data:[59.3,60.3,59.5]
                },
                xAxis:{
                    data:["内蒙古","宁夏","新疆"]
                }
            },
            {
                series:{
                    data:[60.4,61.5,58.8]
                },
                xAxis:{
                    data:["内蒙古","宁夏","新疆"]
                }
            },
            {
                series:{
                    data:[61.5,60.6,57.4]
                },
                xAxis:{
                    data:["内蒙古","宁夏","青海"]
                }
            },
            {
                series:{
                    data:[59.3,62.1,59.3]
                },
                xAxis:{
                    data:["内蒙古","宁夏","青海"]
                }
            },]

    })
}

