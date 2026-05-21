import React from 'react';

describe('index', () => {
  it('should export AirbnbRating', () => {
    const { AirbnbRating } = require('../index');
    expect(AirbnbRating).toBeDefined();
  });
});
