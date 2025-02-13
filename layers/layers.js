var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mdantsane_1 = new ol.format.GeoJSON();
var features_Mdantsane_1 = format_Mdantsane_1.readFeatures(json_Mdantsane_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mdantsane_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mdantsane_1.addFeatures(features_Mdantsane_1);
var lyr_Mdantsane_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mdantsane_1, 
                style: style_Mdantsane_1,
                popuplayertitle: "Mdantsane",
                interactive: false,
                title: '<img src="styles/legend/Mdantsane_1.png" /> Mdantsane'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: "Roads",
                interactive: false,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_Railway_3 = new ol.format.GeoJSON();
var features_Railway_3 = format_Railway_3.readFeatures(json_Railway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_3.addFeatures(features_Railway_3);
var lyr_Railway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_3, 
                style: style_Railway_3,
                popuplayertitle: "Railway",
                interactive: false,
                title: '<img src="styles/legend/Railway_3.png" /> Railway'
            });
var format_Business_4 = new ol.format.GeoJSON();
var features_Business_4 = format_Business_4.readFeatures(json_Business_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Business_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Business_4.addFeatures(features_Business_4);
var lyr_Business_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Business_4, 
                style: style_Business_4,
                popuplayertitle: "Business",
                interactive: true,
                title: '<img src="styles/legend/Business_4.png" /> Business'
            });
var format_Trainstation_5 = new ol.format.GeoJSON();
var features_Trainstation_5 = format_Trainstation_5.readFeatures(json_Trainstation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trainstation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trainstation_5.addFeatures(features_Trainstation_5);
var lyr_Trainstation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trainstation_5, 
                style: style_Trainstation_5,
                popuplayertitle: "Train station",
                interactive: true,
                title: '<img src="styles/legend/Trainstation_5.png" /> Train station'
            });
var format_TaxiRank_6 = new ol.format.GeoJSON();
var features_TaxiRank_6 = format_TaxiRank_6.readFeatures(json_TaxiRank_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TaxiRank_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TaxiRank_6.addFeatures(features_TaxiRank_6);
var lyr_TaxiRank_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TaxiRank_6, 
                style: style_TaxiRank_6,
                popuplayertitle: "Taxi Rank",
                interactive: true,
                title: '<img src="styles/legend/TaxiRank_6.png" /> Taxi Rank'
            });
var format_Municipaloffices_7 = new ol.format.GeoJSON();
var features_Municipaloffices_7 = format_Municipaloffices_7.readFeatures(json_Municipaloffices_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipaloffices_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipaloffices_7.addFeatures(features_Municipaloffices_7);
var lyr_Municipaloffices_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipaloffices_7, 
                style: style_Municipaloffices_7,
                popuplayertitle: "Municipal offices",
                interactive: true,
                title: '<img src="styles/legend/Municipaloffices_7.png" /> Municipal offices'
            });
var format_Mall_8 = new ol.format.GeoJSON();
var features_Mall_8 = format_Mall_8.readFeatures(json_Mall_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mall_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mall_8.addFeatures(features_Mall_8);
var lyr_Mall_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mall_8, 
                style: style_Mall_8,
                popuplayertitle: "Mall",
                interactive: true,
                title: '<img src="styles/legend/Mall_8.png" /> Mall'
            });
var format_Banks_9 = new ol.format.GeoJSON();
var features_Banks_9 = format_Banks_9.readFeatures(json_Banks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banks_9.addFeatures(features_Banks_9);
var lyr_Banks_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banks_9, 
                style: style_Banks_9,
                popuplayertitle: "Banks",
                interactive: true,
                title: '<img src="styles/legend/Banks_9.png" /> Banks'
            });
var format_Market_10 = new ol.format.GeoJSON();
var features_Market_10 = format_Market_10.readFeatures(json_Market_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Market_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Market_10.addFeatures(features_Market_10);
var lyr_Market_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Market_10, 
                style: style_Market_10,
                popuplayertitle: "Market",
                interactive: true,
                title: '<img src="styles/legend/Market_10.png" /> Market'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Mdantsane_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_Railway_3.setVisible(true);lyr_Business_4.setVisible(true);lyr_Trainstation_5.setVisible(true);lyr_TaxiRank_6.setVisible(true);lyr_Municipaloffices_7.setVisible(true);lyr_Mall_8.setVisible(true);lyr_Banks_9.setVisible(true);lyr_Market_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Mdantsane_1,lyr_Roads_2,lyr_Railway_3,lyr_Business_4,lyr_Trainstation_5,lyr_TaxiRank_6,lyr_Municipaloffices_7,lyr_Mall_8,lyr_Banks_9,lyr_Market_10];
lyr_Mdantsane_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Roads_2.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_af': 'name_af', 'name_nr': 'name_nr', 'name_st': 'name_st', 'name_nso': 'name_nso', 'name_ssw': 'name_ssw', 'name_ts': 'name_ts', 'name_tn': 'name_tn', 'name_ve': 'name_ve', 'name_xh': 'name_xh', 'name_zu': 'name_zu', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Name_2': 'Name_2', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Railway_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Business_4.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type of business': 'Type of business', });
lyr_Trainstation_5.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_TaxiRank_6.set('fieldAliases', {'name': 'name', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Municipaloffices_7.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', });
lyr_Mall_8.set('fieldAliases', {'Name': 'Name', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'Type': 'Type', });
lyr_Banks_9.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', });
lyr_Market_10.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'Latitude': 'Latitude', 'longitude': 'longitude', 'Type': 'Type', });
lyr_Mdantsane_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'name': '', 'name_en': '', 'highway': '', 'surface': '', 'smoothness': '', 'width': '', 'lanes': '', 'oneway': '', 'bridge': '', 'layer': '', 'source': '', 'name_af': '', 'name_nr': '', 'name_st': '', 'name_nso': '', 'name_ssw': '', 'name_ts': '', 'name_tn': '', 'name_ve': '', 'name_xh': '', 'name_zu': '', 'osm_id': '', 'osm_type': '', 'Name_2': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Railway_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Business_4.set('fieldImages', {'Name': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type of business': 'TextEdit', });
lyr_Trainstation_5.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr_TaxiRank_6.set('fieldImages', {'name': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_Municipaloffices_7.set('fieldImages', {'Name': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', });
lyr_Mall_8.set('fieldImages', {'Name': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Type': 'TextEdit', });
lyr_Banks_9.set('fieldImages', {'Name': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', });
lyr_Market_10.set('fieldImages', {'Name': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'longitude': 'TextEdit', 'Type': 'TextEdit', });
lyr_Mdantsane_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Roads_2.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_af': 'no label', 'name_nr': 'no label', 'name_st': 'no label', 'name_nso': 'no label', 'name_ssw': 'no label', 'name_ts': 'no label', 'name_tn': 'no label', 'name_ve': 'no label', 'name_xh': 'no label', 'name_zu': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'Name_2': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Railway_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Business_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Type of business': 'no label', });
lyr_Trainstation_5.set('fieldLabels', {'name': 'inline label - visible with data', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_TaxiRank_6.set('fieldLabels', {'name': 'inline label - visible with data', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_Municipaloffices_7.set('fieldLabels', {'Name': 'inline label - visible with data', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', });
lyr_Mall_8.set('fieldLabels', {'Name': 'no label', 'address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'Type': 'no label', });
lyr_Banks_9.set('fieldLabels', {'Name': 'inline label - visible with data', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', });
lyr_Market_10.set('fieldLabels', {'Name': 'inline label - visible with data', 'Address': 'no label', 'Latitude': 'no label', 'longitude': 'no label', 'Type': 'no label', });
lyr_Market_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});