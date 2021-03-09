/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

 am4core.useTheme(am4themes_animated);

 var chart = am4core.create("mydiv", am4charts.ChordDiagram);
 chart.colors.saturation = 0.45;
chart.colors.step = 3;
var colors = {
    Turskys:chart.colors.next(),
    Nakumatt:chart.colors.next(),
    Watoto:chart.colors.next(),
    Yako:chart.colors.next(),
    Khethias:chart.colors.next(),
    Maisha:chart.colors.next(),
    Wallias:chart.colors.next()
}

// data was provided by: https://www.reddit.com/user/notrudedude

chart.data = [
// node property fields take data from data items where they are first mentioned, that's 
// why we add empty data items at the beginning and set colors here
{"from":"Nakumatt", "image":"Nakumatt.png", "color":colors.Nakumatt},
{"from":"Turskys", "image":"Turskys.png", "color":colors.Turskys},
{"from":"Maisha", "image":"Maisha.png", "color":colors.Maisha},
{"from":"Yako", "image":"Yako.png", "color":colors.Yako},
{"from":"Khethias", "color":colors.Khethias, "image":"Khethias.png",},
{"from":"Watoto", "image":"Watoto.png", "color":colors.Watoto},
{"from":"Wallias", "image":"Wallias.png", "color":colors.Wallias},

// real data
{"from":"Maisha","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0,"value":11},
{"from":"Nakumatt","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0,"value":113},
{"from":"Nakumatt","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0,"value":16},
{"from":"Nakumatt","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0,"value":419},
{"from":"Khethias","to":"Khethias","linkColor": colors.Khethias,"linkOpacity": 1,"value":722},
{"from":"Nakumatt","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0,"value":123},
{"from":"Nakumatt","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0,"value":178},
{"from":"Nakumatt","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0,"value":6},
{"from":"Turskys","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0,"value":87},
{"from":"Nakumatt","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0,"value":734},
{"from":"Watoto","to":"Watoto","linkColor": colors.Watoto,"linkOpacity": 1,"value":307},
{"from":"Maisha","to":"Maisha","linkColor": colors.Maisha,"linkOpacity": 1,"value":349},
{"from":"Yako","to":"Yako","linkColor": colors.Yako,"linkOpacity": 1,"value":253},
{"from":"Turskys","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0,"value":18},
{"from":"Turskys","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0,"value":875},
{"from":"Turskys","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0,"value":216},
{"from":"Turskys","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0,"value":15},
{"from":"Maisha","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0,"value":120},
{"from":"Maisha","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0,"value":27},
{"from":"Maisha","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0,"value":2},
{"from":"Maisha","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0,"value":49},
{"from":"Maisha","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0,"value":349},
{"from":"Yako","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0,"value":93},
{"from":"Yako","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0,"value":18},
{"from":"Yako","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0,"value":10},
{"from":"Yako","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0,"value":8},
{"from":"Yako","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0,"value":31},
{"from":"Khethias","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0,"value":6},
{"from":"Turskys","to":"Turskys","linkColor": colors.Turskys,"linkOpacity": 1,"value":452},
{"from":"Nakumatt","to":"Nakumatt","linkColor": colors.Nakumatt,"linkOpacity": 1,"value":44},
{"from":"Khethias","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0,"value":1},
{"from":"Khethias","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0,"value":12},
{"from":"Khethias","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0,"value":2},
{"from":"Khethias","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0,"value":1},
{"from":"Watoto","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0,"value":2},
{"from":"Watoto","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0,"value":1},
{"from":"Watoto","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0,"value":62},
{"from":"Watoto","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0,"value":116},
{"from":"Watoto","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0,"value":7}
]

 
 chart.dataFields.fromName = "from";
 chart.dataFields.toName = "to";
 chart.dataFields.value = "value";
 
 chart.innerRadius=am4core.percent(90);
 chart.sortBy = "value";

var slice = chart.nodes.template.slice;
slice.stroke = am4core.color("#000");
slice.strokeOpacity = 0.5;
slice.strokeWidth = 1;
slice.cornerRadius = 8;
slice.innerCornerRadius = 0;

var label = chart.createChild(am4core.Label);
label.text = `      Now we're going to look at 
the ability of this brands to retain 
there customers.`;
label.fontSize = 20;
label.align = "right";
label.fill = "#03fc73";
label.isMeasured = false;
label.x = am4core.percent(35);
//label.horizontalCenter = "bottom";
label.y = 225;

//chart.nodes.template.slice.disabled = true;

//chart.nodes.template.label.disabled = true;

var link = chart.links.template;
link.fillOpacity = 0.9;
//link.colorMode = "solid";
//link.propertyFields.fill = "linkColor";
link.propertyFields.fillOpacity = "linkOpacity";

var label1 = chart.createChild(am4core.Label);
label1.text = `At glance we can see Khetias 
and Turskys have the best
 customer retention 
strategies.
Due to difference in the no 
of customers this might
 not be the best way to 
 conduct comparative 
 analysis on how 
 best this brand 
 retain their 
 customers.`;
label1.fontSize = 15;
label1.align = "center";
label1.fill = "#00";
label1.isMeasured = false;
label1.x=am4core.percent(90)
//label.x = am4core.percent(65);
label1.horizontalCenter = "middle";
label1.y = 35;