$(function(){
   $(".btn btn-primary").click(function () {
     $(".btn btn-primary").attr("disabled", true);
     $('#form').submit();
 });
});
