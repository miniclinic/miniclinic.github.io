function enviarFormulario() {
  $('#contatoForm').submit(function() {
    $("#submit").attr('disabled', 'disabled');
    var url = 'http://api.miniclinic.com.br/api/v1/contacts';
    $.post(url, $('#contatoForm').serialize(), function(data) {
      $("#contatoForm").html("<p>Entraremos em contato em até 24 horas.</p><br/><br/><p>Atenciosamente,</p><p>Equipe Miniclinic</p>");
    });
    return false;
  });
}
$(document).ready(function() { enviarFormulario(); });
