    
queue()
    .defer(d3.csv, "data/characters.csv")
    .await(makeGraphs);
    
function makeGraphs(error, characterData) {
    var ndx = crossfilter(characterData);
    show_pieGenderSelector(ndx)
    show_death_stats(ndx);
    show_group_by_surname(ndx);
    
    dc.renderAll();
}


function show_pieGenderSelector(ndx){
    dim =ndx.dimension(dc.pluck('Gender'));
    group = dim.group()
    
    dc.pieChart("#pieGenderSelector")
    .width(250)
    .height(300)
    .dimension(dim)
    .group(group)
    .transitionDuration(500)
    
}



function show_death_stats(ndx) {
    var dim = ndx.dimension(dc.pluck('Alive?'));
    var group = dim.group();
    
    dc.barChart("#deathTally")
        .width(300)
        .height(300)
        .x(d3.scale.ordinal())
        .margins({top: 10, right: 50, bottom: 50, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .xUnits(dc.units.ordinal)
        .elasticY(false)
        .xAxisLabel("Mortality")
        .yAxisLabel("Amount of People")
        .yAxis().ticks(20);
        
        
}

function show_group_by_surname(ndx) {
    var dim = ndx.dimension(dc.pluck('Surname'));
    var group = dim.group();
    
    dc.selectMenu("#houseMenu")
        .dimension(dim)
        .group(group);
        
        
}


