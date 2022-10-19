import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '09845cae69mshc1eee9e54938120p1596e7jsnc19ff7374776');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query:() => '/charts/world'}),
    }), 
});
export const {
    useGetTopChartsQuery,
} = shazamCoreApi;