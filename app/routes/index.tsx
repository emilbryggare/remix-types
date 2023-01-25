import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderArgs) => {
  // Generate correct types.
  // return json({ data: { message: "Hello World!" } });

  // Does not generate correct types, e.g. SerializeDeferred
  return json({ data: { message: "Hello World!" } });
};
export default function Index() {
  let loaderData = useLoaderData<typeof loader>();
  // Type is when data key is present in return object:
  //   SerializeDeferred<{
  //     message: string;
  // }>
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
