var address;
var tabledetails;

$('#tabledetails').bind('pageshow', function(event) {
	getTableDetail();
});

function getTableDetail() {
	$('#conta li').remove();
	 $('#mesa').html($('input[id=ID]').val());
        $('#total').html("Sem registos");
        
	$.getJSON(address+"gettable&ID="+$('input[id=ID]').val()+"&submit=submit",
        function(data){
		// $('#Total').append('data.Total');
		 $('#mesa').html(data.Mesa);
		 //$("input[type='total']").val(data.Total);
		 $('#total').html(data.Total);
		 for(var i=0; i<data.list.length; i++) {
            $('#conta').append('<li>'+data.list[i].C1+" "+data.list[i].C2+'<h2 class="ui-li-aside">'+data.list[i].C3+'<\h2></li>');
        }
		
		// $('#conta li').remove();         
		// tabledetails=data.items;
		//  $.each(tabledetails.list, function(i,detalhe){
		//	$('#conta').append('<li id="' + i + '">' + detalhe.C2 + '</li>');
			//alert(detalhe.Mesa);
			//$("#conta").append("Qt:"+detalhe.C1+"<br>"+"Descri��o:"+detalhe.C2+"<br>"+"Valor:"+detalhe.C3);
        //  });		
		  $('#conta').listview('refresh');
		  $('#ID').val('');
        }
       
        );	
};

$(document).ready(function(){
    loadSettings();
	if (address=="")
		{
		address="http://10.227.1.176:8801";
		}
	 $('#Address').val(address);
});

function loadSettings() {
    address=localStorage.address;
};

$("#SaveAddress").click(function(){
   address=$('#Address').val();
   saveSettings();
});

function doSave() {
    saveSettings();
}; 

function saveSettings() {
    localStorage.address = address;
   
};             
