import { HANDLE_SUFFIX, QSTN_HANDLE } from '@qstn/data/constants';

/**
 * Format the given handle by conditionally removing or appending the .qstn or .test suffix.
 *
 * @param handle Complete handle
 * @param keepSuffix Keep the .qstn or .test suffix if true, remove if false
 * @returns Formatted handle without .qstn or .test suffix, unless keepSuffix is true
 */
const formatHandle = (handle: string | null, keepSuffix = false): string => {
  if (!handle) {
    return '';
  }

  if (handle.toLowerCase() === QSTN_HANDLE) {
    return handle;
  }

  if (keepSuffix) {
    return handle.match(HANDLE_SUFFIX)
      ? handle.split(HANDLE_SUFFIX)[0] + HANDLE_SUFFIX
      : handle + HANDLE_SUFFIX;
  }

  return handle.replace(HANDLE_SUFFIX, '');
};

export default formatHandle;
