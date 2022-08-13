import React from 'react';
import LinkList from './Link';

export default function CreateList(headerNavBar) {
    return (
        <LinkList name={headerNavBar.name} />
    )
}