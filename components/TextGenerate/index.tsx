import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container, Box, Button, Typography, LinearProgress, OutlinedInput } from '@mui/material';

interface TextGenerateProps {
  setSubmitResult: (result: string) => void;
}

interface FormValues {
  userInput: string;
}

const TextGenerate: React.FC<TextGenerateProps> = ({ setSubmitResult }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    watch
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post('/api/textAi', {
        userInput: data.userInput
      });
      setSubmitResult(response.data.result);
      reset();
    } catch (err) {
      console.error(err);
      setError('userInput', {
        type: 'server',
        message: 'Something went wrong. Please try again or retry later.'
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: 5 }}>
      <Typography variant="h2" fontSize={24} mb={1}>
        Generate a short description of the image
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
        <OutlinedInput
          {...register('userInput', { required: true })}
          multiline
          minRows={1}
          placeholder="Image description"
          sx={{ minHeight: '60px' }}
        />
        <Button size="small" type="submit" disabled={isSubmitting || !watch('userInput')} variant="contained">
          {isSubmitting ? 'Loading...' : 'Generate'}
        </Button>
        {isSubmitting && <LinearProgress />}
        {errors.userInput && (
          <Typography fontSize={14} color="error" mt={1}>
            {errors.userInput.message}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default TextGenerate;
