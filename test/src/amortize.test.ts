import { amortize } from '../../src/amortize';

describe('amortize', () => {
  it('success', () => {
    const loan = amortize(200_000, 50_000, 5.375, 30, 12);
  });
});
