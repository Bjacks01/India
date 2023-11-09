$(document).ready(function(){
  console.log('ready');

  document.getElementById("displayBtn").onclick = function() {  
    displayInput()  
    };  
  
  function displayInput() {
    $('#pg1').append(
      'Thanks, ' + $('#fname').val() + ', your card number is: ' + $('#ccnum').val() + ', and your email is: ' + $('#aplEmail').val()
   );
  };
  
  document.getElementById("loadBtn").onclick = function() {
    loadData()
  };

  function loadData() {
    document.getElementById('fname').value = 'Lebron James'
    document.getElementById('ccnum').value = '23'
    document.getElementById('aplEmail').value = 'Ljames23@icloud.com'
  };

  $("input[type=radio][name=shippingLocation]").on("change", function () {
    let addy = $("input[name=shippingLocation]:checked").val();
    console.log(addy)

    if(addy === 'house') {
      $('#homeAddress').show();
    } else {
      $("#homeAddress").hide();
    }
    });

  });
    
  
  
