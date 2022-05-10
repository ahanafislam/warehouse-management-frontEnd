import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => { 
    const resolved = useResolvedPath(to);
    const match = useMatch({path: resolved.pathname, end: true})

    return (
        <Link
        style={{ color: match ? '#04b4ae' : '#444', borderBottom: match && '2px solid #04b4ae', margin: '0 3px', borderRadius: "5px"}}
        to={to}
        {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;