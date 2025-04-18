ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([103.025535, -8.360910, 129.189167, 4.364592]);
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
var lyr_NResidentialarea_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Residential area<br />\
    <img src="styles/legend/NResidentialarea_1_0.png" /> 0<br />\
    <img src="styles/legend/NResidentialarea_1_1.png" /> 0<br />\
    <img src="styles/legend/NResidentialarea_1_2.png" /> 1<br />\
    <img src="styles/legend/NResidentialarea_1_3.png" /> 1<br />\
    <img src="styles/legend/NResidentialarea_1_4.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NResidentialarea_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NSlope_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Slope<br />\
    <img src="styles/legend/NSlope_2_0.png" /> 0.0000<br />\
    <img src="styles/legend/NSlope_2_1.png" /> 0.2500<br />\
    <img src="styles/legend/NSlope_2_2.png" /> 0.5000<br />\
    <img src="styles/legend/NSlope_2_3.png" /> 0.7500<br />\
    <img src="styles/legend/NSlope_2_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NSlope_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NElevation_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Elevation<br />\
    <img src="styles/legend/NElevation_3_0.png" /> 0.0000<br />\
    <img src="styles/legend/NElevation_3_1.png" /> 0.2500<br />\
    <img src="styles/legend/NElevation_3_2.png" /> 0.5000<br />\
    <img src="styles/legend/NElevation_3_3.png" /> 0.7500<br />\
    <img src="styles/legend/NElevation_3_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NElevation_3.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NTemperature_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Temperature<br />\
    <img src="styles/legend/NTemperature_4_0.png" /> 0.0000<br />\
    <img src="styles/legend/NTemperature_4_1.png" /> 0.2500<br />\
    <img src="styles/legend/NTemperature_4_2.png" /> 0.5000<br />\
    <img src="styles/legend/NTemperature_4_3.png" /> 0.7500<br />\
    <img src="styles/legend/NTemperature_4_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NTemperature_4.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NGenerationtosubstationratio_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Generation to substation ratio<br />\
    <img src="styles/legend/NGenerationtosubstationratio_5_0.png" /> 0.0000<br />\
    <img src="styles/legend/NGenerationtosubstationratio_5_1.png" /> 0.2500<br />\
    <img src="styles/legend/NGenerationtosubstationratio_5_2.png" /> 0.5000<br />\
    <img src="styles/legend/NGenerationtosubstationratio_5_3.png" /> 0.7500<br />\
    <img src="styles/legend/NGenerationtosubstationratio_5_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NGenerationtosubstationratio_5.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NProximitytosubstation_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Proximity to substation<br />\
    <img src="styles/legend/NProximitytosubstation_6_0.png" /> 0.0000<br />\
    <img src="styles/legend/NProximitytosubstation_6_1.png" /> 0.2500<br />\
    <img src="styles/legend/NProximitytosubstation_6_2.png" /> 0.5000<br />\
    <img src="styles/legend/NProximitytosubstation_6_3.png" /> 0.7500<br />\
    <img src="styles/legend/NProximitytosubstation_6_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NProximitytosubstation_6.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NProximitytogrid_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Proximity to grid<br />\
    <img src="styles/legend/NProximitytogrid_7_0.png" /> 0.0000<br />\
    <img src="styles/legend/NProximitytogrid_7_1.png" /> 0.2500<br />\
    <img src="styles/legend/NProximitytogrid_7_2.png" /> 0.5000<br />\
    <img src="styles/legend/NProximitytogrid_7_3.png" /> 0.7500<br />\
    <img src="styles/legend/NProximitytogrid_7_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NProximitytogrid_7.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NProximitytoroad_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N Proximity to road<br />\
    <img src="styles/legend/NProximitytoroad_8_0.png" /> 0.0000<br />\
    <img src="styles/legend/NProximitytoroad_8_1.png" /> 0.2500<br />\
    <img src="styles/legend/NProximitytoroad_8_2.png" /> 0.5000<br />\
    <img src="styles/legend/NProximitytoroad_8_3.png" /> 0.7500<br />\
    <img src="styles/legend/NProximitytoroad_8_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NProximitytoroad_8.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NIAV_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N IAV<br />\
    <img src="styles/legend/NIAV_9_0.png" /> 0.0000<br />\
    <img src="styles/legend/NIAV_9_1.png" /> 0.2500<br />\
    <img src="styles/legend/NIAV_9_2.png" /> 0.5000<br />\
    <img src="styles/legend/NIAV_9_3.png" /> 0.7500<br />\
    <img src="styles/legend/NIAV_9_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NIAV_9.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NGHI_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N GHI<br />\
    <img src="styles/legend/NGHI_10_0.png" /> 0.0000<br />\
    <img src="styles/legend/NGHI_10_1.png" /> 0.2500<br />\
    <img src="styles/legend/NGHI_10_2.png" /> 0.5000<br />\
    <img src="styles/legend/NGHI_10_3.png" /> 0.7500<br />\
    <img src="styles/legend/NGHI_10_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NGHI_10.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_NLCOE_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'N LCOE<br />\
    <img src="styles/legend/NLCOE_11_0.png" /> 0.0000<br />\
    <img src="styles/legend/NLCOE_11_1.png" /> 0.2500<br />\
    <img src="styles/legend/NLCOE_11_2.png" /> 0.5000<br />\
    <img src="styles/legend/NLCOE_11_3.png" /> 0.7500<br />\
    <img src="styles/legend/NLCOE_11_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NLCOE_11.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_TOPSIS_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOPSIS<br />\
    <img src="styles/legend/TOPSIS_12_0.png" /> 0.0000<br />\
    <img src="styles/legend/TOPSIS_12_1.png" /> 0.2500<br />\
    <img src="styles/legend/TOPSIS_12_2.png" /> 0.5000<br />\
    <img src="styles/legend/TOPSIS_12_3.png" /> 0.7500<br />\
    <img src="styles/legend/TOPSIS_12_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOPSIS_12.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var format_NWorstlocations_13 = new ol.format.GeoJSON();
