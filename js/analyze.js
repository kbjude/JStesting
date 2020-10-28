const analyze = (array) => {
  const averageCalc = (() => array.reduce((num1, num2) => (num1 + num2)) / array.length)();

  const minCalc = (() => Math.min(...array))();

  return {
    average: averageCalc,
    min: minCalc,
  };
};

export default analyze;