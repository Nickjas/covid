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

 var chart = am4core.create("mydiv1", am4charts.ChordDiagram);
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
{"from":"Nakumatt","to":"Nakumatt","value":44},
{"from":"Nakumatt","to":"Turskys","value":734},
{"from":"Nakumatt","to":"Maisha","value":113},
{"from":"Nakumatt","to":"Yako","value":16},
{"from":"Nakumatt","to":"Khethias","value":419},
{"from":"Nakumatt","to":"Watoto","value":123},
{"from":"Nakumatt","to":"Maisha","value":178},
{"from":"Nakumatt","to":"Wallias","value":6},
{"from":"Turskys","to":"Turskys","value":452},
{"from":"Turskys","to":"Maisha","value":87},
{"from":"Turskys","to":"Yako","value":18},
{"from":"Turskys","to":"Khethias","value":875},
{"from":"Turskys","to":"Watoto","value":216},
{"from":"Turskys","to":"Wallias","value":15},
{"from":"Maisha","to":"Khethias","value":120},
{"from":"Maisha","to":"Watoto","value":27},
{"from":"Maisha","to":"Yako","value":2},
{"from":"Maisha","to":"Turskys","value":49},
{"from":"Maisha","to":"Wallias","value":11},
{"from":"Maisha","to":"Maisha","value":349},
{"from":"Yako","to":"Khethias","value":93},
{"from":"Yako","to":"Watoto","value":18},
{"from":"Yako","to":"Turskys","value":10},
{"from":"Yako","to":"Wallias","value":8},
{"from":"Yako","to":"Maisha","value":31},
{"from":"Yako","to":"Yako","value":253},
{"from":"Khethias","to":"Watoto","value":6},
{"from":"Khethias","to":"Yako","value":1},
{"from":"Khethias","to":"Maisha","value":12},
{"from":"Khethias","to":"Turskys","value":2},
{"from":"Khethias","to":"Khethias","value":722},
{"from":"Khethias","to":"Wallias","value":1},
{"from":"Watoto","to":"Watoto","value":484},
{"from":"Watoto","to":"Wallias","value":2},
{"from":"Watoto","to":"Yako","value":1},
{"from":"Watoto","to":"Khethias","value":62},
{"from":"Watoto","to":"Turskys","value":116},
{"from":"Watoto","to":"Maisha","value":7}
]

 
 chart.dataFields.fromName = "from";
 chart.dataFields.toName = "to";
 chart.dataFields.value = "value";
 
 chart.innerRadius=am4core.percent(95);

var slice = chart.nodes.template.slice;
slice.stroke = am4core.color("#000");
slice.strokeOpacity = 0.5;
slice.strokeWidth = 1;
slice.cornerRadius = 8;
slice.innerCornerRadius = 0;
chart.sortBy="value";
var label = chart.createChild(am4core.Label);
label.text = `This circle shows how the 
respondents are currently 
divided between the 
brands.
    
  `;
label.fontSize = 21;
label.align = "center";
label.fill = "#03fc73";
label.isMeasured = false;
label.x = am4core.percent(50);
//label.x = am4core.percent(65);
label.horizontalCenter = "middle";
label.y = 155;

//chart.nodes.template.slice.disabled = true;

//chart.nodes.template.label.disabled = true;

var link = chart.links.template;
link.fillOpacity = 0;

var label1 = chart.createChild(am4core.Label);
label1.text = `Khetias and Turkys supermarkets have 
almost 50% of the customer base in 
Kakamega.
Wallias and Yako had the least 
customer bases.`;
label1.fontSize = 15;
label1.align = "center";
label1.fill = "#00";
label1.isMeasured = false;
label1.x=am4core.percent(20)
//label.x = am4core.percent(65);
label1.horizontalCenter = "middle";
label1.y = 35;