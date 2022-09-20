
//librories
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//hoc
import { withErrorApi } from '@hoc-helpers/withErrorApi';
//ui
//components
import PeopleList from '@components/PeoplePage/PeopleList';
//huc (what is this?)
//routes
//utils
import { getApiResource } from '@utils/network';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
//constants
import { API_PEOPLE } from '@constants/api';
//styles
import styles from './PeoplePage.module.css';




const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);


    const getResource = async (url) => {

        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {

                const id = getPeopleId(url);
                const img = getPeopleImage(id);
                return {
                    id,
                    name,
                    img
                }
            })

            setPeople(peopleList);
            setErrorApi(false);
        }
        else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE);
    }, []);

    return (
        <>
            <>
                <h1>Navigation</h1>
                {people && (<PeopleList people={people} />)}
            </>
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}



export default withErrorApi(PeoplePage);