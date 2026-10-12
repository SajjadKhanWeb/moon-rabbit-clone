// https://vike.dev/data

import type { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(_pageContext: PageContextServer) {
  const todoItemsInitial = [
    { id: "milk", text: "Buy milk", completed: false },
    { id: "strawberries", text: "Buy strawberries", completed: true },
  ];
  return { todoItemsInitial };
}
