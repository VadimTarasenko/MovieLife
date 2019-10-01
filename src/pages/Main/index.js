import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainPage from './Main';
import * as mainPageActions from 'store/actions/main.actions';
import { getAllMovies } from 'store/middlewares/main.middleware';

const mapStateToProps = ({ mainPage }) => ({
  mainPage
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(mainPageActions, dispatch),
  getAllMovies: getAllMovies(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage); 