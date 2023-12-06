import { metadata } from "../meta.js";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta = () => {
    return metadata;
};

export const loader = async () => {
    console.log('Querying loader...');

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json();

    return json({ posts })
}

export default function Index() {
    const { posts } = useLoaderData();

    return (
        <div style={ { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" } }>
            <h1>Talento Tech: React</h1>
            <Link to="/second">Ir</Link>
            <Link to="/posts/new">New</Link>
            <ul>
                {
                    posts.map(p => (
                        <li key={p.id}>
                            {p.title} - <Link to={`/posts/${p.id}`}>Go</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
