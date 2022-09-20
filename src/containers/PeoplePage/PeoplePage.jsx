
//librories
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//hoc
import { withErrorApi } from '@hoc-helpers/withErrorApi';
//ui
//components
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
//hook (what is this?)
import { useQueryParams } from '@hooks/useQueryParams';
//routes
//utils
import { getApiResource, changeHTTP } from '@utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
//constants
import { API_PEOPLE } from '@constants/api';
//styles
import styles from './PeoplePage.module.css';




const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page')

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
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url));
        }
        else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, []);

    return (
        <>
            <>
                <PeopleNavigation
                    getResource={getResource}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    counterPage={counterPage} />
                {people && (<PeopleList people={people} />)}
            </>
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}



export default withErrorApi(PeoplePage);