import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params: { id } }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    const post = await response.json()
    return json({ post })
}

export default function Post() {
    const { post } = useLoaderData();

    return (
        <div>
            <pre>
                { JSON.stringify(post, null, 4) }
            </pre>
        </div>
    )
}