import { Container, Grid } from "@material-ui/core";
import Header from "components/Header";
import QuizContainer from "components/QuizContainer";

const HomePage = () => {

    return(
        <Container style={{ padding:'0px', margin:'0px', maxWidth:'100%' }}>
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item>
                <QuizContainer/>
            </Grid>
        </Grid>
        </Container>
    )
}
export default HomePage;