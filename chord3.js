am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("mydiv3", am4charts.ChordDiagram);
    
    // colors of main characters
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
    
    
    chart.nodePadding = 20;
    chart.minNodeSize = 0.01;
    chart.startAngle = 80;
    chart.endAngle = chart.startAngle + 360;
    chart.sortBy = "value";
    chart.fontSize = 10;
    
    var nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.propertyFields.fill = "color";
    nodeTemplate.tooltipText = "{name}'s churn: {total}";
    
    // when rolled over the node, make all the links rolled-over
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
    
    // when rolled out from the node, make all the links rolled-out
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
    label.fontSize=17;
    label.fillOpacity = 0.9;
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
    var bullet = linkTemplate.bullets.push(new am4charts.CircleBullet());
    bullet.fillOpacity = 1;
    bullet.circle.radius = 5;
    bullet.locationX = 0.5;
    
    // create animations
    chart.events.on("ready", function() {
        for (var i = 0; i < chart.links.length; i++) {
            var link = chart.links.getIndex(i);
            var bullet = link.bullets.getIndex(0);
    
            animateBullet(bullet);
        }
    })
    
    function animateBullet(bullet) {
        var duration = 3000 * Math.random() + 2000;
        var animation = bullet.animate([{ property: "locationX", from: 0, to: 1 }], duration)
        animation.events.on("animationended", function(event) {
            animateBullet(event.target.object);
        })
    }
    
    
    // data credit label
    var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
    creditLabel.text = "Data source: notrudedude";
    creditLabel.url = "https://www.reddit.com/user/notrudedude";
    creditLabel.y = am4core.percent(99);
    creditLabel.x = am4core.percent(99);
    creditLabel.horizontalCenter = "right";
    creditLabel.verticalCenter = "top";
    
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
    
    
    // var titleImage = chart.chartContainer.createChild(am4core.Image);
    // titleImage.href = "/data/churn.jpg";
    // titleImage.x = 30
    // titleImage.y = 30;
    // titleImage.width = 200;
    // titleImage.height = 200;
    
    }); // end am4core.ready()