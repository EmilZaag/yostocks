 angular.module('shared-module.constants')
 			
	.constant('URLS', 
      {
        yql:"https://query.yahooapis.com/v1/public/yql?q=", 
        selectCompaniesPrefix:"select * from yahoo.finance.industry where id='",
        selectCompaniesSuffix:"'&format=json&env=store://datatables.org/alltableswithkeys&callback=",

      	selectCompanyNewsPrefix:"select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D",
      	selectCompanyNewsSuffix:"'%20and%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22yfi_headlines%22%5D%2Fdiv%5B2%5D%2Ful%2Fli%2Fa'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="
      })

	.constant('FIREBASE_URL', 'https://ngstocksapp.firebaseio.com/');

