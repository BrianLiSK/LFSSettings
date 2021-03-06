const {
  Button,
  colors,
  createMuiTheme,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  MuiThemeProvider,
  Typography,
  withStyles,
} = window['material-ui'];
const theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.purple[300],
      main: colors.purple[500],
      dark: colors.purple[700],
    },
    secondary: {
      light: colors.green[300],
      main: colors.green[500],
      dark: colors.green[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
});
class Index extends React.Component {
  state = {
    open: false,
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handleClick = () => {
    this.setState({
      open: true,
    });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography variant="h4" gutterBottom>
            Material-UI
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            example project
          </Typography>
          <Button variant="contained" color="secondary" onClick={this.handleClick}>
            <Icon className={classes.icon}>fingerprint</Icon>
            Super Secret Password
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}
const ButtonTest = withStyles(styles)(Index);
ReactDOM.render(<ButtonTest />, document.getElementById('button-test'));