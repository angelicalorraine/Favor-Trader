// Render difficulty stars
const render_difficulty = () => {
  const rating = $('body').find("span[data-difficulty]");
  $.each(rating, function () {
    ratingScore = $(this).data("difficulty");
    const display = new Array(ratingScore).fill().map(a => `<i class="fa fa-star" aria-hidden="true"></i>`).concat(new Array(5 - ratingScore).fill().map(a => `<i class="fa fa-star-o" aria-hidden="true"></i>`)).join('');
    $(this).append(display);
  });
}

// Render skills badges
const render_skillsnew = () => {
  const badgeAreas = $('.badges');
  $.each(badgeAreas, function () {
    const skillList = $(this).data("skills");
    let badge = $(this);
    $.each(skillList, function (index, value) {
      let newBadge = $(' <span class="badge bg-success" />');
      newBadge.text(value);

      $(badge).closest('div').append(newBadge);
    });

  });
}

$(document).ready(function () {
  render_difficulty();
  render_skillsnew();
});