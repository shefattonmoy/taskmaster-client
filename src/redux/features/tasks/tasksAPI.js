import baseAPI from "../api/baseAPI";

const taskAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const { useAddTaskMutation, useGetTasksQuery, useUpdateTaskMutation } = taskAPI;
