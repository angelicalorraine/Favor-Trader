module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  if_matching: (val1, val2) => {
     if(val1 === val2) {
        return; 
      }
  },
};

