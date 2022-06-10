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
    height: '85vh', 
    backgroundImage: `url(/../images/bqnner.jpg) `,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px',
    // opacity: 0.6,
 },

 Container: {
  height: '85vh',
  textAlign: 'center',
  alignItems: 'center',
  color: '#ffffff',
 },

 headertext: {
  fontWeight: 'bold',
  fontSize: '35px',
  paddingTop: 190,
  marginBottom: 10,
  color: '#ffffff',
 },

 button : {
  backgroundColor: '#000000',
  color: '#ffffff',
  '& ::hover': {
    color: '#000000',
    backgroundColor: '#ffffff',
  },
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
    border: '1px solid #ffffff',
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
  },

  paystackButton: {
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '20px',
    letterSpacing: '0.1rem',
    textTransform: 'uppercase',
    backgroundColor: '#7EC8E3',
    fontWeight: 'bold',
    color: '#e0eafc',
    border: 'none',
    borderRadius: '5px',
    width: '100%',
    height: '45px',
    marginTop: '40px',
  }
 
}));
export default useStyles;