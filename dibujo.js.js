var d = document.getElementById("dibujito");
var lienzo= d.getContext("2d");

lienzo.begingPatch();
lienzo.strokeStyle= "red";
lienzo.moveTo(100,100);
lienzo.lineTo(200,200);
lienzo.stroke();
liezo.clsosePatch();
