// Sets console.log() to print to Evothings console
if (window.hyper && window.hyper.log) { console.log = hyper.log }

document.addEventListener(
    'deviceready',
    function() { /*TODO: Add your callback here*/ });

var app = {}

app.SERVICE_UUID='0000ffe0-0000-1000-8000-00805f9b34fb';
app.CHARACTERISTIC_UUID='0000ffe1-0000-1000-8000-00805f9b34fb';

app.showControls = function()
{
    $('#disconnect').prop('disabled', false);
    $('#startView').hide();
    $('#controlsView').show();
}

app.showStart = function()
{
    $('#disconnect').prop('disabled', true);
    $('#startView').show();
    $('#controlsView').hide();
}

function pressButton(elementid){
    let theid = elementid;
document.getElementById(`${theid}`).style.backgroundColor = 'goldenrod';
}

function unpress(elementid){
    let theid = elementid;
document.getElementById(`${theid}`).style.backgroundColor = 'navy';
}