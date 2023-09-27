import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseAPI = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: 'https://taskmaster-server-fn6uu8djv-shefathossain7-gmailcom.vercel.app'}),
    tagTypes: ['Tasks'],
    endpoints: () => ({}),
});

export const {useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation} = baseAPI;

export default baseAPI;