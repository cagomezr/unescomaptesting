function landmark(id,name, address,city,prov,postal,lat,lngt) {
   this.id= "id"+id;
   this.name = name;
   this.address = address;
   this.city = city;
   this.prov = prov;
   this.postal = postal;
   this.lat = lat;
   this.lngt = lngt;
   
   this.getFullAddr = function () {
      return this.address + " " + this.city + " " + this.prov+ " " + this.postal;
   }
}

var landmarks= [
		new landmark("1","Rideau Canal","","Ottawa","ON","","45.422164978", "-75.6916639"),
		new landmark("2","SGang Gwaay", "Skeena-Queen Charlotte E", "Anthony Island", "BC", "V0T 1S0",  "52.095", "-131.220278"  ),
		new landmark("3","Red Bay Basque Whaling Station", "","Red Bay", "NL", "A0K 4K0", "51.7342966","-56.4298276" ),
		new landmark( "4","Old Town Lunenburg","","Lunenburg","NS", "", "44.376111", "-64.309167" ),
		new landmark("5","Old Québec","", "Québec City", "QC", "G1K 4E2", "46.809444","-71.210556" ),
		new landmark("6", "Landscape of Grand-Pré","2205 Grand Pré Rd", "Grand Pré", "NS" , "B0P 1M0",  "45.118333", "-64.307222"),
		new landmark("7","Head-Smashed-In Buffalo Jump","", "Fort MacLeod","AB", "T0L 0Z0", "49.705334", "-113.6556087,17" ),
		new landmark("8", "L'Anse aux Meadows National Historic Site","Division No. 9", "Subd. D", "NL","A0K 2X0", "51.466667","-55.616667")
	];