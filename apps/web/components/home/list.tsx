"use client";

import React from "react";
import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "@repo/utils/services/api";

import {
  List as ListComponent,
} from "@xjectro/react/components/list";
import { Input } from "@xjectro/react/components/input";
import { Button } from "@xjectro/react/components/button";
import { Container } from "@xjectro/react/components/container";
import { Separator } from "@xjectro/react/components/separator";
import { Skeleton } from "@xjectro/react/components/skeleton";

export function List() {
  const [title, setTitle] = React.useState("");

  const { data: posts = [], isLoading: isGettingPosts } = useGetPostsQuery({
    limit: 5,
    offset: 0,
  });

  const [createPostMutation, { isLoading: isCreatingPost }] =
    useCreatePostMutation();

  return (
    <Container direction="vertical" spacing="xl" className="w-full">
      <Input
        onChange={(v) => setTitle(v.target.value)}
        placeholder="Hello !!"
      />
      <Button size="lg" onClick={() => createPostMutation({ title })}>
        {isCreatingPost ? "Creating..." : "Create Post"}
      </Button>
      <Separator />
      {isGettingPosts ? (
        <Skeleton className="size-46" />
      ) : (
        <ul>
          <ListComponent
            items={posts}
            keyExtractor={(item) => item.id}
            renderItem={(post) => <li key={post.id}>{post.title}</li>}
          />
        </ul>
      )}
    </Container>
  );
}
