import { Stack } from '@mui/material';
import Grid from './grid/Grid';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Stack
        spacing={2}
        sx={{
          containerName: 'content',
          containerType: 'inline-size',
          flexGrow: 1,
          border: '1px solid black',
        }}
      >
        <Grid.Container queryContainer="content">
          <Grid.Item xs={12} sm={6} lg={4}>
            some data
          </Grid.Item>
          <Grid.Item xs={12} sm={6} lg={4}>
            some data
          </Grid.Item>
          <Grid.Item xs={12} sm={6} lg={4}>
            some data
          </Grid.Item>
          <Grid.Item xs={12} sm={6} lg={4}>
            some data
          </Grid.Item>
          <Grid.Container xs={12} sm={6} lg={4}>
            <Grid.Item xs={12} sm={6} lg={4}>
              some data
            </Grid.Item>
            <Grid.Item xs={12} sm={6} lg={4}>
              some data
            </Grid.Item>
          </Grid.Container>
        </Grid.Container>
      </Stack>
    </div>
  );
}

export default App;
