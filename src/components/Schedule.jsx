import {Card, CardHeader, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function Schedule() {
  const date = new Date();
  return (
      <Container maxWidth="false">
        <Grid container xs={12} lg={12}>
          <Grid container xs={12} lg={12}>
            <Grid xs={12} lg={6}>
              <Card elevation={5} sx={{width: "100%"}}>
                <CardHeader
                    title="Todo"
                    titleTypographyProps={{variant: "body1", fontWeight: 700}}
                    subheader={date.toLocaleDateString()}
                    subheaderTypographyProps={{variant: "subtitle2"}}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  )
}
