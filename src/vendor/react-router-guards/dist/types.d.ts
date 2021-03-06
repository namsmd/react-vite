import { ComponentType } from 'react';
import { LocationDescriptor } from 'history';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
/**
 * General
 */
export declare type Meta = Record<string, any>;
export declare type RouteMatchParams = Record<string, string>;
/**
 * Guard Function Types
 */
export declare const GuardTypes: Readonly<{
    CONTINUE: string;
    PROPS: string;
    REDIRECT: string;
}>;
export declare type GUARD_TYPES_CONTINUE = typeof GuardTypes.CONTINUE;
export declare type GUARD_TYPES_PROPS = typeof GuardTypes.PROPS;
export declare type GUARD_TYPES_REDIRECT = typeof GuardTypes.REDIRECT;
export declare type GuardType = GUARD_TYPES_CONTINUE | GUARD_TYPES_PROPS | GUARD_TYPES_REDIRECT;
export interface NextContinueAction {
    type: GUARD_TYPES_CONTINUE;
    payload?: any;
}
export declare type NextPropsPayload = Record<string, any>;
export interface NextPropsAction {
    type: GUARD_TYPES_PROPS;
    payload: NextPropsPayload;
}
export declare type NextRedirectPayload = LocationDescriptor;
export interface NextRedirectAction {
    type: GUARD_TYPES_REDIRECT;
    payload: NextRedirectPayload;
}
export declare type NextAction = NextContinueAction | NextPropsAction | NextRedirectAction;
export interface Next {
    (): void;
    props(props: NextPropsPayload): void;
    redirect(to: LocationDescriptor): void;
}
export declare type GuardFunctionRouteProps = RouteComponentProps<RouteMatchParams>;
export declare type GuardToRoute = GuardFunctionRouteProps & {
    meta: Meta;
};
export declare type GuardFunction = (to: GuardToRoute, from: GuardFunctionRouteProps | null, next: Next) => void;
/**
 * Page Component Types
 */
export declare type PageComponent = ComponentType | null | undefined | string | boolean | number;
/**
 * Props
 */
export interface BaseGuardProps {
    guards?: GuardFunction[];
    ignoreGlobal?: boolean;
    loading?: PageComponent;
    error?: PageComponent;
}
export declare type PropsWithMeta<T> = T & {
    meta?: Meta;
};
export declare type GuardProviderProps = BaseGuardProps;
export declare type GuardedRouteProps = PropsWithMeta<BaseGuardProps & RouteProps>;
export declare type GuardProps = PropsWithMeta<RouteProps> & {
    name?: string | string[];
};
