const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon_title');

accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle){
  accordeonTitle.addEventListener('click', function(){
    const currentText = accordeonTitle.parentElement.querySelector('.accordeon_text');

    accordeonTitle.classList.toggle('accordeon_title-active');
    currentText.classList.toggle('accordeon_text-visible');

    if(currentText.classList.contains('accordeon_text-visible')){
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else{ 
      currentText.style.maxHeight = null
    } 
  });
});