import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Download } from '@mui/icons-material';
import {
  Dialog,
  ButtonGroup,
  CardActionArea,
  CardMedia,
  Container,
  Box,
  Button,
  OutlinedInput,
  FormControl,
  Typography,
  Select,
  MenuItem,
  ImageList,
  ImageListItem,
  LinearProgress
} from '@mui/material';

interface ImgGenerateProps {
  submitResult: string;
}

interface FormValues {
  prompt: string;
  amount: string;
  resolution: string;
}

interface ImageData {
  url: string;
}

const ImgGenerate: React.FC<ImgGenerateProps> = ({ submitResult }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    setError,
    watch
  } = useForm<FormValues>();

  useEffect(() => {
    setValue('prompt', submitResult);
  }, [submitResult, setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      setPhotos([]);

      const response = await axios.post('/api/imageAi', values);

      const urls = response.data.data.map((image: ImageData) => image.url);
      setPhotos(urls);
    } catch (error) {
      console.error(error);
      setError('prompt', {
        type: 'server',
        message: 'Something went wrong. Please try again or retry later.'
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: 5 }}>
      <Typography variant="h1" fontSize={26}>
        AI Image Generator
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select {...register('resolution')} defaultValue={'256x256'}>
              <MenuItem value="256x256">256x256</MenuItem>
              <MenuItem value="512x512">512x512</MenuItem>
              <MenuItem value="1024x1024">1024x1024</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 30 }}>
            <Select {...register('amount')} defaultValue="2">
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
          </FormControl>
        </div>
        <OutlinedInput
          multiline
          minRows={2}
          placeholder="Enter img params"
          {...register('prompt', { required: true })}
          sx={{ minHeight: '90px' }}
        />
        <Button size="small" type="submit" disabled={isSubmitting || !watch('prompt')} variant="contained">
          {isSubmitting ? 'Loading...' : 'Generate'}
        </Button>
      </Box>
      {isSubmitting && <LinearProgress />}
      {errors.prompt && (
        <Typography fontSize={14} color="error" mt={1}>
          {errors.prompt.message}
        </Typography>
      )}
      <ImageList cols={2} gap={10} sx={{ pt: 1, pb: 5 }}>
        {photos.map((image, index) => (
          <ImageListItem key={index}>
            <CardActionArea onClick={() => setIsDialogOpen(image)}>
              <CardMedia component="img" src={image} alt="Generated Image" />
            </CardActionArea>
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog fullWidth maxWidth="xs" open={isDialogOpen !== ''} onClose={() => setIsDialogOpen('')}>
        <CardMedia component="img" src={isDialogOpen} alt="Generated Image" />
        <ButtonGroup color="secondary" variant="text" aria-label="text button group">
          <Button sx={{ width: '100%' }} onClick={() => open(isDialogOpen, '_blank')}>
            <Download />
          </Button>
          <Button sx={{ width: '100%' }} onClick={() => setIsDialogOpen('')}>
            Close
          </Button>
        </ButtonGroup>
      </Dialog>
    </Container>
  );
};

export default ImgGenerate;
