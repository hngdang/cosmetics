var preview = function(event){
    var frame = document.getElementById('frame');
    frame.src = URL.createObjectURL(event.target.files[0]);
    frame.onload = function(){
        URL.revokeObjectURL(frame.src);
    }
};

$(document).on('click', '.delete', function(){
    alert('Delete');
});