// Pour  calculer une moyenne, il faut :
// récupérer les valeurs saisies au click du bouton
// additionner les valeurs et calculer la moyenne
// afficher la moyenne dans une alert
// faire un reset des inputs


$(document).ready(function(){
	$('#average').on('click', function(){
		var sumGrades = 0;
		var gradesAverage = 0;
		var grade = $(".notes").val();
		$('.notes').each(function(){
				sumGrades += parseFloat($(this).val());
				gradesAverage = sumGrades/$('.notes').length;

			if (grade <= 20){
				alert("La moyenne est de " + gradesAverage);

			}else {
				alert("cacaboudin");
			};
		})
		// gradesAverage = sumGrades/$('.notes').length;
		// alert("La moyenne est de " + gradesAverage);
	});
});

// $('#reset').click(function(){
//     $('#form')[0].reset();
// })