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

 var chart = am4core.create("mydiv2", am4charts.ChordDiagram);
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
{"from":"Maisha","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":11},
{"from":"Nakumatt","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0.9,"value":113},
{"from":"Nakumatt","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0.9,"value":16},
{"from":"Nakumatt","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":419},
{"from":"Khethias","to":"Khethias","linkColor": colors.Khethias,"linkOpacity": 0.1,"value":722},
{"from":"Nakumatt","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0.9,"value":123},
{"from":"Nakumatt","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0.9,"value":178},
{"from":"Nakumatt","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":6},
{"from":"Turskys","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0.9,"value":87},
{"from":"Nakumatt","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0.9,"value":734},
{"from":"Watoto","to":"Watoto","linkColor": colors.Watoto,"linkOpacity": 0.1,"value":307},
{"from":"Maisha","to":"Maisha","linkColor": colors.Maisha,"linkOpacity": 0.1,"value":349},
{"from":"Yako","to":"Yako","linkColor": colors.Yako,"linkOpacity": 0.1,"value":253},
{"from":"Turskys","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0.9,"value":18},
{"from":"Turskys","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":875},
{"from":"Turskys","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0.9,"value":216},
{"from":"Turskys","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":15},
{"from":"Maisha","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":120},
{"from":"Maisha","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0.9,"value":27},
{"from":"Maisha","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0.9,"value":2},
{"from":"Maisha","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0.9,"value":49},
{"from":"Yako","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":93},
{"from":"Yako","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0.9,"value":18},
{"from":"Yako","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0.9,"value":10},
{"from":"Yako","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":8},
{"from":"Yako","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0.9,"value":31},
{"from":"Khethias","to":"Watoto","linkColor": "#06D6A0","linkOpacity": 0.9,"value":6},
{"from":"Turskys","to":"Turskys","linkColor": colors.Turskys,"linkOpacity": 0.1,"value":452},
{"from":"Nakumatt","to":"Nakumatt","linkColor": colors.Nakumatt,"linkOpacity": 0.1,"value":44},
{"from":"Khethias","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0.9,"value":1},
{"from":"Khethias","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0.9,"value":12},
{"from":"Khethias","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0.9,"value":2},
{"from":"Khethias","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":1},
{"from":"Watoto","to":"Wallias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":2},
{"from":"Watoto","to":"Yako","linkColor": "#06D6A0","linkOpacity": 0.9,"value":1},
{"from":"Watoto","to":"Khethias","linkColor": "#06D6A0","linkOpacity": 0.9,"value":62},
{"from":"Watoto","to":"Turskys","linkColor": "#06D6A0","linkOpacity": 0.9,"value":116},
{"from":"Watoto","to":"Maisha","linkColor": "#06D6A0","linkOpacity": 0.9,"value":7}
]

 
 chart.dataFields.fromName = "from";
 chart.dataFields.toName = "to";
 chart.dataFields.value = "value";
 
 chart.innerRadius=am4core.percent(90);

var slice = chart.nodes.template.slice;
slice.stroke = am4core.color("#000");
slice.strokeOpacity = 0.5;
slice.strokeWidth = 1;
slice.cornerRadius = 8;
slice.innerCornerRadius = 0;
chart.sortBy="value";


var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{from}'s churn: {value}";

nodeTemplate.events.on("over", function(event) {    
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;   
})

var label = chart.createChild(am4core.Label);
label.text = `Hello world! cvvv
vvvvvvvvvcv`;
label.fontSize = 20;
label.align = "center";
label.fill = "#03fc73";
label.isMeasured = false;
label.x = am4core.percent(50);
label.horizontalCenter = "middle";
label.y = 80;

//chart.nodes.template.slice.disabled = true;

//chart.nodes.template.label.disabled = true;

nodeTemplate.events.on("out", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;

label.fillOpacity = 0.4;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
nodeTemplate.adapter.add("fill", function(fill, target) {
    let node = target;
    let counters = {};
    let mainChar = false;
    node.incomingDataItems.each(function(dataItem) {
        if(colors[dataItem.toName]){
            mainChar = true;
        }

        if(isNaN(counters[dataItem.fromName])){
            counters[dataItem.fromName] = dataItem.value;
        }
        else{
            counters[dataItem.fromName] += dataItem.value;
        }
    })
    if(mainChar){
        return fill;
    }

    let count = 0;
    let color;
    let biggest = 0;
    let biggestName;

    for(var name in counters){
        if(counters[name] > biggest){
            biggestName = name;
            biggest = counters[name]; 
        }        
    }
    if(colors[biggestName]){
        fill = colors[biggestName];
    }
  
    return fill;
})

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.15;
linkTemplate.tooltipText = "{fromName} & {toName}:{value.value}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;
//PPPPPPPPP
// var bullet = linkTemplate.bullets.push(new am4charts.CircleBullet());
// bullet.fillOpacity = 1;
// bullet.circle.radius = 5;
// bullet.locationX = 0.5;
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

var label2 = chart.createChild(am4core.Label);
label2.text = `Khetias and Turkys supermarkets have 
almost 50% of the customer base in 
Kakamega.
Wallias and Yako had the least 
customer bases.`;
label2.fontSize = 15;
label2.align = "center";
label2.fill = "#00";
label2.isMeasured = false;
label2.x=am4core.percent(20)
//label.x = am4core.percent(65);
label2.horizontalCenter = "middle";
label2.y = 35;
    
