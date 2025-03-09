ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([103.832835, -8.608167, 129.996467, 3.845961]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NHydrography_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Hydrography<br />\
    <img src="styles/legend/NHydrography_1_0.png" /> 0<br />\
    <img src="styles/legend/NHydrography_1_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NHydrography_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NResidentialarea_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Residential area<br />\
    <img src="styles/legend/NResidentialarea_2_0.png" /> 0<br />\
    <img src="styles/legend/NResidentialarea_2_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NResidentialarea_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NSlope_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Slope<br />\
    <img src="styles/legend/NSlope_3_0.png" /> 0.0000<br />\
    <img src="styles/legend/NSlope_3_1.png" /> 0.2112<br />\
    <img src="styles/legend/NSlope_3_2.png" /> 0.4224<br />\
    <img src="styles/legend/NSlope_3_3.png" /> 0.6337<br />\
    <img src="styles/legend/NSlope_3_4.png" /> 0.8449<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NSlope_3.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NElevation_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Elevation<br />\
    <img src="styles/legend/NElevation_4_0.png" /> 0.0538<br />\
    <img src="styles/legend/NElevation_4_1.png" /> 0.2637<br />\
    <img src="styles/legend/NElevation_4_2.png" /> 0.4737<br />\
    <img src="styles/legend/NElevation_4_3.png" /> 0.6836<br />\
    <img src="styles/legend/NElevation_4_4.png" /> 0.8935<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NElevation_4.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NTemperature_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Temperature<br />\
    <img src="styles/legend/NTemperature_5_0.png" /> 0.1171<br />\
    <img src="styles/legend/NTemperature_5_1.png" /> 0.3377<br />\
    <img src="styles/legend/NTemperature_5_2.png" /> 0.5583<br />\
    <img src="styles/legend/NTemperature_5_3.png" /> 0.7789<br />\
    <img src="styles/legend/NTemperature_5_4.png" /> 0.9995<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NTemperature_5.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NGenerationtosubstationratio_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Generation to substation ratio<br />\
    <img src="styles/legend/NGenerationtosubstationratio_6_0.png" /> 0.0000<br />\
    <img src="styles/legend/NGenerationtosubstationratio_6_1.png" /> 0.2500<br />\
    <img src="styles/legend/NGenerationtosubstationratio_6_2.png" /> 0.5000<br />\
    <img src="styles/legend/NGenerationtosubstationratio_6_3.png" /> 0.7500<br />\
    <img src="styles/legend/NGenerationtosubstationratio_6_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NGenerationtosubstationratio_6.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NProximitytosubstation_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Proximity to substation<br />\
    <img src="styles/legend/NProximitytosubstation_7_0.png" /> 0.0001<br />\
    <img src="styles/legend/NProximitytosubstation_7_1.png" /> 0.2466<br />\
    <img src="styles/legend/NProximitytosubstation_7_2.png" /> 0.4930<br />\
    <img src="styles/legend/NProximitytosubstation_7_3.png" /> 0.7395<br />\
    <img src="styles/legend/NProximitytosubstation_7_4.png" /> 0.9859<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NProximitytosubstation_7.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NProximitytogrid_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Proximity to grid<br />\
    <img src="styles/legend/NProximitytogrid_8_0.png" /> 0.0000<br />\
    <img src="styles/legend/NProximitytogrid_8_1.png" /> 0.2466<br />\
    <img src="styles/legend/NProximitytogrid_8_2.png" /> 0.4932<br />\
    <img src="styles/legend/NProximitytogrid_8_3.png" /> 0.7397<br />\
    <img src="styles/legend/NProximitytogrid_8_4.png" /> 0.9863<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NProximitytogrid_8.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NProximitytoroad_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Proximity to road<br />\
    <img src="styles/legend/NProximitytoroad_9_0.png" /> 0.0000<br />\
    <img src="styles/legend/NProximitytoroad_9_1.png" /> 0.2173<br />\
    <img src="styles/legend/NProximitytoroad_9_2.png" /> 0.4346<br />\
    <img src="styles/legend/NProximitytoroad_9_3.png" /> 0.6520<br />\
    <img src="styles/legend/NProximitytoroad_9_4.png" /> 0.8693<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NProximitytoroad_9.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NIAV_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N IAV<br />\
    <img src="styles/legend/NIAV_10_0.png" /> 0.0145<br />\
    <img src="styles/legend/NIAV_10_1.png" /> 0.2489<br />\
    <img src="styles/legend/NIAV_10_2.png" /> 0.4833<br />\
    <img src="styles/legend/NIAV_10_3.png" /> 0.7177<br />\
    <img src="styles/legend/NIAV_10_4.png" /> 0.9521<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NIAV_10.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NGHI_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N GHI<br />\
    <img src="styles/legend/NGHI_11_0.png" /> 0.0123<br />\
    <img src="styles/legend/NGHI_11_1.png" /> 0.2580<br />\
    <img src="styles/legend/NGHI_11_2.png" /> 0.5038<br />\
    <img src="styles/legend/NGHI_11_3.png" /> 0.7495<br />\
    <img src="styles/legend/NGHI_11_4.png" /> 0.9952<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NGHI_11.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NLCOE_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N LCOE<br />\
    <img src="styles/legend/NLCOE_12_0.png" /> 0.0016<br />\
    <img src="styles/legend/NLCOE_12_1.png" /> 0.2506<br />\
    <img src="styles/legend/NLCOE_12_2.png" /> 0.4997<br />\
    <img src="styles/legend/NLCOE_12_3.png" /> 0.7488<br />\
    <img src="styles/legend/NLCOE_12_4.png" /> 0.9979<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NLCOE_12.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_TOPSISscore_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOPSIS score<br />\
    <img src="styles/legend/TOPSISscore_13_0.png" /> 0.4056<br />\
    <img src="styles/legend/TOPSISscore_13_1.png" /> 0.5036<br />\
    <img src="styles/legend/TOPSISscore_13_2.png" /> 0.6016<br />\
    <img src="styles/legend/TOPSISscore_13_3.png" /> 0.6997<br />\
    <img src="styles/legend/TOPSISscore_13_4.png" /> 0.7977<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOPSISscore_13.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var format_Province_14 = new ol.format.GeoJSON();
var features_Province_14 = format_Province_14.readFeatures(json_Province_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Province_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_14.addFeatures(features_Province_14);
var lyr_Province_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_14, 
                style: style_Province_14,
                popuplayertitle: 'Province',
                interactive: false,
                title: '<img src="styles/legend/Province_14.png" /> Province'
            });
