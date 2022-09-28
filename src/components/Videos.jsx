import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
    return (
        <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="start">
            {videos.map((item, index) => {
                return <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            })}
        </Stack>
    )
}

export default Videos;