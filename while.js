// Single line comment
/* Multi line
comment
*/

function calcTip(){
  var totalBill = document.getElementById("billAmount").value;
  var tipPercent = document.getElementById("serviceQual").value;
  var groupSize = document.getElementById("numPeople").value;
  var tipAmount = Math.round((totalBill*tipPercent) / groupSize);
  document.getElementById('finalAmount').innerHTML="Your tip per person is $"+ tipAmount;
}
