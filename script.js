function toggleInput(evt) {
  document.querySelector('.images1').classList.toggle('hidden-div');
}

function anToggleInput() {
    let elem = document.getElementById('img2');
    let style = getComputedStyle(elem);
    if (style.display == 'none') {
        document.getElementById('img2').style.display='flex'
        } else if (style.display == 'flex') {
        document.getElementById('img2').style.display='none'    
    }
}