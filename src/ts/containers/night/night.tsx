import * as React from 'react';
import { connect } from 'react-redux';
import Actions from './redux/actions';
import './style.scss';

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
    return (
      <div className="app-prefix-night">
        <div className="app-prefix-night__left">
          <h1 className="app-prefix-night__title">NIGHT</h1>
        </div>
        <div className="app-prefix-night__right">
          <div
            className="app-prefix-image app-prefix-image--full"
            style={{
              backgroundImage: `url(${this.props.photo})`
            }}
          />
        </div>
      </div>
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
