const render_difficulty = () => {
    const rating = $('body').find("span[data-difficulty]");
    $.each (rating, function() {
      ratingScore = $(this).data("difficulty"); 
      let display; 
    if (ratingScore === 5) {
      display = `<i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>`;
    } else if (ratingScore === 4) {
      display = `<i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>`;
    } else if (ratingScore === 3) {
      display = `<i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>`;
    } else if (ratingScore === 2) {
      display = `<i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>`;
    } else if (ratingScore === 1) {
      display = `<i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>`;
    }
      $(this).append(display);
    });
}


const render_skills = () => {
  const badgeAreas = $('.badges');
  $.each (badgeAreas, function() {
    const skillList = $(this).data("skills");  
    const splitList = skillList.split(',');
    const cleanlist = splitList.map( word => 
         word.replace(/[^\w\s]/gi, '')
    );
    console.log(cleanlist);
    let badge = $(this);
   $.each(cleanlist, function(index, value) {
      let newBadge = $(' <span class="badge bg-success" />');
      newBadge.text(value);

      $(badge).closest('div').append(newBadge);
   });
     
  });
  
}





$(document).ready(function() {
    render_difficulty();
    render_skills();
});