var features_NWorstlocations_13 = format_NWorstlocations_13.readFeatures(json_NWorstlocations_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NWorstlocations_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NWorstlocations_13.addFeatures(features_NWorstlocations_13);
var lyr_NWorstlocations_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NWorstlocations_13, 
                style: style_NWorstlocations_13,
                popuplayertitle: 'N Worst locations',
                interactive: true,
                title: '<img src="styles/legend/NWorstlocations_13.png" /> N Worst locations'
            });
var format_NTop100locations_14 = new ol.format.GeoJSON();
var features_NTop100locations_14 = format_NTop100locations_14.readFeatures(json_NTop100locations_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NTop100locations_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTop100locations_14.addFeatures(features_NTop100locations_14);
var lyr_NTop100locations_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTop100locations_14, 
                style: style_NTop100locations_14,
                popuplayertitle: 'N Top 100 locations',
                interactive: true,
                title: '<img src="styles/legend/NTop100locations_14.png" /> N Top 100 locations'
            });
var format_NRUPTL_15 = new ol.format.GeoJSON();
var features_NRUPTL_15 = format_NRUPTL_15.readFeatures(json_NRUPTL_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NRUPTL_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NRUPTL_15.addFeatures(features_NRUPTL_15);
var lyr_NRUPTL_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NRUPTL_15, 
                style: style_NRUPTL_15,
                popuplayertitle: 'N RUPTL',
                interactive: true,
                title: '<img src="styles/legend/NRUPTL_15.png" /> N RUPTL'
            });
var format_Province_16 = new ol.format.GeoJSON();
var features_Province_16 = format_Province_16.readFeatures(json_Province_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Province_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_16.addFeatures(features_Province_16);
var lyr_Province_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_16, 
                style: style_Province_16,
                popuplayertitle: 'Province',
                interactive: false,
                title: '<img src="styles/legend/Province_16.png" /> Province'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NResidentialarea_1.setVisible(false);lyr_NSlope_2.setVisible(false);lyr_NElevation_3.setVisible(false);lyr_NTemperature_4.setVisible(false);lyr_NGenerationtosubstationratio_5.setVisible(false);lyr_NProximitytosubstation_6.setVisible(false);lyr_NProximitytogrid_7.setVisible(false);lyr_NProximitytoroad_8.setVisible(false);lyr_NIAV_9.setVisible(false);lyr_NGHI_10.setVisible(false);lyr_NLCOE_11.setVisible(false);lyr_TOPSIS_12.setVisible(false);lyr_NWorstlocations_13.setVisible(true);lyr_NTop100locations_14.setVisible(true);lyr_NRUPTL_15.setVisible(true);lyr_Province_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NResidentialarea_1,lyr_NSlope_2,lyr_NElevation_3,lyr_NTemperature_4,lyr_NGenerationtosubstationratio_5,lyr_NProximitytosubstation_6,lyr_NProximitytogrid_7,lyr_NProximitytoroad_8,lyr_NIAV_9,lyr_NGHI_10,lyr_NLCOE_11,lyr_TOPSIS_12,lyr_NWorstlocations_13,lyr_NTop100locations_14,lyr_NRUPTL_15,lyr_Province_16];
