import { QSTN_HANDLE } from '@qstn/data/constants';
import { describe, expect, test } from 'vitest';

import formatHandle from './formatHandle';

describe('formatHandle', () => {
  test('should return empty string when handle is null', () => {
    expect(formatHandle(null)).toBe('');
  });

  test(`should return ${QSTN_HANDLE} when given handle is ${QSTN_HANDLE}`, () => {
    const output = formatHandle(QSTN_HANDLE);
    expect(output).toBe(QSTN_HANDLE);
  });

  test('should add handle suffix when keepSuffix is true and suffix not present', () => {
    expect(formatHandle('username123', true)).toBe('username123.qstn');
  });

  test('should remove handle suffix when keepSuffix is false and suffix present', () => {
    expect(formatHandle('username123.qstn', false)).toBe('username123');
  });

  test('should not modify handle when keepSuffix is false and suffix not present', () => {
    expect(formatHandle('username123', false)).toBe('username123');
  });

  test('should keep handle suffix when keepSuffix is true and suffix present', () => {
    expect(formatHandle('username123.qstn', true)).toBe('username123.qstn');
  });
});
