import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import '../index.css';
import styles from './UIButton.module.css';


function UIButton({
    text,
    onClick,
    disabled,
    theme = 'dark',
    classes
}) {

    return (
        <>
            <button
                disabled={disabled}
                onClick={onClick}
                className={cn(styles.button, styles[theme], classes)}>
                {text}
            </button>
        </>
    )
}

UIButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string
}
export default UIButton;