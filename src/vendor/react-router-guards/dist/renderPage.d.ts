import React from 'react';
import { PageComponent } from './types';
declare type BaseProps = Record<string, any>;
/**
 * Renders a page with the given props.
 *
 * @param page the page component to render
 * @param props the props to pass to the page
 * @returns the page component
 */
declare function renderPage<Props extends BaseProps>(page: PageComponent, props?: Props): React.ReactElement | null;
export default renderPage;
