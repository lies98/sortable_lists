window.addEventListener("load", event => {
	main();
});

const main = () => {
	
	
	let component = new MyComponent();
}

class MyComponent {

	constructor(){
		let ul = document.getElementById('theList');
		let pays ="Afghanistan,Albania,Algeria,Andorra,Angola,Anguilla,Antigua &amp; Barbuda,Argentina,Armenia,Aruba,Australia,Austria,Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bermuda,Bhutan,Bolivia,Bosnia &amp; Herzegovina,Botswana,Brazil,British Virgin Islands,Brunei,Bulgaria,Burkina Faso,Burundi,Cambodia,Cameroon,Cape Verde,Cayman Islands,Chad,Chile,China,Colombia,Congo,Cook Islands,Costa Rica,Cote D Ivoire,Croatia,Cruise Ship,Cuba,Cyprus,Czech Republic,Denmark,Djibouti,Dominica,Dominican Republic,Ecuador,Egypt,El Salvador,Equatorial Guinea,Estonia,Ethiopia,Falkland Islands,Faroe Islands,Fiji,Finland,France,French Polynesia,French West Indies,Gabon,Gambia,Georgia,Germany,Ghana,Gibraltar,Greece,Greenland,Grenada,Guam,Guatemala,Guernsey,Guinea,Guinea Bissau,Guyana,Haiti,Honduras,Hong Kong,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland,Isle of Man,Israel,Italy,Jamaica,Japan,Jersey,Jordan,Kazakhstan,Kenya,Kuwait,Kyrgyz Republic,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Macau,Macedonia,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Mauritania,Mauritius,Mexico,Moldova,Monaco,Mongolia,Montenegro,Montserrat,Morocco,Mozambique,Namibia,Nepal,Netherlands,Netherlands Antilles,New Caledonia,New Zealand,Nicaragua,Niger,Nigeria,Norway,Oman,Pakistan,Palestine,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Poland,Portugal,Puerto Rico,Qatar,Reunion,Romania,Russia,Rwanda,Saint Pierre &amp; Miquelon,Samoa,San Marino,Satellite,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia,South Africa,South Korea,Spain,Sri Lanka,St Kitts &amp; Nevis,St Lucia,St Vincent,St. Lucia,Sudan,Suriname,Swaziland,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Timor L'Este,Togo,Tonga,Trinidad &amp; Tobago,Tunisia,Turkey,Turkmenistan,Turks &amp; Caicos,Uganda,Ukraine,United Arab Emirates,United Kingdom,Uruguay,Uzbekistan,Venezuela,Vietnam,Virgin Islands (US),Yemen,Zambia,Zimbabwe".split(",");
        let current_element = null;
		for(let i = 0;i<pays.length;i++){
			let li = document.createElement("li");
			li.innerHTML=pays[i];
			li.className="line";
			li.style.height="50px";
			li.draggable="true";
			ul.appendChild(li);
		}
		let li_s = document.querySelectorAll('#theList .line');
		let ul_s = document.querySelectorAll('.sortable');

		for (const li of li_s) {
			li.addEventListener('dragstart', function(e){
				current_element = this;
				e.dataTransfer.effectAllowed = 'move';
				e.dataTransfer.setData('text/html', this.innerHTML);
				setTimeout(function () {
					li.style.display = 'none';
				}, 0)
			},false);
			li.addEventListener('dragenter',function(e){
				this.classList.add('over');
			}, false);
			li.addEventListener('dragover', e =>{
				e.preventDefault();
			}, false);
			li.addEventListener('dragleave',function(e){
				this.classList.remove('over');
			}, false);
			li.addEventListener('drop',function(e){
				if (e.stopPropagation) {
					e.stopPropagation(); 
				  }
				if (current_element != this) {
					current_element.innerHTML = this.innerHTML;
					this.innerHTML = e.dataTransfer.getData('text/html');
				}	
				  return false;
			}, false);
			li.addEventListener('dragend', e =>{
				for(const li of li_s)
					li.classList.remove('over');
				setTimeout(function () {
					current_element.style.display = 'block';
					current_element = null;
				}, 0);
			}, false);
			for(const ul of ul_s){
				ul.addEventListener('dragover', function (e) {
					e.preventDefault();
				});
				
				ul.addEventListener('dragenter', function (e) {
					e.preventDefault();
				});
		
				ul.addEventListener('drop', function (e) {
					this.append(current_element);
				
				});
			}
		  }
		  
		}

	
}