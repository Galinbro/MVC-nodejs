/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict'
//Ricardo Doughnut Start
  var ctxP = document.getElementById("AmountOfRefferals").getContext('2d');
  var myPieChart = new Chart(ctxP, {
   type: 'pie',
   data: {
     title: "20",
     labels: ["Referidos"],
     datasets: [{
       data: [20],
       backgroundColor: ["#0066A0"],
       hoverBackgroundColor: ["#0092e6"],
     }]
   },
   options: {
     responsive: true,
     cutoutPercentage: 80,
     legend: {
         display: false
      }
   }
  });

  var ctxP = document.getElementById("HireRate").getContext('2d');
  var myPieChart = new Chart(ctxP, {
   type: 'doughnut',
   data: {
     labels: ["No-Contratados", "Contratados"],
     datasets: [{
       data: [5, 15],
       backgroundColor: ["#707070", "#0066A0"],
       hoverBackgroundColor: ["#ababab", "#0092e6"],
     }]
   },
   cutoutPercentage: 80,
   options: {
     responsive: true,
     cutoutPercentage: 80,
     legend: {
         display: false
      }
   }
  });
});

//Ricardo Doughnut End
