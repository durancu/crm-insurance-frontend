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

export const userPublicIPV4Address = () => publicIp.v4();

export async function userIpIsAllowed() {
  const addresses = process.env.REACT_APP_IP_WHITELIST
    ? process.env.REACT_APP_IP_WHITELIST.split(",")
    : [];

  console.log(addresses);

  const ipAddress = await userPublicIPV4Address();

  console.log(ipAddress);

  return (
    (process.env.REACT_APP_ENV === "dev" ||
      process.env.REACT_APP_ENV === "pro") &&
    addresses.includes(ipAddress)
  );
}
