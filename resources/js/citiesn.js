var cities = [ { value: 'Vancouver', data: '49.2827291,-123.1207375' }, { value: 'Surrey', data: '49.1044302,-122.801094' }, { value: 'Burnaby', data: '49.2488091,-122.9805104' }, { value: 'Richmond', data: '49.1665898,-123.133569' }, { value: 'Abbotsford', data: '49.054587,-122.328026' }, { value: 'Coquitlam', data: '49.2837626,-122.7932065' }, { value: 'Kelowna', data: '49.8879519,-119.4960106' }, { value: 'Kamloops', data: '50.674522,-120.3272674' }, { value: 'Nanaimo', data: '49.1658836,-123.9400647' }, { value: 'Victoria', data: '48.4284207,-123.3656444' }, { value: 'Prince George', data: '53.9170641,-122.7496693' }, { value: 'Chilliwack', data: '49.1579401,-121.9514666' }, { value: 'New Westminster', data: '49.2057179,-122.910956' }, { value: 'Port Coquitlam', data: '49.2628382,-122.7810708' }, { value: 'Vernon', data: '50.2670137,-119.2720107' }, { value: 'Calgary', data: '51.0486151,-114.0708459' }, { value: 'Edmonton', data: '53.544389,-113.4909267' }, { value: 'Red Deer', data: '52.2681118,-113.8112386' }, { value: 'Lethbridge', data: '49.69349,-112.84184' }, { value: 'St. Albert', data: '53.6304753,-113.625642' }, { value: 'Medicine Hat', data: '50.0405486,-110.6764258' }, { value: 'Grande Prairie', data: '55.1699396,-118.7986152' }, { value: 'Toronto', data: '43.653226,-79.3831843' }, { value: 'Ottawa', data: '45.4215296,-75.6971931' }, { value: 'Mississauga', data: '43.5890452,-79.6441198' }, { value: 'Hamilton', data: '43.2500208,-79.8660914' }, { value: 'Brampton', data: '43.7315479,-79.7624177' }, { value: 'London', data: '42.9869502,-81.243177' }, { value: 'Windsor', data: '42.3149367,-83.0363633' }, { value: 'Kitchener', data: '43.450301,-80.4831917' }, { value: 'Burlington', data: '43.3255196,-79.7990319' }, { value: 'Sudbury', data: '46.522099,-80.9530353' }, { value: 'Oshawa', data: '43.8970929,-78.8657912' }, { value: 'St. Catharines', data: '43.1593745,-79.2468626' }, { value: 'Barrie', data: '44.3893556,-79.6903316' }, { value: 'Cambridge', data: '43.3616211,-80.3144276' }, { value: 'Kingston', data: '44.2311717,-76.4859544' }, { value: 'Guelph', data: '43.5448048,-80.2481666' }, { value: 'Thunder Bay', data: '48.380895,-89.247682' }, { value: 'Brantford', data: '43.1393867,-80.2644254' }, { value: 'Pickering', data: '43.8384117,-79.0867579' }, { value: 'Niagara Falls', data: '43.0895577,-79.0849436' }, { value: 'MontrÃ©al', data: '45.501689,-73.567256' }, { value: 'QuÃ©bec', data: '46.810811,-71.215439' }, { value: 'Laval', data: '45.6066487,-73.712409' }, { value: 'Gatineau', data: '45.4765446,-75.7012723' }, { value: 'Longueuil', data: '45.5369442,-73.5107131' }, { value: 'Sherbrooke', data: '45.4009928,-71.8824288' }, { value: 'Terrebonne', data: '45.6929818,-73.6331102' }, { value: 'Saint-Jean-sur-Richelieu', data: '45.305771,-73.2544903' }, { value: 'Halifax', data: '44.6488625,-63.5753196' }, { value: 'Bedford', data: '44.7246629,-63.6908523' }, { value: 'Dartmouth', data: '44.6652059,-63.5677427' }, { value: 'Lower Sackville', data: '44.7764086,-63.6791223' }, { value: 'Porters Lake', data: '44.7401963,-63.310213' }, { value: 'Beaver Bank', data: '44.86793,-63.7071839' }, { value: 'Chatham-Kent', data: '42.4048028,-82.1910378' }, { value: 'Hammonds Plains', data: '44.733671,-63.785013' }, { value: 'LÃ©vis', data: '46.7382265,-71.2464592' }, { value: 'North Vancouver', data: '49.3269904,-123.0732801' }, { value: 'Saguenay', data: '48.4280529,-71.0684923' }, { value: 'Trois-RiviÃ¨res', data: '46.3546803,-72.5837866' }, { value: 'Vaughan', data: '43.8372079,-79.508276' }, { value: 'Waterloo', data: '43.464258,-80.52041' }, { value: 'Belleville', data: '44.162759,-77.383231' }, { value: 'Chicoutimi', data: '48.351674,-71.138514' }, { value: 'Dieppe', data: '46.095277,-64.748664' }, { value: 'Etobicoke', data: '43.620495,-79.513198' }, { value: 'Hull', data: '45.428731,-75.713366' }, { value: 'Regina', data: '50.445211,-104.618894' }, { value: 'Saint-Laurent', data: '45.498564,-73.749757' }, { value: 'St. Johns', data: '47.560541,-52.712831' }, { value: 'Winnipeg', data: '49.899754,-97.137494' }, { value: 'Ajax', data: '43.850855,-79.020373' }, { value: 'Alma', data: '48.550461,-71.65277' }, { value: 'Ancaster', data: '43.217779,-79.987283' }, { value: 'Anjou', data: '45.615959,-73.569351' }, { value: 'Ascot Corner', data: '45.449633,-71.766551' }, { value: 'Baie D\'urfe', data: '45.416456,-73.91608' }, { value: 'Beaconsfield', data: '45.430931,-73.868283' }, { value: 'Beauport', data: '46.861556,-71.188677' }, { value: 'Beloeil', data: '45.567925,-73.203947' }, { value: 'Blainville', data: '45.668896,-73.872875' }, { value: 'Boisbraind', data: '45.612634,-73.838373' }, { value: 'Boucherville', data: '45.59137,-73.43641' }, { value: 'Brossard', data: '45.451436,-73.46191' }, { value: 'Candiac', data: '45.383934,-73.517445' }, { value: 'Charlesbourg', data: '46.899729,-71.286475' }, { value: 'Charny', data: '46.714636,-71.260452' }, { value: 'Chateauguay', data: '45.360159,-73.749403' }, { value: 'Cote Saint Luc', data: '45.46805,-73.672946' }, { value: 'Delson', data: '45.371616,-73.542653' }, { value: 'Dollard-Des-Ormeaux', data: '45.489564,-73.820557' }, { value: 'Dorval', data: '45.450321,-73.750048' }, { value: 'Drummondville', data: '45.880291,-72.484282' }, { value: 'Duex Montagnes', data: '45.541805,-73.893211' }, { value: 'Fredericton', data: '45.96359,-66.643115' }, { value: 'Gloucester', data: '45.447342,-75.594287' }, { value: 'Greenfield Park', data: '45.485358,-73.478654' }, { value: 'Jonquiere', data: '48.423604,-71.239546' }, { value: 'Kanata', data: '45.308819,-75.898683' }, { value: 'Kirkland', data: '45.456042,-73.862334' }, { value: 'La Baie', data: '48.338271,-70.882574' }, { value: 'Lachenaie', data: '45.716147,-73.547104' }, { value: 'L\'ancienne Lorette', data: '46.806309,-71.357009' }, { value: 'Langley', data: '49.074331,-122.559322' }, { value: 'La Prairie', data: '45.4159,-73.483002' }, { value: 'Lasalle', data: '45.430627,-73.634801' }, { value: 'Le Gardeur', data: '45.753152,-73.470288' }, { value: 'Lemoyne', data: '45.498649,-73.492729' }, { value: 'L\'lle-Bizard', data: '45.494889,-73.890756' }, { value: 'Loretteville', data: '46.871244,-71.385439' }, { value: 'Magog', data: '45.266486,-72.147989' }, { value: 'Maple', data: '43.851762,-79.527284' }, { value: 'Maple Ridge', data: '49.219323,-122.598398' }, { value: 'Markham', data: '43.8561,-79.337019' }, { value: 'Mascouche', data: '45.777337,-73.632393' }, { value: 'McMasterville', data: '45.548874,-73.223393' }, { value: 'Moncton', data: '46.087817,-64.778231' }, { value: 'Mont-Royal', data: '45.512582,-73.646831' }, { value: 'Mont St-Hilaire', data: '45.564042,-73.179013' }, { value: 'Nepean', data: '45.334905,-75.724101' }, { value: 'North York', data: '43.761538,-79.411079' }, { value: 'Orford', data: '45.363342,-72.202098' }, { value: 'Otterburn Park', data: '45.544894,-73.201045' }, { value: 'Outremont', data: '45.514286,-73.609011' }, { value: 'Pierrefonds', data: '45.461014,-73.89036' }, { value: 'Pincourt', data: '45.366389,-73.984621' }, { value: 'Pintendre', data: '46.758909,-71.107028' }, { value: 'Pointe-Aux-Trembles', data: '45.641667,-73.500401' }, { value: 'Pointe-Claire', data: '45.471966,-73.799019' }, { value: 'Port Moody', data: '49.284911,-122.867756' }, { value: 'Repentigny', data: '45.753285,-73.440081' }, { value: 'Richmond Hill', data: '43.88284,-79.440281' }, { value: 'Riverview', data: '46.061254,-64.805218' }, { value: 'Rosemere', data: '45.638974,-73.785008' }, { value: 'Roxboro', data: '45.505265,-73.803304' }, { value: 'Saint Bruno', data: '45.525974,-73.340668' }, { value: 'Saint Constant', data: '45.379181,-73.564491' }, { value: 'Sainte Catherine', data: '45.39582,-73.565743' }, { value: 'Sainte-Foy', data: '46.782996,-71.28607' }, { value: 'Sainte Julie', data: '45.5925,-73.342699' }, { value: 'Saint-Esutache', data: '45.558549,-73.896075' }, { value: 'Saint Germain', data: '47.588455,-69.797775' }, { value: 'Saint Hubert', data: '45.498332,-73.406507' }, { value: 'Saint-Lambert', data: '45.492034,-73.504175' }, { value: 'Saint-Leondard', data: '46.10339,-72.372299' }, { value: 'Saint-Nicolas', data: '47.161949,-70.862363' }, { value: 'Saint-Redempteur', data: '46.70058,-71.284778' }, { value: 'Saint-Romuald', data: '46.758142,-71.240463' }, { value: 'Scarborough', data: '43.776426,-79.231752' }, { value: 'St. John', data: '45.273315,-66.063308' }, { value: 'St-Nicephore', data: '45.829159,-72.420093' }, { value: 'St-Nicolas', data: '47.161949,-70.862363' }, { value: 'Stoke', data: '45.533392,-71.804967' }, { value: 'Thorn Hill', data: '43.807968,-79.459138' }, { value: 'Vaudreuil-Dorion', data: '45.404236,-74.03796' }, { value: 'Verdun', data: '45.454827,-73.569873' }, { value: 'Vimont', data: '45.608667,-73.719246' }, { value: 'Westmont', data: '45.485719,-73.595699' }, { value: 'Whitby', data: '43.897545,-78.942933' }, { value: 'Willowdale', data: '43.771171,-79.41975' }, { value: 'Woodbridge', data: '43.776175,-79.609243' }, { value: 'Oakville', data: '43.467517,-79.687666' }, { value: 'Saint-Jerome', data: '45.794063,-74.015683' }, { value: 'Saskatoon', data: '52.133214, -106.670046 ' }, { value: 'Carlingwood', data: '45.37611,-75.769170 ' }, { value: 'Stoney Creek', data: '43.227218,-79.719559' }, { value: 'Sault Ste. Marie', data: '46.511812,-84.280971' }, { value: 'Newmarket', data: '44.059187,-79.461256' }, ]