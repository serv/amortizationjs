import amortize from '../../src';

describe('amortize', () => {
  it('success', () => {
    const loan = amortize(200_000, 50_000, 5.375, 30, 12);
  });
});
