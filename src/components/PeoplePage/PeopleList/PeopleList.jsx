import React from 'react';
import PropTypes from 'prop-types';

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
    return (
        <>
            <ul className={styles.list__container}>
                {people.map(({ id, name, img }) =>
                    <li key={name} className={styles.list__item}>
                        <a href="#">
                            <img src={img} alt={name} className={styles.person__photo} />
                            <p>{name}</p>
                        </a>
                    </li>
                )}

            </ul>
        </>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;