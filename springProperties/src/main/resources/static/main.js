$(document).ready(function(){
		
function propertiesService(filter) {
		$.ajax({
			type : "GET",
			url : "/api/find/"+filter,
			data : '$format=json',
			dataType : 'json',
			success : function(data) {
				$("#propTable tr").remove();
				$("#propTable tbody").append("<tr><th>categoria</th><th>subcategoria</th><th>nome</th><th>valor</th><th>descrição</th></tr>");
				var total=0;
				$.each(data, function(d, results) {
				  $("#propTable tbody").append(
					"<tr>"  
				    + "<td class=\"text-nowrap\">" 
				    + results.categoria
				    + "</td>" + "<td class=\"text-nowrap\">"
				    + results.subcategoria
				    + "</td>" + "<td class=\"text-nowrap\">"
			        + results.nome
					+ "</td>" + "<td class=\"text-nowrap\">"
					+ results.valor
					+ "</td>" + "<td class=\"text-nowrap\">"
					+ results.descricao
					+ "</td>" 
					+ "</tr>")
					total++;
				})
				$("#results").text(total+" propriedades encontradas");
			}
		});
	};
	
	var minlength = 2;
			
	$("#search").on("blur",function(){
	   /* if(e.which == 13) {*/
	        value = $(this).val();
	        /*if (value.length >= minlength ) {*/
             propertiesService(value);
	        /*}*/
	        /*return false;*/
	/*    }*/
	 });
			
}); 