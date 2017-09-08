var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//Biggest challenge for me on this was figuring out/understand how to call the proper items
//from the objects salesTaxRates and companySalesData. Coming back to it a day later, it made
//much more sense, and was easier to vizualise and therefore type out.

//First loop grabs the names from salesData and creates objects with the desired keys,
//totalSales, totalTaxes.

//Second loop grabs the taxes and sales from each company, adds them up and adds them to their designated objects.
function calculateSalesTax(salesData, taxRates) {
  var totals = {};
  for (var i = 0; i < salesData.length; i++) {
    if (!totals[salesData[i]['name']]) {
      totals[salesData[i]['name']] = {};
      totals[salesData[i]['name']]['totalSales'] = 0;
      totals[salesData[i]['name']]['totalTaxes'] = 0;
    }
      for (var j = 0; j < salesData[i]['sales'].length; j++) {
        var taxCalc = 0;
        taxCalc = salesData[i]['sales'][j] * taxRates[salesData[i]['province']];
        totals[salesData[i]['name']]['totalTaxes'] = totals[salesData[i]['name']]
        ['totalTaxes'] + taxCalc
        totals[salesData[i]['name']]['totalSales'] = totals[salesData[i]['name']]
        ['totalSales'] + salesData[i]['sales'][j];
      }
  }
  return totals;
}


 var results = calculateSalesTax(companySalesData, salesTaxRates);

  console.log(results);

// var results = calculateSalesTax(companySalesData, salesTaxRates);



/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
