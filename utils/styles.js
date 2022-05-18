import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#2E8BC0',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  Carousel: {
    marginTop: '1rem',
    height: '85vh',
    background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
    textAlign: 'center',
    alignItems: 'center',
 },
 headertext: {
  fontWeight: 'bold',
  fontSize: '30px',
  paddingTop: 190,
  marginBottom: 10,
  color: '#ffffff',
 },
 button : {
  background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
  color: '#ffffff',
 },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem' },
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {
    // border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    backgroundColor: '#145DA0',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#B2BEB5',
    },
  },
  sort: {
    marginRight: 5,
  },
  banner: {
    height: '85vh',
  }
 
}));
export default useStyles;