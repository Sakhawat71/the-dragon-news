

export const getNewsDetails = async (id) => {
    const res = await fetch(`https://the-news-portal-server.vercel.app/news/${id}`,{
        cache: "no-store"
    })
    const details = res.json();
    return details;
}