import './style.scss'

class AnimationBg extends React.Component {
  constructor(props) {
    super(props);

    this.state = { animationCompleted: true };
  }

  componentDidMount() {
    this.animationTimer = setTimeout(::this.startAnimation, 0);
    this.animationStopInterval = setInterval(::this.stopAnimation, this.props.animationDuration);
    this.animationStartInterval = setInterval(::this.startAnimation, parseInt(this.props.animationDuration) + 10);
  }

  componentWillUnmount() {
    clearTimeout(this.animationTimer);
    clearInterval(this.animationStopInterval);
    clearInterval(this.animationStartInterval);
  }

  startAnimation() {
    this.setState({ animationCompleted: false });
  }

  stopAnimation() {
    this.setState({ animationCompleted: true });
  }

  render() {
    return(
      <div className={`animation-bg ${!this.state.animationCompleted ? 'animation-bg_animate' : ''}`}>
        <div className='animation-bg__item animation-bg__item_violet' />
        <div className='animation-bg__item animation-bg__item_red' />
        <div className='animation-bg__item animation-bg__item_mint' />
        <div className='animation-bg__item animation-bg__item_sunflower' />
        <div className='animation-bg__item animation-bg__item_purple' />
        <div className='animation-bg__item animation-bg__item_royal-blue' />
        <div className='animation-bg__item animation-bg__item_orange' />
        <div className='animation-bg__item animation-bg__item_aqua' />
      </div>
    )
  }
}

AnimationBg.propTypes = {
  animationDuration: React.PropTypes.number.isRequired
};

export default AnimationBg;
