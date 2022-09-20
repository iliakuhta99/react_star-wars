import { HTTP, HTTPS } from '@constants/api';



export const changeHTTP = (url) => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('could not fetch', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('could not fetch', error.message);
        return false;
    }
}



//(async () => {
//    const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
 //   console.log(body);
//})();


