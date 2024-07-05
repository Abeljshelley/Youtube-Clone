function search() {
  var a = document.querySelector(".search-bar");
  var b = a.value;
  var url = "https://www.youtube.com/results/?search_query=" + b;
  window.location.href = url;
}
 
function keydownfunction(event)
{
    var key=event.key;
    if (key=="Enter")
    {
        var a = document.querySelector(".search-bar");
        var b = a.value;
        var url = "https://www.youtube.com/results/?search_query=" + b;
        window.location.href = url; 
    }
}
