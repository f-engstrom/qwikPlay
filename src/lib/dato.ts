
export async function request<T>({
  query,
  variables,
  preview,
}: {
  query: any;
  variables?: any;
  preview?: any;
}) {
  const req = await fetch(`https://graphql.datocms.com/`, {
      method: "POST",
      headers: {
        authorization: `Bearer 6cd8fe5d5bbe8d5fa2500baffe1f81`,
      },
      body: JSON.stringify({
        query,
  variables
      }),
    });
    const{data} = await req.json();
    console.log(data);
    return  data as T ;
}
