    
queue()
    .defer(d3.csv, "data/characters.csv")
    .await(makeGraphs);
    
function makeGraphs(error, characterData) {
    var ndx = crossfilter(characterData);
    
    characterData.forEach(function(d){
        d.ScreenTime = parseInt(d["ScreenTime"]);
    })
    show_pieGenderSelector(ndx);
    show_death_stats(ndx);
    show_group_by_surname(ndx);
    show_higher_class_title(ndx);
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
    .transitionDuration(500);
    
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


function show_higher_class_title(ndx){
    var  dim = ndx.dimension(dc.pluck('Gender'));

    var kingQueenByGender = dim.group().reduce(
        function (p, v) {
            p.total++;
            if(v.rank == "King / Queen") {
                p.match++;
            }
            return p;
        },
        function (p, v) {
            p.total--;
            if(v.rank == "King / Queen") {
                p.match--;
            }
            return p;
        },
        function () {
            return {total: 0, match: 0};
        }
    );

    function rankByGender (dimension, Title) {
        return dimension.group().reduce(
            function (p, v) {
                p.total++;
                if(v.Title == Title) {
                    p.match++;
                }
                return p;
            },
            function (p, v) {
                p.total--;
                if(v.Title == Title) {
                    p.match--;
                }
                return p;
            },
            function () {
                return {total: 0, match: 0};
            }
        );
    }

    var royaltyByGender = rankByGender(dim, "King / Queen");
    var lordByGender = rankByGender(dim, "Lord / Lady");
    var civilianByGender = rankByGender(dim, "civilian");
    
    console.log(kingQueenByGender.all());
    
    dc.barChart("#titleSelector")
        .width(300)
        .height(350)
        .dimension(dim)
        .group(royaltyByGender, "King / Queen")
        .stack(lordByGender, "Lord / Lady")
        .stack(civilianByGender, "civilian")
        .valueAccessor(function(d) {
            if(d.value.total > 0) {
                return (d.value.match / d.value.total) * 100;
            } else {
                return 0;
            }
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(215).y(20).itemHeight(15).gap(5))
        .margins({top: 10, right: 100, bottom: 30, left: 30});
    
}
    
    

   
         
     
     
     
     
     
     