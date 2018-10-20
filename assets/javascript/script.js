// Built by LucyBot. www.lucybot.com
var searchTerm;
var beginDate = '20000101';
var endDate = '20181212';
var url;

$(document).on('click', '#searchButton', function (event) {
    event.preventDefault();

    // console.log($('#search-term').val());
    // console.log($('#begin-date').val().split('-').join(''));
    searchTerm = $('#Search').val();
    if ($('#startYear').val() === '') {
        beginDate = 10000101
    } else {
        beginDate = $('#startYear').val().split('-').join('');
    }

    if ($('#endYear').val() === '') {
        endDate = 30001212
    } else {
        endDate = $('#endYear').val().split('-').join('');
    }
    
    


    url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "b9f8500061ad478ab9a30445305d6fb9",
        'q': searchTerm,
        'begin_date': beginDate,
        'end_date': endDate
    });

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        var articlesToRetrieve = $('#articleNumbers').val();
        $('#resultsDiv').empty();
        for (var i = 0; i < articlesToRetrieve; i++) {

            
            $('#resultsDiv').append(`
                  <h5>${result.response.docs[i].snippet}</h5>
                  <p>${result.response.docs[i].byline.original}</p>
              `)
            // console.log(result.response.docs[i].snippet);
            // console.log(result.response.docs[i].byline.original);
        }

    }).fail(function (err) {
        throw err;
    });
})

$(document).on('click', '#clearbutton', function(event) {
    event.preventDefault();
    $('#resultsDiv').empty();
})

