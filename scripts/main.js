//By Jesse Bergerstock
//Slopscript 2017, simple page just to get it looking fancy and inject articles from google drive.
/*
var articles_url = {}
articles_url["Game Design"] = []
articles_url["Game Design"].push('https://docs.google.com/document/d/1iGoNjXZwMwwkrQsN9CmJl7bBn7jpH9n6-foS-EN7b_8/pub')

var articles = []

for (let article_url in articles_url) do {
  console.log(articles[article_url]
} 

$.get('https://drive.google.com/drive/folders/0BxVy31mpcFlXRHRCTnNEdW4tbHM?usp=sharing', function (data) {
  console.log(data)
})
*/
$(document).ready(function () {
  let loading = $("#loading");
  let title = $("#title");
  let subtitle = $("#subtitle");
  let quotes = $(".quotes").children();
  quotes.hide()
  let fieldquote = $(".fieldquote");
  fieldquote.text(quotes[Math.floor(Math.random() * quotes.length)].textContent);
  let headers = [
    $("#web"),
    $("#self"),
    $("#work")
  ];
  let fields = [
    $("#web-field"),
    $("#self-field"),
    $("#work-field")
  ];

  let views = [];
  for (let i = 0; i < headers.length; i++) {
    views[i] = [headers[i],fields[i]];
  }
  let active_field = null;

  for (let i = 0; i < views.length; i++) {
    //On Click Of A Header
    views[i][0].on("click", function () {
      //Fade Out Active Field, Fade In New Field
      if (active_field === null) {
        fields[i].fadeIn(150);
        active_field = views[i][1];
      } else {
        active_field.fadeOut(150, function () {
          views[i][1].fadeIn(150);
          active_field.hide();
          active_field = views[i][1];
          //Change quote
          //let quote = quotes[Math.floor(Math.random() * quotes.length)].textContent;
          fieldquote.text(quotes[Math.floor(Math.random() * quotes.length)].textContent);
        });
      }
    });
  }
  subtitle.fadeIn("slow", function () {});
  title.fadeIn("slow", function() {
      //Then Fade In Headers
      for (let i = 0; i < headers.length; i++) {
        headers[i].fadeIn("slow", function () {});
        headers[i].css("display","inline-block");
      }
      });
});
