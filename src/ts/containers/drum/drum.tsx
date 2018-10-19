import * as React from 'react';
import { connect } from 'react-redux';
import Actions from './redux/actions';

interface IDrumProps {
  photo?: string;
  onFetchLoad: Function;
}

interface IDrumState {}

class Drum extends React.Component<IDrumProps, IDrumState> {

  componentDidMount() {
    this.props.onFetchLoad();
  }

  render() {
    console.dir(this.props.photo);
    return (
      <div>DRUM</div>
    );
  }
}

export default connect(
  (state: any) => ({
    photo: state.drum.photo,
  }),
  (dispatch: Function) => ({
    onFetchLoad: () => dispatch(Actions.fetchLoad()),
  }),
)(Drum);
