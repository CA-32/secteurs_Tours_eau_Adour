var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zone32_1 = new ol.format.GeoJSON();
var features_zone32_1 = format_zone32_1.readFeatures(json_zone32_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zone32_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone32_1.addFeatures(features_zone32_1);
var lyr_zone32_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zone32_1, 
                style: style_zone32_1,
                interactive: true,
    title: 'zone 32<br />\
    <img src="styles/legend/zone32_1_0.png" /> A32<br />\
    <img src="styles/legend/zone32_1_1.png" /> B32<br />\
    <img src="styles/legend/zone32_1_2.png" /> C32<br />\
    <img src="styles/legend/zone32_1_3.png" /> D32<br />'
        });
var format_Dpartements_2 = new ol.format.GeoJSON();
var features_Dpartements_2 = format_Dpartements_2.readFeatures(json_Dpartements_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartements_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartements_2.addFeatures(features_Dpartements_2);
var lyr_Dpartements_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dpartements_2, 
                style: style_Dpartements_2,
                interactive: false,
                title: '<img src="styles/legend/Dpartements_2.png" /> Départements'
            });
var format_zone65_3 = new ol.format.GeoJSON();
var features_zone65_3 = format_zone65_3.readFeatures(json_zone65_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zone65_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone65_3.addFeatures(features_zone65_3);
var lyr_zone65_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zone65_3, 
                style: style_zone65_3,
                interactive: true,
    title: 'zone 65 <br />\
    <img src="styles/legend/zone65_3_0.png" /> A65<br />\
    <img src="styles/legend/zone65_3_1.png" /> B65<br />\
    <img src="styles/legend/zone65_3_2.png" /> C65<br />\
    <img src="styles/legend/zone65_3_3.png" /> D65<br />'
        });
var format_isochrone90L93_4 = new ol.format.GeoJSON();
var features_isochrone90L93_4 = format_isochrone90L93_4.readFeatures(json_isochrone90L93_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isochrone90L93_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isochrone90L93_4.addFeatures(features_isochrone90L93_4);
var lyr_isochrone90L93_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isochrone90L93_4, 
                style: style_isochrone90L93_4,
                interactive: true,
                title: '<img src="styles/legend/isochrone90L93_4.png" /> isochrone 90 L93'
            });

lyr_OSMStandard_0.setVisible(true);lyr_zone32_1.setVisible(true);lyr_Dpartements_2.setVisible(true);lyr_zone65_3.setVisible(true);lyr_isochrone90L93_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_zone32_1,lyr_Dpartements_2,lyr_zone65_3,lyr_isochrone90L93_4];
lyr_zone32_1.set('fieldAliases', {'NOM': 'NOM', });
lyr_Dpartements_2.set('fieldAliases', {'NOM_DEPT': 'NOM_DEPT', 'INSEE_DEPT': 'INSEE_DEPT', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'NOM_REGION': 'NOM_REGION', 'INSEE_REG': 'INSEE_REG', });
lyr_zone65_3.set('fieldAliases', {'zone': 'zone', });
lyr_isochrone90L93_4.set('fieldAliases', {'ID': 'ID', 'isochrone': 'isochrone', });
lyr_zone32_1.set('fieldImages', {'NOM': 'TextEdit', });
lyr_Dpartements_2.set('fieldImages', {'NOM_DEPT': 'TextEdit', 'INSEE_DEPT': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'NOM_REGION': 'TextEdit', 'INSEE_REG': 'TextEdit', });
lyr_zone65_3.set('fieldImages', {'zone': 'TextEdit', });
lyr_isochrone90L93_4.set('fieldImages', {'ID': 'TextEdit', 'isochrone': '', });
lyr_zone32_1.set('fieldLabels', {'NOM': 'inline label', });
lyr_Dpartements_2.set('fieldLabels', {'NOM_DEPT': 'no label', 'INSEE_DEPT': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'NOM_REGION': 'no label', 'INSEE_REG': 'no label', });
lyr_zone65_3.set('fieldLabels', {'zone': 'inline label', });
lyr_isochrone90L93_4.set('fieldLabels', {'ID': 'no label', 'isochrone': 'inline label', });
lyr_isochrone90L93_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});