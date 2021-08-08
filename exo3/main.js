$(function(){
    $('#verifier').click(function(){
         var ValidFirstName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+([-][A-Z][a-z]+)?$/;
         var Mail = /^[a-z0-9.-]+@[a-z0-9-]{2,}[.][a-z]{2,4}$/;
         var Telephone = /^(06|07)[0-9]{8}$/;
         if(ValidFirstName.test($('#name').val()) == false) {
             $('#name').css('border', '2px solid red');
         } else {
             $('#name').css('border', '2px solid green');
         }
         if(ValidFirstName.test($('#firstname').val()) == false) {
             $('#firstname').css('border', '2px solid red');
         } else {
             $('#firstname').css('border', '2px solid green');
         }
         if(Mail.test($('#mail').val()) == false) {
             $('#mail').css('border', '2px solid red');
         } else {
             $('#mail').css('border', '2px solid green');
         }
         if(Telephone.test($('#phone').val()) == false) {
             $('#phone').css('border', '2px solid red');
         } else {
             $('#phone').css('border', '2px solid green');
         }
    });
});