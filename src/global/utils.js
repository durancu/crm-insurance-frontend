export const queryStringFromObject = function (object) {
    var parameters = [];
    for (var property in object) {
      if (object.hasOwnProperty(property)) {
        if (!object[property]) return "";
        parameters.push(encodeURI(property + "=" + object[property]));
      }
    }
  
    return parameters.join("&");
  };

  