var format_NWorstlocations_15 = new ol.format.GeoJSON();
var features_NWorstlocations_15 = format_NWorstlocations_15.readFeatures(json_NWorstlocations_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NWorstlocations_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NWorstlocations_15.addFeatures(features_NWorstlocations_15);
var lyr_NWorstlocations_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NWorstlocations_15, 
                style: style_NWorstlocations_15,
                popuplayertitle: 'N Worst locations',
                interactive: true,
                title: '<img src="styles/legend/NWorstlocations_15.png" /> N Worst locations'
            });
var format_NTop100locations_16 = new ol.format.GeoJSON();
var features_NTop100locations_16 = format_NTop100locations_16.readFeatures(json_NTop100locations_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NTop100locations_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTop100locations_16.addFeatures(features_NTop100locations_16);
var lyr_NTop100locations_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTop100locations_16, 
                style: style_NTop100locations_16,
                popuplayertitle: 'N Top 100 locations',
                interactive: true,
                title: '<img src="styles/legend/NTop100locations_16.png" /> N Top 100 locations'
            });
var format_NRUPTL_17 = new ol.format.GeoJSON();
var features_NRUPTL_17 = format_NRUPTL_17.readFeatures(json_NRUPTL_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NRUPTL_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NRUPTL_17.addFeatures(features_NRUPTL_17);
var lyr_NRUPTL_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NRUPTL_17, 
                style: style_NRUPTL_17,
                popuplayertitle: 'N RUPTL',
                interactive: true,
                title: '<img src="styles/legend/NRUPTL_17.png" /> N RUPTL'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NHydrography_1.setVisible(false);lyr_NResidentialarea_2.setVisible(false);lyr_NSlope_3.setVisible(false);lyr_NElevation_4.setVisible(false);lyr_NTemperature_5.setVisible(false);lyr_NGenerationtosubstationratio_6.setVisible(false);lyr_NProximitytosubstation_7.setVisible(false);lyr_NProximitytogrid_8.setVisible(false);lyr_NProximitytoroad_9.setVisible(false);lyr_NIAV_10.setVisible(false);lyr_NGHI_11.setVisible(false);lyr_NLCOE_12.setVisible(false);lyr_TOPSISscore_13.setVisible(true);lyr_Province_14.setVisible(true);lyr_NWorstlocations_15.setVisible(true);lyr_NTop100locations_16.setVisible(true);lyr_NRUPTL_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NHydrography_1,lyr_NResidentialarea_2,lyr_NSlope_3,lyr_NElevation_4,lyr_NTemperature_5,lyr_NGenerationtosubstationratio_6,lyr_NProximitytosubstation_7,lyr_NProximitytogrid_8,lyr_NProximitytoroad_9,lyr_NIAV_10,lyr_NGHI_11,lyr_NLCOE_12,lyr_TOPSISscore_13,lyr_Province_14,lyr_NWorstlocations_15,lyr_NTop100locations_16,lyr_NRUPTL_17];
