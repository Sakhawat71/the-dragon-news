

export const getNews = async (category) => {

    const res = await fetch(`https://the-news-portal-server.vercel.app/news?category=${category}`,{
        cache: 'no-cache'
    });
    const data = res.json()

    return data;
};
