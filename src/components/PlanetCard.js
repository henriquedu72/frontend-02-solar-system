import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div>
        <div data-testid="planet-card">{ planetName }</div>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: propTypes.string,
  planetImage: propTypes.img,
}.isRequire;

export default PlanetCard;
