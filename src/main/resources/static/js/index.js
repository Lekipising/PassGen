$(document).ready(function () {
  $(".minus").click(function () {
    var lengthdw = document.getElementById("length");
    var val = parseInt(lengthdw.value) - 1;
    let count = val
    count = count < 8 ? 8 : count;
    lengthdw.value = count;
    return false;
  });
  $(".plus").click(function () {
    var lengthup = document.getElementById("length");
    var val = parseInt(lengthup.value) + 1;
    let count = val
    count = count > 20 ? 20 : count;
    lengthup.value = count
    return false;
  });
});
