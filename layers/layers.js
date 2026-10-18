var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'ولايات محافظة ظفار',
                interactive: true,
    title: 'ولايات محافظة ظفار<br />\
    <img src="styles/legend/_0_0.png" /> DALKUT<br />\
    <img src="styles/legend/_0_1.png" /> MIRBAT<br />\
    <img src="styles/legend/_0_2.png" /> MUQSHIN<br />\
    <img src="styles/legend/_0_3.png" /> RAKHYUT<br />\
    <img src="styles/legend/_0_4.png" /> SADH<br />\
    <img src="styles/legend/_0_5.png" /> SALALAH<br />\
    <img src="styles/legend/_0_6.png" /> SHALIM<br />\
    <img src="styles/legend/_0_7.png" /> TAQAH<br />\
    <img src="styles/legend/_0_8.png" /> THUMRAYT<br />\
    <img src="styles/legend/_0_9.png" /> <br />' });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'الكثافة',
                interactive: true,
    title: 'الكثافة<br />\
    <img src="styles/legend/_1_0.png" /> 0 - 26<br />\
    <img src="styles/legend/_1_1.png" /> 26 - 74<br />\
    <img src="styles/legend/_1_2.png" /> 74 - 161<br />\
    <img src="styles/legend/_1_3.png" /> 161 - 356<br />\
    <img src="styles/legend/_1_4.png" /> 356 - 579<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'المواقع',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> المواقع'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2];
lyr__0.set('fieldAliases', {'ADMIN_ID': 'ADMIN_ID', 'FCODE': 'FCODE', 'SOURCE': 'SOURCE', 'DISPUTED': 'DISPUTED', 'NAME': 'NAME', 'ANAME': 'ANAME', 'REGION': 'REGION', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr__1.set('fieldAliases', {'total_numb': 'total_numb', });
lyr__2.set('fieldAliases', {'ec5_uuid': 'ec5_uuid', 'created_at': 'created_at', 'uploaded_a': 'uploaded_a', 'title': 'title', '2_': '2_', '3_': '3_', '4_': '4_', '5___': '5___', '6___': '6___', '7__': '7__', 'lat_8___': 'lat_8___', 'long_8___': 'long_8___', 'accuracy_8': 'accuracy_8', 'UTM_Northi': 'UTM_Northi', 'UTM_Eastin': 'UTM_Eastin', 'UTM_Zone_8': 'UTM_Zone_8', '9_____': '9_____', '10____': '10____', '11_____': '11_____', '12_____': '12_____', });
lyr__0.set('fieldImages', {'ADMIN_ID': 'TextEdit', 'FCODE': 'TextEdit', 'SOURCE': 'TextEdit', 'DISPUTED': 'Range', 'NAME': 'TextEdit', 'ANAME': 'TextEdit', 'REGION': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr__1.set('fieldImages', {'total_numb': 'TextEdit', });
lyr__2.set('fieldImages', {'ec5_uuid': 'TextEdit', 'created_at': 'TextEdit', 'uploaded_a': 'TextEdit', 'title': 'TextEdit', '2_': 'TextEdit', '3_': 'TextEdit', '4_': 'TextEdit', '5___': 'TextEdit', '6___': 'TextEdit', '7__': 'TextEdit', 'lat_8___': 'TextEdit', 'long_8___': 'TextEdit', 'accuracy_8': 'TextEdit', 'UTM_Northi': 'TextEdit', 'UTM_Eastin': 'TextEdit', 'UTM_Zone_8': 'TextEdit', '9_____': 'TextEdit', '10____': 'TextEdit', '11_____': 'TextEdit', '12_____': 'TextEdit', });
lyr__0.set('fieldLabels', {'ADMIN_ID': 'no label', 'FCODE': 'no label', 'SOURCE': 'no label', 'DISPUTED': 'no label', 'NAME': 'no label', 'ANAME': 'no label', 'REGION': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr__1.set('fieldLabels', {'total_numb': 'inline label - visible with data', });
lyr__2.set('fieldLabels', {'ec5_uuid': 'no label', 'created_at': 'no label', 'uploaded_a': 'no label', 'title': 'inline label - visible with data', '2_': 'no label', '3_': 'no label', '4_': 'no label', '5___': 'no label', '6___': 'no label', '7__': 'no label', 'lat_8___': 'no label', 'long_8___': 'no label', 'accuracy_8': 'no label', 'UTM_Northi': 'no label', 'UTM_Eastin': 'no label', 'UTM_Zone_8': 'no label', '9_____': 'no label', '10____': 'no label', '11_____': 'no label', '12_____': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});