import * as React from 'react';
import { connect } from 'react-redux';
import Actions from './redux/actions';

interface INightProps {
  photo?: string;
  onFetchLoad: Function;
}

interface INightState {}

class Night extends React.Component<INightProps, INightState> {

  componentDidMount() {
    this.props.onFetchLoad();
  }

  render() {
    console.dir(this.props.photo);
    return (
      <div>NIGHT</div>
    );
  }
}

export default connect(
  (state: any) => ({
    photo: state.night.photo,
  }),
  (dispatch: Function) => ({
    onFetchLoad: () => dispatch(Actions.fetchLoad()),
  }),
)(Night);
