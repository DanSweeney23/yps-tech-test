import { describe, it, expect, vi } from 'vitest';
import { formatDate } from '../util';

describe('formatDate', () => {
  it('formats a 1st of may correctly', () => {
    const input = '2023-05-01T14:56:19.062Z';

    const result = formatDate(input);

    expect(result).toBe('1st May 2023')
  });

  it('formats 3rd of may correctly', () => {
    const input = '2023-05-03T14:56:19.062Z';

    const result = formatDate(input);

    expect(result).toBe('3rd May 2023')
  });

  it('formats 5th of may correctly', () => {
    const input = '2023-05-05T14:56:19.062Z';

    const result = formatDate(input);

    expect(result).toBe('5th May 2023')
  });

  it('formats 11th of may correctly', () => {
    const input = '2023-05-11T14:56:19.062Z';

    const result = formatDate(input);

    expect(result).toBe('11th May 2023')
  });

  it('formats 31st of may correctly', () => {
    const input = '2023-05-31T14:56:19.062Z';

    const result = formatDate(input);

    expect(result).toBe('31st May 2023')
  });

  it('formats 22nd of may correctly', () => {
    const input = '2023-05-22T14:56:19.062Z';

    const result = formatDate(input);

    expect(result).toBe('22nd May 2023')
  });
});