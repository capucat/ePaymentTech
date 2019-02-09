$(document).on("click", ".btn", function(){
    var settings = {
      "async": false,
      "crossDomain": true,
      "url": "https://certwebservices.ft.cashedge.com/sdk/Payments/OneTimePayment",
      "method": "POST",
      "headers": {
        "apiKey": "prod-b43dbcb90ef2c1c27419794db88841ece591c40cbcde9379d0c3bdea38af5b16f0a671e4a4aa2f2060e42e4de5bc3230e893e201fe5b2d310289a0818906c940",
        "businessID": "BUSN-c2b5b568bc4e2d9106872b05f9dcd0246b51c85878da83f44d9bbd5babeef453",
        "Content-Type": "application/json",
      },
      "processData": false,
      "data": "{\n  \"accountID\": \"CUSA-69be059a204ee932eb18a9394b12c61c67107a39048d3d843635f4b24062da95\",\n  \"amount\": \"01.04\",\n  \"applicationFee\": {\n    \"flatFee\": \"0.10\"\n  },\n  \"customerID\":  \"CUST-42eeaa7afaa1da2f791f9e8d84c04cd6e7864d4ffd9df9750c9d8dc3a1f5055d\",\n  \"description\": \"donation payment\",\n  \"mode\": \"initiate\",\n  \"requestID\": \"CUST TO CUST\",\n  \"sendOnDate\": \"02/09/2019\",\n  \"speed\": \"Next Day\"\n} "
    };

    $.ajax(settings).done(function (response) {
        console.log("posted payment");
      console.log(response);
    });
});

// $("#donate").click(function(e) {
//     var settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": "https://certwebservices.ft.cashedge.com/sdk/Payments/OneTimePayment",
//       "method": "POST",
//       "headers": {
//         "apiKey": "prod-b43dbcb90ef2c1c27419794db88841ece591c40cbcde9379d0c3bdea38af5b16f0a671e4a4aa2f2060e42e4de5bc3230e893e201fe5b2d310289a0818906c940",
//         "businessID": "BUSN-c2b5b568bc4e2d9106872b05f9dcd0246b51c85878da83f44d9bbd5babeef453",
//         "Content-Type": "application/json",
//       },
//       "processData": false,
//       "data": "{\n  \"accountID\": \"CUSA-69be059a204ee932eb18a9394b12c61c67107a39048d3d843635f4b24062da95\",\n  \"amount\": \"01.01\",\n  \"applicationFee\": {\n    \"flatFee\": \"0.10\"\n  },\n  \"customerID\":  \"CUST-42eeaa7afaa1da2f791f9e8d84c04cd6e7864d4ffd9df9750c9d8dc3a1f5055d\",\n  \"description\": \"donation payment\",\n  \"mode\": \"initiate\",\n  \"requestID\": \"CUST TO CUST\",\n  \"sendOnDate\": \"02/09/2019\",\n  \"speed\": \"Next Day\"\n} "
//     };
//
//     $.ajax(settings).done(function (response) {
//         console.log("posted payment");
//       console.log(response);
//     });
// });