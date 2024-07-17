import { getNews } from '@/utils/getNews';

const NewsPages = async ({ searchParams }) => {

    // console.log(searchParams);
    const { data: news } = await getNews(searchParams.category);
    console.log(news);

    return (
        <div>
            <h1>news page for: {searchParams.category}</h1>
            {
                news.map(post => <li key={post._id}>{post.title}</li>)
            }
        </div>
    );
};

export default NewsPages;