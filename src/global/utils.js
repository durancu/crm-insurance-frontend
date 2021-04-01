import publicIp from "public-ip";

export const queryStringFromObject = function (object) {
  var parameters = [];
  for (var property in object) {
    if (object.hasOwnProperty(property) && object[property]) {
      parameters.push(encodeURI(property + "=" + object[property]));
    }
  }

  return parameters.join("&");
};

export async function userPublicIPV4Address() { return await publicIp.v4() };

export async function userIpIsAllowed() {
  const addresses = process.env.REACT_APP_IP_WHITELIST
    ? process.env.REACT_APP_IP_WHITELIST.split(",")
    : [];

  const ipAddress = await userPublicIPV4Address();

  return (
    (process.env.REACT_APP_ENV === "local" || process.env.REACT_APP_ENV === "dev") ||
      (process.env.REACT_APP_ENV === "pro" &&
    addresses.includes(ipAddress))
  );
}
