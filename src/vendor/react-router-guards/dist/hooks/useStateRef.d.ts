/// <reference types="react" />
declare type NotFunc<T> = Exclude<T, Function>;
declare type SetStateFuncAction<T> = (prevState: NotFunc<T>) => NotFunc<T>;
declare type SetStateAction<T> = NotFunc<T> | SetStateFuncAction<T>;
export declare type SetState<T> = (newState: SetStateAction<T>) => void;
export declare type State<T> = React.MutableRefObject<NotFunc<T>>;
/**
 * React hook that provides a similar API to the `useState`
 * hook, but performs updates using refs instead of asynchronous
 * actions.
 *
 * @param initialState the initial state of the state variable
 * @returns an array containing a ref of the state variable and a setter
 * function for the state
 */
declare function useStateRef<T>(initialState: NotFunc<T>): [State<T>, SetState<T>];
export default useStateRef;
