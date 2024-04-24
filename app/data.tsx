export const getPosts = async () => {
  const response = await fetch(process.env.HYGRAPH_CONTENT_API as string,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HYGRAPH_CONTENT_API_KEY}`
      },
      body: JSON.stringify({
        query: `
              query {
                posts {
                  id,
                  title,
                  coverImage {
                    id,
                    fileName
                    url(transformation: {image: {resize: {height: 150, width: 150}}})
                  }
                }
              }
            `
      }),
    }
  );
  const data = await response.json();
  return data
}

export const getPost = async (id: string) => {
  console.log(id)
  const response = await fetch(process.env.HYGRAPH_CONTENT_API as string,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HYGRAPH_CONTENT_API_KEY}`
      },
      body: JSON.stringify({
        query: `
              query {
                post(where: {id: "${id}"}) {
                  id
                  title
                  content
                  coverImage {
                    id,
                    fileName
                    url(transformation: {image: {resize: {height: 150, width: 150}}})
                  }
                }
              }
            `
      }),
    }
  );
  const data = await response.json();
  return data

}
