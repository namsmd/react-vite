/// <reference types="react" />
export declare type SetState<T> = (newState: React.SetStateAction<T>) => void;
/**
 * React hook for only updating a component's state when the component is still mounted.
 * This is useful for state variables that depend on asynchronous operations to update.
 *
 * The interface in which this hook is used is identical to that of `useState`.
 *
 * @param initialState the initial value of the state variable
 * @returns an array containing the state variable and the function to update
 * the state
 */
declare function useStateWhenMounted<T>(initialState: T): [T, SetState<T>];
export default useStateWhenMounted;
