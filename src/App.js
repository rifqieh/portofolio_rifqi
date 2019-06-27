import React, {Component} from 'react';
import Container from '@material-ui/core/Container'
// import Content from './Components/Content'
import Grid from '@material-ui/core/Grid'
import Biodata from './Components/Biodata'
class App extends Component{
  render(){
    return(
      <div>
        {/* <AppBar/> */}
        <br/>
        {/* <Container> */}
          <Grid 
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh' }}>
            <Biodata/>
            {/* <Content/> */}
          </Grid>
        {/* </Container>       */}
      </div>
    )
  }
}

export default App;
