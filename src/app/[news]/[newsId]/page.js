import { getNewsDetails } from "@/utils/getNewsDetails";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";


const NewsDetails = async ({ params }) => {

    const { data: details } = await getNewsDetails(params.newsId)
    // console.log(details);

    return (
        <Box>
            <Container className="my-5">
                <Grid container spacing={3}>
                    <Grid item lg={6}>

                        <Image
                            src={details.thumbnail_url}
                            width={800}
                            height={500}
                            alt="details thumbnail"
                        />

                        <Grid container spacing={2} sx={{
                            marginTop: "10px"
                        }}>
                            <Grid item lg={6}>
                                <Image
                                    src={details.image_url}
                                    width={800}
                                    height={500}
                                    alt="details thumbnail"
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <Image
                                    src={details.image_url}
                                    width={800}
                                    height={500}
                                    alt="details thumbnail"
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item lg={6}>
                        <Typography variant="h6" component="h2">
                            {details.title}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            marginTop:'10px'
                        }}>
                            <Avatar alt="author image" src={details.author.img} />
                            <Typography>
                               By <span className="font-bold">{details.author.name}</span>
                            </Typography>
                            <Typography>
                                Publish : {details.author.published_date}
                            </Typography>
                        </Box>

                        <Typography style={{
                            textAlign: 'justify',
                            whiteSpace: 'pre-line',
                            margin: "10px 0px"
                        }}>{details.details}</Typography>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetails;