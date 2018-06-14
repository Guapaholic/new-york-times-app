$(function () {


  var query
  // var endYear = "20170101";
  // var beginYear = "20180613";
  var numberOfRecords;
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  $("#submitButton").on("click", function () {

    query = $("#searchTermField").val()
    retrieveRecordsField = $("#retrieveRecordsField").val()
    // beginYear = $("#startYearField").val() + "0101"
    // endYear = $("#endYearField").val() + "0101"

    // if(beginYear.length != 8)
    // {
    //   beginYear = "19800101"
    // }

    // if(beginYear.length != 8)
    // {
    //   endYear = "201800101"
    // }



    url += '?' + $.param({
      'api-key': "0aed713129c74e009a556835193f4052",
      'q': query,
        // 'end_date': endYear,
        // 'begin_date': beginYear,

    });

    $.ajax({
      url: url,
      method: 'GET',
    }).then(function (result) {
      console.log(result)
      var arr = result.response.docs
      console.log(arr)
      console.log(arr.length)
      var authors = []
      var snippet = []
      var url = []
        for(var i = 0; i < arr.length; i++ )
        {
            authors.push(arr[i].byline.original)
            snippet.push(arr[i].snippet)
            url.push(arr[i].web_url)
            newDiv = $("<div/>", {"class": "card"})
            newLink = $("<a>")
            snippetPar = $("<p></p>")
            newDiv.append(authors[i] + "<br>")
            snippetPar.text(snippet[i])
            newDiv.append(snippet[i] + "<br>")
            newLink.attr("href", url[i])
            newLink.text("Link")
            newDiv.append(newLink)
            $("#results-div").append(newDiv)
        }
      
    })


  })







})