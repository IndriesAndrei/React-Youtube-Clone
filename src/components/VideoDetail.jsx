import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle, FenceTwoTone } from "@mui/icons-material";

import Video from './Videos';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const { id } = useParams();

    
    useEffect(() => {
        // get only the first video
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideoDetail(data.items[0]));
    }, [id]);
    
    console.log(videoDetail);
    return ( 
        <Box minHeight="95vh">
            <Stack direction={{ xs: 'column',  md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{  widht: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player" controls
                        />
                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {videoDetail.snippet.title ? videoDetail.snippet.title : 'No title'}
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail;