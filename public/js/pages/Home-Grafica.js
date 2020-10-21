/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict'
//Ricardo Doughnut Start
  var ctxP = document.getElementById("VacanciesReferals").getContext('2d');
  var myPieChart = new Chart(ctxP, {
   type: 'pie',
   data: {
     labels: ["Without Referral", "With Referral"],
     datasets: [{
       data: [3,6],
       backgroundColor: ["#ababab", "#0066A0"],
       hoverBackgroundColor: ["#707070", "#0092e6"],
     }]
   },
   options: {
     responsive: true,
     legend: {
         position: 'bottom',
         labels: {
           usePointStyle: true,
           boxWidth: 10
         }
      }
   }
  });

});

//Ricardo Doughnut End
