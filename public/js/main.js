const render_difficulty = () => {
  const rating = $('body').find("span[data-difficulty]");
  $.each(rating, function () {
    ratingScore = $(this).data("difficulty");
    const display = new Array(ratingScore).fill().map(a => `<i class="fa fa-star" aria-hidden="true"></i>`).concat(new Array(5 - ratingScore).fill().map(a => `<i class="fa fa-star-o" aria-hidden="true"></i>`)).join('');
    $(this).append(display);
  });
}

const render_skillsnew = () => {
  const badgeAreas = $('.badges');
  $.each(badgeAreas, function () {
    const skillList = $(this).data("skills");
    console.log(skillList);

    let badge = $(this);
    $.each(skillList, function (index, value) {
      let newBadge = $(' <span class="badge bg-success" />');
      newBadge.text(value);

      $(badge).closest('div').append(newBadge);
    });

  });
}


// const render_skills = () => {
//   const badgeAreas = $('.badges');
//   $.each(badgeAreas, function () {
//     const skillList = $(this).data("skills");
//     const splitList = skillList.split(',');
//     const cleanlist = splitList.map(word =>
//       word.replace(/[^\w\s]/g, '')
//     );

//     let badge = $(this);
//     $.each(cleanlist, function (index, value) {
//       let newBadge = $(' <span class="badge bg-success" />');
//       newBadge.text(value);

//       $(badge).closest('div').append(newBadge);
//     });

//   });

// }








$(document).ready(function () {
  render_difficulty();
  // render_skills();
  render_skillsnew();
});