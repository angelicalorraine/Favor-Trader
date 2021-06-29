// Add Favor button on click functionality

const newFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#favor-title').value.trim();
  const description = document.querySelector('#favor-desc').value.trim();
  const difficulty = $('#favor-difficulty').children("option:selected").val();

  if (title && description && difficulty) {
    const response = await fetch(`/api/favors`, {
      method: 'POST',
      body: JSON.stringify({ title, description, difficulty }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create favor.');
    }
  }
};

// Edit Favor functionality
const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = $(event.target).closest('form').find('#favor-title').val();

  const description = $(event.target).closest('form').find('#favor-description').val();

  const difficulty = $(event.target).closest('form').find('#favor-difficulty').val();
  const id = event.target.getAttribute('data-id');

  if (title && description && difficulty) {
    const response = await fetch(`/api/favors/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description, difficulty }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update favor');
    }
  }

};

// Delete button on click functionality
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/favors/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete favor');
    }
  }
};

// Rendering skills onto profile page
const render_skillsprofile = () => {
  const badgeAreas = $('.badges');
  $.each(badgeAreas, function () {
    const skillList = $(this).data("skills");

    let badge = $(this);
    $.each(skillList, function (index, value) {
      let newBadge = $(' <span class="badge bg-secondary" />');
      newBadge.text(value);

      $(badge).closest('div').append(newBadge);
    });

  });

}

// Render trade history onto page
jQuery(document).ready(function($){
  const tradeArea = $('#trade-history');
  const emptyState = $('<p>' + 'You have no trade history.' + '</p>');
  tradeArea.append(emptyState);
  const user_id = $(tradeArea).data("user");
  $.get("/api/trades").then((data) => {
      const matching = data.reduce(function (newArr, ids) {
         if (ids.buyer_id === user_id || ids.seller_id === user_id) {
            const date = new Date(ids.date_traded);
            const formattedDate = (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear());
           const title = $('<div class="card-title">' + 'Date of trade: ' +  formattedDate +'</div>');
           const card = $('<div class="card mb-3 p-2 favor-list" style="max-width: 40rem;"/>').append(title);
           const favor = $('<p>'+ 'Your favor "'+ ids.buyer_item + '" was traded for "' + ids.seller_item + '"</p>');
           emptyState.remove();
           const body = $('<div class="card-body"/>').append(favor);
           card.append(body);
           tradeArea.append(card);
         } 
      }, []);
  });

});

// Render skills badges
$(document).ready(function () {
  render_skillsprofile();
});

// Event listener for New Favor
document
  .querySelector('.new-favor-form')
  .addEventListener('submit', newFormHandler);

// Event listener for Delete Favor 
document
  .querySelector('.delete')
  .addEventListener('click', delButtonHandler);

// Event listener for Edit Favor
document
  .querySelector('.edit-favor-form')

  .addEventListener('submit', updateButtonHandler);

// $(document).ready(function () {
//   render_skillsprofile();
// });

jQuery(document).ready(function ($) {
  const tradeArea = $('#trade-history');
  const user_id = $(tradeArea).data("user");
  $.get("/api/trades").then((data) => {
    const matching = data.reduce(function (newArr, ids) {
      if (ids.buyer_id === user_id || ids.seller_id === user_id) {
        const date = new Date(ids.date_traded);
        const formattedDate = (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear());
        const title = $('<div class=" card-title pr-4"> <h6>' + 'Date of trade: ' + formattedDate + '</h6></div>');
        const card = $('<div class="card tradeCard border-primary mb-3 p-2 favor-list card-header " style="max-width: 40rem;"/>').append(title);
        const favor = $('<p class="trade">' + 'Your Favor Trade: <br> "' + ids.buyer_item + '" <br> was traded for "' + ids.seller_item + '"</p>');
        const body = $('<div class="card-body"/>').append(favor);
        card.append(body);
        tradeArea.append(card);
      }
    }, []);
  });

});



