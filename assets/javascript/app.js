$(function () {


  var query = ""
  var endYear = "20170101";
  var beginYear = "20180613";
  var numberOfRecords;
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  $("#submitButton").on("click", function () {

    query = $("#exampleInputName1").val()
    retrieveRecordsField = $("#retrieveRecordsField").val()
    beginYear = $("#startYearField").val() + "0101"
    endYear = $("#endYearField").val() + "0101"



    url += '?' + $.param({
      'api-key': "0aed713129c74e009a556835193f4052",
      'q': query
      //   'end_date': endYear,
      //   'begin_date': beginDate,

    });

    $.ajax({
      url: url,
      method: 'GET',
    }).then(function (result) {
      console.log(result)

      var arr = result.response.docs

      console.log(arr.length)
      //   for(var i = 0; i < arr.length; i++ )
      //   {
      //       authors.push(arr[i].byline.original)
      //       snippet.push(arr[i].snippet)

      //       console.log(arr[i].byline.original)
      //       console.log(arr[i].snippet)
      //   }
    })



  })







})