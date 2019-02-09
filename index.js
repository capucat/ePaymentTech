var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://certwebservices.ft.cashedge.com/sdk/Payments/Customers?requestID=initial02&pageNumber=1&pageSize=10&customerID=CUST-f5739782081063dda235ae5a57362eeb9621f51ccc72205ef2cb2779d92ba094",
  "method": "GET",
  "headers": {
    "apiKey": "prod-b43dbcb90ef2c1c27419794db88841ece591c40cbcde9379d0c3bdea38af5b16f0a671e4a4aa2f2060e42e4de5bc3230e893e201fe5b2d310289a0818906c940",
    "businessID": "BUSN-c2b5b568bc4e2d9106872b05f9dcd0246b51c85878da83f44d9bbd5babeef453",
  }
}

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
