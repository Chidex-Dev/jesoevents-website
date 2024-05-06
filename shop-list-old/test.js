
fetch('https://6qq2yvww.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22products%22%5D')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    // console.log(data?.result)
    const stringifiedObj = JSON.stringify(data?.result);
    localStorage.setItem("shop-list", stringifiedObj);
    console.log(JSON.parse(localStorage.getItem('shop-list')));
  }).catch(console.error);





// Listen for localstorage changes

  window.addEventListener('storage', () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(JSON.parse(window.localStorage.getItem('shop-list')));
  });