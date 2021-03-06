const currentUser = $('span[data-currentuser]').data('currentuser');

const tradeFormHandler = async (event) => {
  event.preventDefault();
  // Find traded thing and make it the buyer item
  const buyer_item = $('#item-list').children("option:selected").val();
  const seller_id = $('#trade-button').data('user');
  const seller_item = $('#trade-button').data('favor');
  if (buyer_item && seller_id && seller_item) {
    const response = await fetch('/api/trades', {
      method: 'POST',
      body: JSON.stringify({ buyer_item, seller_id, seller_item }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/profile');
    } else {
      alert('Failed to trade favors');
    }
  }
};

$(".tradeModalLaunch").click(function (event) {
  const seller_item_title = $(event.target).data('favor');
  const seller_name = $(event.target).data('seller');
  const seller_id = $(event.target).data('user');
  $('#seller-name').text(seller_name);
  $('#seller-item-name').text(seller_item_title);
  $('#trade-button').attr("data-favor", seller_item_title);
  $('#trade-button').attr("data-user", seller_id);
  $("#tradeModal").modal("show");
});

const filterActivities = () => {
  const favors = $('.card');
  $.each(favors, function () {
    const tradeButton = $(this).find('button.tradeModalLaunch')
    const userID = tradeButton.data('user');
    if (userID === currentUser) {
      tradeButton.attr('disabled', 'disabled');
    }
  });
}


const filterFavorsInTradeModal = () => {
  const list = $('#item-list option');
  $.each(list, function () {
    const userID = $(this).data('user');
    if (userID !== currentUser) {
      $(this).remove();
    }
  });
}

$(document).ready(function () {
  filterActivities();
  filterFavorsInTradeModal();
});

document
  .querySelector('.trade-form')
  .addEventListener('submit', tradeFormHandler);
