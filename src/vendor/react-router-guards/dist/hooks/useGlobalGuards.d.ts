import { GuardFunction } from '../types';
/**
 * React hook for creating the guards array for a Guarded
 * component.
 *
 * @param guards the component-level guards
 * @param ignoreGlobal whether to ignore the global guards or not
 * @returns the guards to use on the component
 */
declare const useGlobalGuards: (guards?: GuardFunction[], ignoreGlobal?: boolean) => GuardFunction[];
export default useGlobalGuards;
