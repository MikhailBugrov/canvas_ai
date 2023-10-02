import { Container, Typography, Link } from '@mui/material';

function Page() {
  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Typography align="justify" sx={{ textIndent: '1em' }} paragraph>
        With the &quot;Canvas AI&quot; application, you can generate up to four images simultaneously in different
        resolutions - 256x256, 512x512, and 1024x1024.
      </Typography>
      <Typography align="justify" sx={{ textIndent: '1em' }} paragraph>
        In addition to the image generation functionality, the application also includes a tool for creating text
        descriptions using an artificial intelligence specifically tuned for this task, which will help create even more
        vivid and colorful compositions.
      </Typography>
      <Typography textAlign="center" variant="h6">
        Contact
      </Typography>
      <Typography align="justify" sx={{ textIndent: '1em' }} paragraph>
        If you have any questions, suggestions, or feedback, please contact me at{' '}
        <Link href="mailto:mikhail.bugrov.v@gmail.com" color="secondary">
          mikhail.bugrov.v@gmail.com
        </Link>
        .
      </Typography>
      <Typography align="justify" sx={{ textIndent: '1em' }} paragraph>
        You can find the source code for this project on{' '}
        <Link href="https://github.com/MikhailBugrov" color="secondary" target="_blank" rel="noopener">
          GitHub
        </Link>
        .
      </Typography>
    </Container>
  );
}

export default Page;
