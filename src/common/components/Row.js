import { Grid } from '@material-ui/core';

export const Row = props => {
   return <>
      <Grid
         container={true}
         {...props}
      >
         {props.children}
      </Grid>
   </>
}