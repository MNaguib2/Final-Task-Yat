var click = true;

function edite(id) {
    rowid = id.id.split('-')[1];
    //console.log($("#Table_id tr"[1]));
    //console.log(id);
    if (click === true) {
        document.getElementById("Table_id").rows[rowid].contentEditable = "true";
        $('#' + id.id).html('<i class="fas fa-clipboard-check"></i> Ok');
        click = false;
        document.getElementById("Table_id").rows[rowid].style.border = "thick solid #0000FF";
    }
    else{
        click = true;
        $('#' + id.id).html('<i class="fa fa-edit"></i> edite');
        document.getElementById("Table_id").rows[rowid].contentEditable = "false";
        console.log(document.getElementById("Table_id").rows[rowid])
        document.getElementById("Table_id").rows[rowid].style.border = "none";
    }
}
