$(function(){
  $('#verif').click(function(){
    //ici on récupère nos value
    var name = $('#name').val();
    var firstName = $('#firstName').val();
    var bornDate = $('#bornDate').val();
    var place = $('#place').val();
    var job = $('#job').val();
    var company = $('#company').val();
    //ici on initialise des variables contenant nos regex
    var validName = /^[A-Z][a-z']+([-][A-Za-z][a-z]+)?$/;
    var validBornDate = /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/(19[0-9]\d|200\d|201[0-9]|202[0-1])$/;
    // on test la correspondance entre nos values récupérés dans l'input avec nos regex
    //si ça match pas on applique un border rouge à nos input
    //sinon si ça match, un border vert
    if(!validName.test(name)){
      $('#name').css('border','2px solid red');
      $('#errorName').html('*Vérifiez votre saisie').css('color', 'red');
      //si on match pas on retourne false pour arrêter notre fonction
      return false;
    }else if(name){
      $('#name').css('border','2px solid green');
      $('#name').addClass('name');
    }
    if(!validName.test(firstName)){
      $('#firstName').css('border','2px solid red');
      $('#errorFirstName').html('*Vérifiez votre saisie').css('color', 'red');
      return false;
    }else if(firstName){
      $('#firstName').css('border','2px solid green');
    }
    if(!validBornDate.test(bornDate)){
      $('#bornDate').css('border','2px solid red');
      $('#errorBorn').html('*Vérifiez votre saisie').css('color', 'red');
      return false;
    }else if(bornDate){
      $('#bornDate').css('border','2px solid green');
    }
    if(!validName.test(place)){
      $('#place').css('border','2px solid red');
      $('#errorPlace').html('*Vérifiez votre saisie').css('color', 'red');
      return false;
    }else if(place){
      $('#place').css('border','2px solid green');
    }
    if(job){
      $('#job').css('border','2px solid green');
      
    }else if(!job){
      $('#job').css('border','2px solid red');
      $('#errorJob').html('*Vérifiez votre saisie').css('color', 'red');
      return false;
    }
    if(company){
      $('#company').css('border','2px solid green');
      
    }else if(!company){
      $('#company').css('border','2px solid red');
      $('#errorCompany').html('*Vérifiez votre saisie').css('color', 'red');
      return false;
    }
    //si nos variables renvoient true, on affiche une modale.
    if(name && firstName && job && company && place && bornDate){
      alert('Nom : ' + name + ' Prénom : ' + firstName + ' Née le : ' + bornDate + ' à : ' + place + ' Emploi : ' + job + ' Chez : ' + company); 
    }
  });

});
