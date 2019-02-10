// create customer
function createCustomer() {

    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var city=document.getElementById("city").value;
    var line1=document.getElementById("line1").value;
    var line1=document.getElementById("line2").value;
    var state=document.getElementById("state").value;
    var zip=document.getElementById("zip").value;
    var phone1=document.getElementById("phone1").value;

    console.log(firstName);

    // var formData = JSON.stringify($("#formD").serializeArray());
    // var formData = {
    //     "address": {
    //         "city":city,"line1":line1,"state":state,"zip":zip
    //     },
    //     "email":email,
    //     "mode":"initiate",
    //     "personName":{"firstName":firstName,"lastName":lastName},
    //     "phone1":phone1,
    //     "requestID":"initial01",
    //     "externalCustomerID":password
    // };
    var formData = new FormData();
    formData.append("address","{city:"+city+",line1:"+line1+",state:"+state+",zip:"+zip+"}");
    formData.append("email",email);
    formData.append("mode","initiate");
    formData.append("personName","{firstName:"+firstName+",lastName:"+lastName+"}");
    formData.append("phone1",phone1);
    formData.append("requestID","demoTime0");
    formData.append("externalCustomerIdentifier",password);
    // var formData = {
    //     "address": {
    //         "city":"alpharetta","line1":"1000 streets street","state":"FL","zip":"30211"
    //     },
    //     "email":"trying@gmail.com",
    //     "mode":"initiate",
    //     "personName":{"firstName":"first","lastName":"last"},
    //     "phone1":"6786785000",
    //     "requestID":"initial01"
    // };

    $.ajax({
      "type": "POST",
      "url": "https://certwebservices.ft.cashedge.com/sdk/Payments/Customers",
      "data": JSON.stringify(formData),
      "header": {"apiKey": "prod-b43dbcb90ef2c1c27419794db88841ece591c40cbcde9379d0c3bdea38af5b16f0a671e4a4aa2f2060e42e4de5bc3230e893e201fe5b2d310289a0818906c940",
      "businessID": "BUSN-c2b5b568bc4e2d9106872b05f9dcd0246b51c85878da83f44d9bbd5babeef453"},
      "success": function(){console.log(formData)},
      "error": function(){
         alert("failure");
     },
      "dataType": "json",
      "contentType" : "application/json"
    });

    $('#signUpModal').modal('hide');
};

function editCustomerFunds() {

};

// get customer data
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://certwebservices.ft.cashedge.com/sdk/Payments/Customers?requestID=demoTime0&pageNumber=1&pageSize=10&startDate=02/09/2019&endDate=02/09/2019",
  "method": "GET",
  "headers": {
    "apiKey": "prod-b43dbcb90ef2c1c27419794db88841ece591c40cbcde9379d0c3bdea38af5b16f0a671e4a4aa2f2060e42e4de5bc3230e893e201fe5b2d310289a0818906c940",
    "businessID": "BUSN-c2b5b568bc4e2d9106872b05f9dcd0246b51c85878da83f44d9bbd5babeef453",
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
  storeCustomerInfo(response);
});

var customerData = [];
function storeCustomerInfo(response){
    customerData = response.customerList;
    // var json = $.parseJSON(response);
    // customerData = json.customerList;
    console.log(customerData);
};
