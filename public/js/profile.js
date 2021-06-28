const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#favor-title').value.trim();
  const description = document.querySelector('#favor-desc').value.trim();
  const difficulty = $('#favor-difficulty').children("option:selected").val();
  console.log(title);
  console.log(description);
  console.log(difficulty);

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
      alert('Failed to create project');
    }
  }
};




const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = $(event.target).closest('form').find('#favor-title').val();

  const description = $(event.target).closest('form').find('#favor-description').val();

  const difficulty = $(event.target).closest('form').find('#favor-difficulty').val();
  const id = event.target.getAttribute('data-id');
  console.log(title);
  console.log(description);
  console.log(difficulty);
  console.log(id);

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



const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/favors/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-favor-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.delete')
  .addEventListener('click', delButtonHandler);


document
  .querySelector('.edit-favor-form')
  .addEventListener('submit', updateButtonHandler);

