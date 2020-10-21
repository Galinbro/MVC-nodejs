
$(document).ready(function () {

  $('td').click(function () {
    location.href = '/employee/vacancy-detail';
  });

  $('#my-referrals-fo').DataTable({
    "dom": "<'row pagination2 mb-2'<'col'><'col'><'col'><'col'f>>" +
      "<'row pagination2'<'col-sm-12'tr>>" +
      "<'row justify-content-between pagination2'<'col'i><'col'p><'col'>>"
  });
});
