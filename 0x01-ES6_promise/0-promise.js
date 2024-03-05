function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from Api');
    }, 1000);
  });
}

export default getResponseFromAPI;
