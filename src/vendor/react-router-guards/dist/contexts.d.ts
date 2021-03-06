/// <reference types="react" />
import { RouteComponentProps } from 'react-router-dom';
import { PageComponent, GuardFunction } from './types';
export declare const ErrorPageContext: import("react").Context<PageComponent>;
export declare const FromRouteContext: import("react").Context<RouteComponentProps<{}, import("react-router").StaticContext, any> | null>;
export declare const GuardContext: import("react").Context<GuardFunction[] | null>;
export declare const LoadingPageContext: import("react").Context<PageComponent>;
