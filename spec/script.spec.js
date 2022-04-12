const script = require('../script');
const summOfPositive = script.summOfPositive;
const oppositeNumber = script.oppositeNumber;
const slicedString = script.slicedString;
const repeatStr = script.repeatStr;

test('Summ of positive integers', function() {
  expect(summOfPositive(2, 4, -2, -4)).toBe(6);
  expect(summOfPositive(0.1, 0.2)).toBeCloseTo(0.3);
  expect(summOfPositive(2, 4, -2, -4)).toBeGreaterThanOrEqual(Math.PI); 
  expect(summOfPositive(-2, -3, -4, -5)).toBeNull();
  expect(summOfPositive(10, 20, -30, -40)).toBeLessThanOrEqual(30);
});

test('Opposite number', function() {
  expect(oppositeNumber(-14)).toBe(14);
  expect(oppositeNumber(Math.PI)).toBe(-3.14);
  expect(oppositeNumber(Math.PI)).toBeLessThanOrEqual(-3.14);
  expect(oppositeNumber(0)).toBeNull();
  expect(oppositeNumber(0)).toBeTruthy();
});

test('Sliced String', function() {
  expect(slicedString('abracadabra')).toBe('bracadabr');
  expect(slicedString('abracadabra')).toContain('bracadabr');
  expect(slicedString('abracadabra')).toMatch(/bra/);
  expect(slicedString('abracadabra')).toHaveLength(9);
  expect(slicedString('')).toBeNull();
});

test('Repeat string', function() {
  expect(repeatStr('rama', 3)).toBe('ramaramarama');
  expect(repeatStr('rama', 3)).toMatch(/mara/);
  expect(repeatStr('rama', 3)).toHaveLength(12);
  expect(repeatStr('rama', 0)).toBeNull();
  expect(repeatStr('rama', -1)).toBeUndefined();

});
