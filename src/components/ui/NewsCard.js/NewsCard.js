
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ news }) => {


    return (
        <Link href={`/${news.category}/${news._id}`}>
            <Card>
                <CardActionArea>
                    <CardMedia sx={{
                        '& img': {
                            height: '250px'
                        }
                    }}>
                        <Image
                            src={news?.thumbnail_url}
                            width={800}
                            height={200}
                            alt='news thambnel'
                        />
                    </CardMedia>

                    <CardContent>
                        <Typography className='bg-[#FF8C47] w-fit px-1 rounded-lg text-white'>
                            {news?.category}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {news?.title.length > 50 ? news?.title.slice(0, 30) + ` ...` : news?.title}
                        </Typography>

                        <Typography variant="body1" color="text.primay">
                            Post by {news?.author.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {news?.details.length > 150 ? news?.details.slice(0, 150) + ` ...` : news?.details}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default NewsCard;