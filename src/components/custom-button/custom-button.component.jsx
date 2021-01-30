import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
}) => (
    <button
        className={''}
        {...otherProps}
        >
        {children}
    </button>
);

export default CustomButton;
//TODO: ASI add class name line 12