const dataTransform = (element) => {
  let insurers = [];
  let insurers_simp = [];


  element.hasOwnProperty("liabilityInsurer") &&
    insurers.push(`${element.liabilityInsurer.name}`);
  element.hasOwnProperty("liabilityCharge") &&
    insurers.push(`${element.liabilityCharge.name}`);
  element.hasOwnProperty("physicalDamageInsurer") &&
    insurers.push(`${element.physicalDamageInsurer.name}`);
  element.hasOwnProperty("physicalDamageCharge") &&
    insurers.push(`${element.physicalDamageCharge.name}`);

  console.log(insurers);

  const uniq = insurers.filter((valor, index) => {
    return insurers.indexOf(valor) === index;
  });

  let n = 1;
  uniq.map(
    (x) =>
      x !== "undefined" &&
      insurers_simp.push(`${x} ${uniq.length !== ++n ? "/" : ""}`)
  );

  return insurers_simp;
};

export default dataTransform;
