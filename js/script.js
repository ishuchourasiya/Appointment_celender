// var resources=[
//   {
//     id: 'a',
//     title: 'Doctor 1'
//   },
//   {
//     id: 'b',
//     title: 'Doctor 2'
//   }
// ];

var events= [
  { 
    title: 'The Title', 
    start: '2023-12-30T12:00:00', 
    end: '2023-12-30T13:00:00',
    description:'meeting',
    resourceId:'b' 
  }
];


var calendarEl = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',
    // resources:resources,
    events:events,
    editable:true,
    nowIndicator:true,
    allDaySlot:false

  });
  calendar.render();
  $('#drBtn').click(a=>{
   var drId=$('#drId').val()
    var drName=$('#drName').val()

    var drObj= {
      id:drId,
      title:drName
    }
    console.log(drObj)
    clearField1();
    drId==""||drName==""?error():calendar.addResource(drObj);
    

})
$('#ptBtn').click(a=>{
 var pName= $('#pName').val()
 var pMobNo= $('#pMobNo').val()
 var pStTime= $('#pStTime').val()
 var pEndTime= $('#pEndTime').val()
 var selectDr =$('#DocId').val()


var pApoint={
  title:pName,
  start:pStTime,
  end:pEndTime,
  discription:pMobNo,
  resourceId:selectDr
}
clearField();
pName==""||pMobNo==""||pStTime==""||pEndTime==""?error():calendar.addEvent(pApoint);
console.log(pApoint)


// calendar.addEvent(pApoint)
})


function clearField() {
  $("#pName").val("");
  $("#pMobNo").val("");
  $("#pStTime").val("");
  $("#pEndTime").val("");
  $("#DocId").val("");
}

function clearField1 ()
{
  $('#drId').val("");
  $('#drName').val("");
}

function error(){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "All fields are mandatory",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}

  
  