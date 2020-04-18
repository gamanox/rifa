var sheetUrl = 'https://spreadsheets.google.com/feeds/cells/18DmyWGlrJ8wPe-Ld3a7EwkpvxC9ITLKHRIjWUzpm5Ps/1/public/full?alt=json';
var boletos = [];
var vendidos = 0;
$.getJSON(sheetUrl, function(data) {
    console.log(data);
    var entry = data.feed.entry;
    // the leftmost column of the Google Sheets


    for (var i = 0; i < entry.length; i += 2) {
        // entry[i].content.$t retrieves the content of each cell
        boletos.push({ numero: entry[i].content.$t, nombre: entry[i + 1].content.$t })


    }
    for (const element of boletos) {
        console.log(element);
        var blocked = '';
        if (element.nombre !== '-') {
            blocked = 'active';
            vendidos += 1;
        }
        $('#grid').append('<div class="col-2"> <div class="numero" id="num-00"> <p>' + element.numero + '</p> <div class="blocked ' + blocked + '"></div> </div> </div>')
    }
    var disponibles = 100 - vendidos;
    $('#vendidos span').html('' + vendidos + '');
    $('#disponibles span').html('' + disponibles + '');


})