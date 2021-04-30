import { expect } from 'chai';
import amortize from '../../src';
import { calculatePrinciple } from '../../src';

describe('amortize', () => {
  it('success', () => {
    const loan = amortize(200_000, 50_000, 5.375, 30, 12);
  });
});

describe('calculatePrinciple', function () {
  it('success', function () {
    const actual = calculatePrinciple(839.96, 5.375, 30, 12);
    expect(200_000 - 50_000 - actual).to.lessThan(1);
  });
});
