import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const getData = async () => {
  return { message: "Hello World!" };
};

export const loader = async ({ request }: LoaderArgs) => {
  let data = await getData();
  // Generate correct types.
  // if (data) {
  //   return json({ myData: { ifMessage: data } });
  // }
  // return json({ myData: { endMessage: data } });

  // Does not generate correct types.
  if (data) {
    return json({ data: { ifMessage: data } });
  }
  return json({ data: { endMessage: data } });
};
export default function Index() {
  let loaderData = useLoaderData<typeof loader>();
  // Type is when data key is present in return object:
  // SerializeDeferred<{
  //     ifMessage: {
  //         message: string;
  //     };
  // }> | SerializeDeferred<{
  //     endMessage: never;
  // }>

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
