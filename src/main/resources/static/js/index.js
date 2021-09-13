$(document).ready(function () {
  $(".minu").click(function () {
    var lengthdw = document.getElementById("length");
    var val = parseInt(lengthdw.value) - 1;
    let count = val;
    count = count < 8 ? 8 : count;
    lengthdw.value = count;
    return false;
  });
  $(".plu").click(function () {
    var lengthup = document.getElementById("length");
    var val = parseInt(lengthup.value) + 1;
    let count = val;
    count = count > 20 ? 20 : count;
    lengthup.value = count;
    return false;
  });
});

function selectText(id) {
  var sel, range;
  var el = document.getElementById(id); //get element id
  if (window.getSelection && document.createRange) {
    //Browser compatibility
    sel = window.getSelection();
    if (sel.toString() == "") {
      //no text selection
      window.setTimeout(function () {
        range = document.createRange(); //range object
        range.selectNodeContents(el); //sets Range
        sel.removeAllRanges(); //remove all ranges from selection
        sel.addRange(range); //add Range to a Selection.
      }, 1);
    }
  } else if (document.selection) {
    //older ie
    sel = document.selection.createRange();
    if (sel.text == "") {
      //no text selection
      range = document.body.createTextRange(); //Creates TextRange object
      range.moveToElementText(el); //sets Range
      range.select(); //make selection.
    }
  }
}
