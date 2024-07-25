import { getNews } from '@/utils/getNews';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const NewsPages = async ({ searchParams }) => {

    // console.log(searchParams);
    const { data: news } = await getNews(searchParams.category);
    // console.log(news);



    return (
        <div>

            <Typography className='my-2'>Total <span className='font-bold'>{searchParams.category}</span> news: {news.length}</Typography>

            <Grid container spacing={2}>
                {
                    news.map(post => (
                        <Grid key={post._id} item xs={6} >
                            <Link href={`/${post.category.toLowerCase()}/${post._id}`}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            "& img": {
                                                width: "100%",
                                                height: "250px"
                                            }
                                        }}>
                                            <Image
                                                src={post.thumbnail_url}
                                                width={800}
                                                height={250}
                                                alt='news thambnel'
                                            />
                                        </CardMedia>

                                        <CardContent>
                                            <p className='bg-[#F3454C] w-fit px-3 rounded-lg text-white mb-4'>
                                                {post.category}
                                            </p>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {post.title.length > 30 ? post.title.slice(0, 150) + `....` : post.title}
                                            </Typography>

                                            <Typography variant="body1" color="text.primay">
                                                Post by {post.author.name} {post.author.published_date}
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                {post.details.length > 145 ? post.details.slice(0, 150) + `....` : post.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default NewsPages;