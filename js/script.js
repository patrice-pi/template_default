$(document).ready(function(){
  $.getJSON("data.json", function(){
    console.log('done');
  }).done(function(data){
    $.each(data.users, function(index, value){
      $('#jsonData').append(
        '<p>Nom : '+ value.name + '<br/>Age : '+ value.age + '<br/>Taille : ' + value.height + '</p>'
      );
      console.log(value);
    });
  }).fail(function(error){
    console.log(error);
  });
});
