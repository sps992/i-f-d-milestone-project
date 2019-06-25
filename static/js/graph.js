    
queue()
    .defer(d3.csv, "data/characters.csv")
    .await(makeGraphs);
    
function makeGraphs(error, characterData) {
    var ndx = crossfilter(characterData);
    show_pieGenderSelector(ndx)
   
    
    dc.renderAll();
}


function show_pieGenderSelector(ndx){
    dim =ndx.dimension(dc.pluck('Gender'));
    group = dim.group()
    
    dc.pieChart("#pieGenderSelector")
    .width(800)
    .height(300)
    .dimension(dim)
    .group(group)
    .transitionDuration(500)
    
    
}

