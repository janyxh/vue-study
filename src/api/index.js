// export const xhr = (method, url, data) => {
//   return postData(url, method, data)
//     .then(data => console.log(data)) // JSON from `response.json()` call
//     .catch(error => console.error(error))
// }

export const postData = (url, data) => {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      //   'user-agent': 'Mozilla/4.0 MDN Example',
      "content-type": "application/json"
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // *client, no-referrer
  }).then(response => response.json()); // parses response to JSON
};

export const getData = (url, data) => {
  // Default options are marked with *
  url = url + "?";
  let isFirst = true;
  for (let i in data) {
    if (isFirst) {
      isFirst = false;
      url += `${i}=${data[i]}`;
    } else {
      url += `&&${i}=${data[i]}`;
    }
  }

  return fetch(url, {
    // body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    // headers: {
    //   'user-agent': 'Mozilla/4.0 MDN Example',
    //   'content-type': 'application/json'
    // },
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // *client, no-referrer
  }).then(response => response.json()); // parses response to JSON
};