lyr_Province_14.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_NWorstlocations_15.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'TOPSIS val': 'TOPSIS val', 'Lat': 'Lat', 'Lon': 'Lon', 'N_GHI': 'N_GHI', 'N_elev': 'N_elev', 'N_IAV': 'N_IAV', 'N_prx_road': 'N_prx_road', 'N_prx_grid': 'N_prx_grid', 'N_prx_ss': 'N_prx_ss', 'N_temp': 'N_temp', 'N_slope': 'N_slope', 'N_resident': 'N_resident', 'N_rat_PPSS': 'N_rat_PPSS', 'N_hidro': 'N_hidro', 'N_LCOE': 'N_LCOE', });
lyr_NTop100locations_16.set('fieldAliases', {'fid': 'fid', 'Lat': 'Lat', 'Lon': 'Lon', 'TOPSIS val': 'TOPSIS val', 'Province': 'Province', 'Rank': 'Rank', 'N_GHI': 'N_GHI', 'N_elev': 'N_elev', 'N_IAV': 'N_IAV', 'N_prx_road': 'N_prx_road', 'N_prx_grid': 'N_prx_grid', 'N_prx_ss': 'N_prx_ss', 'N_temp': 'N_temp', 'N_slope': 'N_slope', 'N_resident': 'N_resident', 'N_rat_PPSS': 'N_rat_PPSS', 'N_hidro': 'N_hidro', 'N_LCOE': 'N_LCOE', });
lyr_NRUPTL_17.set('fieldAliases', {'Province': 'Province', 'Rank': 'Rank', 'Rank2': 'Rank2', 'Area': 'Area', 'Quota (MW)': 'Quota (MW)', 'Lat': 'Lat', 'Lon': 'Lon', 'TOPSIS val': 'TOPSIS val', 'N_GHI': 'N_GHI', 'N_elev': 'N_elev', 'N_IAV': 'N_IAV', 'N_prx_road': 'N_prx_road', 'N_prx_grid': 'N_prx_grid', 'N_prx_ss': 'N_prx_ss', 'N_temp': 'N_temp', 'N_slope': 'N_slope', 'N_resident': 'N_resident', 'N_rat_PPSS': 'N_rat_PPSS', 'N_hidro': 'N_hidro', 'N_LCOE': 'N_LCOE', });
lyr_Province_14.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_NWorstlocations_15.set('fieldImages', {'fid': 'TextEdit', 'Province': 'TextEdit', 'TOPSIS val': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'N_GHI': 'TextEdit', 'N_elev': 'TextEdit', 'N_IAV': 'TextEdit', 'N_prx_road': 'TextEdit', 'N_prx_grid': 'TextEdit', 'N_prx_ss': 'TextEdit', 'N_temp': 'TextEdit', 'N_slope': 'TextEdit', 'N_resident': 'TextEdit', 'N_rat_PPSS': 'TextEdit', 'N_hidro': 'TextEdit', 'N_LCOE': 'TextEdit', });
lyr_NTop100locations_16.set('fieldImages', {'fid': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'TOPSIS val': 'TextEdit', 'Province': 'TextEdit', 'Rank': 'TextEdit', 'N_GHI': 'TextEdit', 'N_elev': 'TextEdit', 'N_IAV': 'TextEdit', 'N_prx_road': 'TextEdit', 'N_prx_grid': 'TextEdit', 'N_prx_ss': 'TextEdit', 'N_temp': 'TextEdit', 'N_slope': 'TextEdit', 'N_resident': 'TextEdit', 'N_rat_PPSS': 'TextEdit', 'N_hidro': 'TextEdit', 'N_LCOE': 'TextEdit', });
lyr_NRUPTL_17.set('fieldImages', {'Province': 'TextEdit', 'Rank': 'TextEdit', 'Rank2': 'TextEdit', 'Area': 'TextEdit', 'Quota (MW)': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'TOPSIS val': 'TextEdit', 'N_GHI': 'TextEdit', 'N_elev': 'TextEdit', 'N_IAV': 'TextEdit', 'N_prx_road': 'TextEdit', 'N_prx_grid': 'TextEdit', 'N_prx_ss': 'TextEdit', 'N_temp': 'TextEdit', 'N_slope': 'TextEdit', 'N_resident': 'TextEdit', 'N_rat_PPSS': 'TextEdit', 'N_hidro': 'TextEdit', 'N_LCOE': 'TextEdit', });
lyr_Province_14.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_NWorstlocations_15.set('fieldLabels', {'fid': 'hidden field', 'Province': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'N_GHI': 'inline label - always visible', 'N_elev': 'inline label - always visible', 'N_IAV': 'inline label - always visible', 'N_prx_road': 'inline label - always visible', 'N_prx_grid': 'inline label - always visible', 'N_prx_ss': 'inline label - always visible', 'N_temp': 'inline label - always visible', 'N_slope': 'inline label - always visible', 'N_resident': 'inline label - always visible', 'N_rat_PPSS': 'inline label - always visible', 'N_hidro': 'inline label - always visible', 'N_LCOE': 'inline label - always visible', });
lyr_NTop100locations_16.set('fieldLabels', {'fid': 'hidden field', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'Province': 'inline label - always visible', 'Rank': 'inline label - always visible', 'N_GHI': 'inline label - always visible', 'N_elev': 'inline label - always visible', 'N_IAV': 'inline label - always visible', 'N_prx_road': 'inline label - always visible', 'N_prx_grid': 'inline label - always visible', 'N_prx_ss': 'inline label - always visible', 'N_temp': 'inline label - always visible', 'N_slope': 'inline label - always visible', 'N_resident': 'inline label - always visible', 'N_rat_PPSS': 'inline label - always visible', 'N_hidro': 'inline label - always visible', 'N_LCOE': 'inline label - always visible', });
lyr_NRUPTL_17.set('fieldLabels', {'Province': 'inline label - always visible', 'Rank': 'hidden field', 'Rank2': 'hidden field', 'Area': 'hidden field', 'Quota (MW)': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'N_GHI': 'inline label - always visible', 'N_elev': 'inline label - always visible', 'N_IAV': 'inline label - always visible', 'N_prx_road': 'inline label - always visible', 'N_prx_grid': 'inline label - always visible', 'N_prx_ss': 'inline label - always visible', 'N_temp': 'inline label - always visible', 'N_slope': 'inline label - always visible', 'N_resident': 'inline label - always visible', 'N_rat_PPSS': 'inline label - always visible', 'N_hidro': 'inline label - always visible', 'N_LCOE': 'inline label - always visible', });
lyr_NRUPTL_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});