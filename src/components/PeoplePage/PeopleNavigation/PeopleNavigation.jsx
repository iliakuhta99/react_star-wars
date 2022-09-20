import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UIButton from '@ui/UIButton';

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    prevPage,
    counterPage,
    nextPage
}) => {

    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);

    return (
        <>

            <div className={styles.container}>
                <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
                    <UIButton
                        text="Previous"
                        onClick={handleChangePrev}
                        disabled={!prevPage}
                    />
                </Link>
                <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
                    <UIButton
                        text="Next"
                        onClick={handleChangeNext}
                        disabled={!nextPage}
                    />
                </Link>
            </div>
        </>
    )
}

PeopleNavigation.propTypes = {
    getResourse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}
export default PeopleNavigation;