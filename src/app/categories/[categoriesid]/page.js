import { getNews } from '@/utils/getNews';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const NewsPages = async ({ searchParams }) => {

    // console.log(searchParams);
    const { data: news } = await getNews(searchParams.category);
    console.log(news);



    return (
        <div>
            <h1>news page for: {searchParams.category}</h1>

            <Grid container spacing={2}>
                {
                    news.map(post => (
                        <Grid key={post._id} item xs={6} >
                            <Card>
                                <CardActionArea>
                                    <CardMedia>
                                        {/* <Image
                                            src={newsImg}
                                            width={800}
                                            height={300}
                                            alt='news thambnel'
                                        /> */}
                                    </CardMedia>

                                    <CardContent>
                                        <p className='bg-[#FF8C47] w-fit px-1 rounded-lg text-white'>
                                            {post.category}
                                        </p>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {post.title}
                                        </Typography>

                                        <Typography variant="body1" color="text.primay">
                                            Post by {post.author.name} {post.author.published_date}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {post.details.slice(0, 150) + `....`}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default NewsPages;