import React from 'react';
interface Props<T> {
    context: React.Context<T>;
    value: T;
}
declare function ContextWrapper<T>({ children, context, value }: React.PropsWithChildren<Props<T>>): JSX.Element;
export default ContextWrapper;
