$(function(){
    var query = "trump"
    var endYear = "20170101";
    var beginDate = "20180613";
    var limit = 20
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "0aed713129c74e009a556835193f4052",
      'q': query,
    //   'end_date': endYear,
    //   'begin_date': beginDate,
      'page': 20

    });

    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(result) {
        console.log(result)

        var arr = result.response.docs
        var authors= [];
        var snippet = [];
        console.log(arr.length)
        for(var i = 0; i < arr.length; i++ )
        {
            authors.push(arr[i].byline.original)
            snippet.push(arr[i].snippet)

            console.log(arr[i].byline.original)
            console.log(arr[i].snippet)
        }
    })

})