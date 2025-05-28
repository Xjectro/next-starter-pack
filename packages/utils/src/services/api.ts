import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

type RootState = any;

export type PostResponse = {
  title: string;
  id: number;
};

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL!,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => {
    return {
      getPosts: builder.query<
        PostResponse[],
        { limit: number; offset: number }
      >({
        query: ({ limit, offset }) =>
          `/posts?_limit=${limit}&_offset=${offset}`,
      }),
      createPost: builder.mutation<PostResponse, Omit<PostResponse, "id">>({
        query: (post) => ({
          url: "/posts",
          method: "POST",
          body: post,
        }),
      }),
    };
  },
});

export const { useGetPostsQuery, useCreatePostMutation } = api;
export const { getPosts, createPost } = api.endpoints;
