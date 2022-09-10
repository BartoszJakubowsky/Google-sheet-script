const  email = Session.getActiveUser().getEmail();
const sheetGrafik = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Roboczy 2");
const sheetOsoby = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Administrator");  

var person = getuserData(sheetOsoby);
   

function onOpen(){
 isAdmin(sheetOsoby);
  //dropList(sheetOsoby);
}

function onEdit(e){

const rangeModifed = e.range;
SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`${rangeModifed.getValue} `, SpreadsheetApp.getUi().ButtonSet.OK));

//  editedCell(person.name, sheetGrafik); 
}
function onSelectionChange(e){
  SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert("działa", SpreadsheetApp.getUi().ButtonSet.OK));
}


    



function isAdmin(sheet) {
const data = sheet.getDataRange().getValues();

  for (i = 0; i < data.length; i++)
  {
    if(data[i][1] == email)
    {
        if(data[i][2] == true)
          return true;

        else if (data[i][2] == 'special'){
          var alert = SpreadsheetApp.getUi().alert("Na kolana i ładnie proś", SpreadsheetApp.getUi().ButtonSet.OK);
          SpreadsheetApp.getActive().toast(alert);
          return false;
        }

        else
          return false;
    }  
  }
  //if email is not aprovved
  var alert = SpreadsheetApp.getUi().alert("Ups 😬\nWygląda, że Ciebie nie zapisaliśmy 😲\nSkontaktuj się z Ryszardem Jakubowskim 😁", SpreadsheetApp.getUi().ButtonSet.OK);

  SpreadsheetApp.getActive().toast(alert);

}


function getuserData(sheet){
const data = sheet.getDataRange().getValues();

  for (i = 0; i < data.length; i++)
  {
    if(data[i][1] == email)
        return person = {name: data[i][0], mail: data[i][1], isAdmin: data[i][2]};
  }
}


function editedCell(person, sheet){
  var cell = sheet.getDataRange().getActive().getValue();
  
SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`Średnio działa ${cell.toString()}?`, SpreadsheetApp.getUi().ButtonSet.OK));
return;


    if (cell.getValue() != person.name){
      return SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`Czy na pewno chcesz nadpisać siebie zamiastr ${(cell.getValue).toString()}?`, SpreadsheetApp.getUi().ButtonSet.OK));
    }
    else if (cell.getValue() == person.name){
       
      return SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert("Zapisałeś się na wózek", SpreadsheetApp.getUi().ButtonSet.OK));
    }
    else{
      return;
    }

}










// to do?


//  function dropList(sheetOsoby){
   
   
//    var cell = SpreadsheetApp.getActiveSpreadsheet().getSelection().getCurrentCell();
   
//    if (cell.canEdit() == false ^ cell.isPartOfMerge() == true)
//    return;
   

//    console.log(cell);
//  // sheetOsoby.getRange("D2").setValue("coś tam");
//  //  sheetOsoby.getRange("D2").setNumberFormat('@STRING@').setValue("coś tam");



//  }


//  function createTimeDrivenTriggers() {
//   // Trigger every 6 hours.
//   ScriptApp.newTrigger('myFunction')
//       .timeBased()
//       .everyHours(6)
//       .create();
//   // Trigger every Monday at 09:00.
//   ScriptApp.newTrigger('myFunction')
//       .timeBased()
//       .onWeekDay(ScriptApp.WeekDay.MONDAY)
//       .atHour(9)
//       .create();
// }


























