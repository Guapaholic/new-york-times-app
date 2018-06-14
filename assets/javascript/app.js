$(function () {


  var query;
  var numOfResults = 0
  // var endYear = "20170101";
  // var beginYear = "20180613";
  var numberOfRecords;
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  $("#clear").on("click", function()
  { 
    $(".list-group").empty()
    $("#results").addClass("d-none")
  })

  $("#submitButton").on("click", function () {
    event.preventDefault()
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


      for (var i = 0; i < arr.length; i++) {
        // authors.push(arr[i].byline.original)



        // url.push(arr[i].web_url)
        // newDiv = $("<div/>", {"class": "card"})
        // newLink = $("<a>")
        // snippetPar = $("<p>")

        // newDiv.append(arr[i].byline.original + "<br>")
        // snippetPar.text(arr[i].snippet)
        // newDiv.append(snippet[i] + "<br>")
        // newLink.attr("href", url[i])
        // newLink.text("Link")
        // newDiv.append(newLink)
        // $("#results-div").append(newDiv)
        $("#results").removeClass("d-none")
        var article = $("<a>")
        article.attr("href", arr[i].web_url)
        article.attr("target", "_blank")
        article.attr("class", "list-group-item list-group-item-action flex-column align-items-start mb-2")

        article.append($("<div>").attr("class", "d-flex w-100 justify-content-between")
          .append($("<h5>").append(arr[i].headline.main).attr("class", "mb-1"))
          .append($("<small>").append(arr[i].byline.original)))
        article.append($("<p>").append(arr[i].snippet).attr("class", "mb-1"))
        $(".list-group").append(article)
      }

    })


  })






})