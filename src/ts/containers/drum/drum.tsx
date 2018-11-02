import * as React from 'react';
import { connect } from 'react-redux';
import Actions from './redux/actions';
import './style.scss';

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
    return (
      <div className="app-prefix-drum">
        <h1 className="app-prefix-drum__title">DRUM</h1>
        <div
          className="app-prefix-image app-prefix-image--full"
          style={{
            backgroundImage: `url(${this.props.photo})`
          }}
        />
      </div>
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
