var wms_layers = [];
var format_alertes_nut_0 = new ol.format.GeoJSON();
var features_alertes_nut_0 = format_alertes_nut_0.readFeatures(json_alertes_nut_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alertes_nut_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_alertes_nut_0.addFeatures(features_alertes_nut_0);var lyr_alertes_nut_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alertes_nut_0, 
                style: style_alertes_nut_0,
                title: '<img src="styles/legend/alertes_nut_0.png" /> alertes_nut'
            });


var layersList = [lyr_alertes_nut_0];
lyr_alertes_nut_0.set('fieldAliases', {'province': 'province', 'territoire': 'territoire', 'bulletin': 'bulletin', 'total_aler': 'total_aler', 'porportion': 'porportion', 'zs_name': 'zs_name', 'key': 'key', 'code': 'code', 'debut': 'debut', 'fin': 'fin', 'wkt_cle': 'wkt_cle', });
lyr_alertes_nut_0.set('fieldImages', {'province': 'TextEdit', 'territoire': 'TextEdit', 'bulletin': 'TextEdit', 'total_aler': 'TextEdit', 'porportion': 'TextEdit', 'zs_name': 'TextEdit', 'key': 'TextEdit', 'code': 'TextEdit', 'debut': 'TextEdit', 'fin': 'TextEdit', 'wkt_cle': 'TextEdit', });
lyr_alertes_nut_0.set('fieldLabels', {'province': 'no label', 'territoire': 'inline label', 'bulletin': 'inline label', 'total_aler': 'no label', 'porportion': 'no label', 'zs_name': 'no label', 'key': 'no label', 'code': 'no label', 'debut': 'no label', 'fin': 'no label', 'wkt_cle': 'no label', });
lyr_alertes_nut_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});