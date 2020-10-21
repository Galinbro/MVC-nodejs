 type="text/javascript"
    $(document).ready(function () {
      $('#Recruiter-table').DataTable({
        "oLanguage": {
          "sSearch": ""
        },
        "language": {
          "searchPlaceholder": "Search"
        },
        "dom": "<'row pagination2'<'col'B><'col'><'col'><'col'f>>" +
          "<'row pagination2'<'col-sm-12'tr>>" +
          "<'row justify-content-between'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        "buttons": {
          "buttons": [{
            "text": 'Add Vacancy',
            "className": 'btn-outline-primary btn-sm',
            "action": function (e, dt, node, config) {
              location.href = '/recruiter/add-vacancy';
            }
          }],
          "dom": {
            "button": {
              "className": 'btn'
            },
            "buttonLiner": {
              "tag": null
            }
          }
        }

      });
      $('td').click(function () {
        location.href = '/recruiter/vacancy-detail';
      });
    });
