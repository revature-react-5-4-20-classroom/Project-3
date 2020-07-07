import React from 'react';
import { Container } from 'reactstrap';

interface IPageTitleBarProps {
    pageTitle: string;
}

export const PageTitleBar = (props : IPageTitleBarProps) => {
    return (
    <div className="row page-title-bar"><Container><div className="middle-text">{props.pageTitle}</div></Container></div>
    );
}