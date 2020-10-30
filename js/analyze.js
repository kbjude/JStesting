const analyze = (array) => {
  if (array.some(num => typeof num !== 'number')) return ('Invalid input');
  const averageCalc = (() => array.reduce((num1, num2) => (num1 + num2)) / array.length)();

  const minCalc = (() => Math.min(...array))();

  const maxCalc = (() => Math.max(...array))();

  const lengthCalc = (() => array.length)();


  return {
    average: averageCalc,
    min: minCalc,
    max: maxCalc,
    length: lengthCalc,
  };
};

export default analyze;
