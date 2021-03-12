export const queryStringFromObject = function (object) {
  console.log("object", object);
  var parameters = [];
  for (var property in object) {
    if (object.hasOwnProperty(property) && object[property]) {
      parameters.push(encodeURI(property + "=" + object[property]));
    }
  }

  return parameters.join("&");
};