lyr_NWorstlocations_13.set('fieldAliases', {'Province': 'Province', 'Lat': 'Lat', 'Lon': 'Lon', 'N_GHI': 'N_GHI', 'N_elev': 'N_elev', 'N_IAV': 'N_IAV', 'N_prx_road': 'N_prx_road', 'N_prx_grid': 'N_prx_grid', 'N_prx_ss': 'N_prx_ss', 'N_temp': 'N_temp', 'N_slope': 'N_slope', 'N_resident': 'N_resident', 'N_rat_PPSS': 'N_rat_PPSS', 'N_LCOE': 'N_LCOE', });
lyr_NTop100locations_14.set('fieldAliases', {'Lat': 'Lat', 'Lon': 'Lon', 'TOPSIS val': 'TOPSIS val', 'Province': 'Province', 'Rank': 'Rank', 'N_GHI': 'N_GHI', 'N_elev': 'N_elev', 'N_IAV': 'N_IAV', 'N_prx_road': 'N_prx_road', 'N_prx_grid': 'N_prx_grid', 'N_prx_ss': 'N_prx_ss', 'N_temp': 'N_temp', 'N_slope': 'N_slope', 'N_resident': 'N_resident', 'N_rat_PPSS': 'N_rat_PPSS', 'N_LCOE': 'N_LCOE', });
lyr_NRUPTL_15.set('fieldAliases', {'Province': 'Province', 'Rank': 'Rank', 'Rank2': 'Rank2', 'Area': 'Area', 'Quota (MW)': 'Quota (MW)', 'Lat': 'Lat', 'Lon': 'Lon', 'TOPSIS val': 'TOPSIS val', 'N_GHI': 'N_GHI', 'N_elev': 'N_elev', 'N_IAV': 'N_IAV', 'N_prx_road': 'N_prx_road', 'N_prx_grid': 'N_prx_grid', 'N_prx_ss': 'N_prx_ss', 'N_temp': 'N_temp', 'N_slope': 'N_slope', 'N_resident': 'N_resident', 'N_rat_PPSS': 'N_rat_PPSS', 'N_LCOE': 'N_LCOE', });
lyr_Province_16.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_NWorstlocations_13.set('fieldImages', {'Province': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'N_GHI': 'TextEdit', 'N_elev': 'TextEdit', 'N_IAV': 'TextEdit', 'N_prx_road': 'TextEdit', 'N_prx_grid': 'TextEdit', 'N_prx_ss': 'TextEdit', 'N_temp': 'TextEdit', 'N_slope': 'TextEdit', 'N_resident': 'TextEdit', 'N_rat_PPSS': 'TextEdit', 'N_LCOE': 'TextEdit', });
lyr_NTop100locations_14.set('fieldImages', {'Lat': 'TextEdit', 'Lon': 'TextEdit', 'TOPSIS val': 'TextEdit', 'Province': 'TextEdit', 'Rank': 'TextEdit', 'N_GHI': 'TextEdit', 'N_elev': 'TextEdit', 'N_IAV': 'TextEdit', 'N_prx_road': 'TextEdit', 'N_prx_grid': 'TextEdit', 'N_prx_ss': 'TextEdit', 'N_temp': 'TextEdit', 'N_slope': 'TextEdit', 'N_resident': 'TextEdit', 'N_rat_PPSS': 'TextEdit', 'N_LCOE': 'TextEdit', });
lyr_NRUPTL_15.set('fieldImages', {'Province': 'TextEdit', 'Rank': 'TextEdit', 'Rank2': 'TextEdit', 'Area': 'TextEdit', 'Quota (MW)': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'TOPSIS val': 'TextEdit', 'N_GHI': 'TextEdit', 'N_elev': 'TextEdit', 'N_IAV': 'TextEdit', 'N_prx_road': 'TextEdit', 'N_prx_grid': 'TextEdit', 'N_prx_ss': 'TextEdit', 'N_temp': 'TextEdit', 'N_slope': 'TextEdit', 'N_resident': 'TextEdit', 'N_rat_PPSS': 'TextEdit', 'N_LCOE': 'TextEdit', });
lyr_Province_16.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_NWorstlocations_13.set('fieldLabels', {'Province': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'N_GHI': 'inline label - always visible', 'N_elev': 'inline label - always visible', 'N_IAV': 'inline label - always visible', 'N_prx_road': 'inline label - always visible', 'N_prx_grid': 'inline label - always visible', 'N_prx_ss': 'inline label - always visible', 'N_temp': 'inline label - always visible', 'N_slope': 'inline label - always visible', 'N_resident': 'inline label - always visible', 'N_rat_PPSS': 'inline label - always visible', 'N_LCOE': 'inline label - always visible', });
lyr_NTop100locations_14.set('fieldLabels', {'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'Province': 'inline label - always visible', 'Rank': 'inline label - always visible', 'N_GHI': 'inline label - always visible', 'N_elev': 'inline label - always visible', 'N_IAV': 'inline label - always visible', 'N_prx_road': 'inline label - always visible', 'N_prx_grid': 'inline label - always visible', 'N_prx_ss': 'inline label - always visible', 'N_temp': 'inline label - always visible', 'N_slope': 'inline label - always visible', 'N_resident': 'inline label - always visible', 'N_rat_PPSS': 'inline label - always visible', 'N_LCOE': 'inline label - always visible', });
lyr_NRUPTL_15.set('fieldLabels', {'Province': 'inline label - always visible', 'Rank': 'hidden field', 'Rank2': 'hidden field', 'Area': 'hidden field', 'Quota (MW)': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'N_GHI': 'inline label - always visible', 'N_elev': 'inline label - always visible', 'N_IAV': 'inline label - always visible', 'N_prx_road': 'inline label - always visible', 'N_prx_grid': 'inline label - always visible', 'N_prx_ss': 'inline label - always visible', 'N_temp': 'inline label - always visible', 'N_slope': 'inline label - always visible', 'N_resident': 'inline label - always visible', 'N_rat_PPSS': 'inline label - always visible', 'N_LCOE': 'inline label - always visible', });
lyr_Province_16.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_Province_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});