import { json } from "@remix-run/node";

// export const loader = async () => {}

export const meta = ({ data }) => {
    return [ {
        title: 'Post'
    } ]
}

export default function NewPost() {
    return (
        <div>
            <form action="/posts/new"
                  method="POST"
                  style={
                      {
                          display: "flex",
                          flexDirection: "column",
                          maxWidth: "500px",
                          gap: "1rem",
                          margin: "0 auto"
                      }
                  }
                  encType="multipart/form-data"
            >
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title"/>

                <label htmlFor="content">Content:</label>
                <textarea name="content" id="content" cols="30" rows="10"/>

                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export const action = async ({ request }) => {
    const fd = await request.formData()

    for (const [key, value] of fd) {
        console.log(`${key}: ${value}`);
    }

    return json({
        ok: true
    })
}