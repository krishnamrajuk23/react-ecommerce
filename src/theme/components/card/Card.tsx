import PropTypes from 'prop-types';

import CardHeader from "../card-header/CardHeader";
function Card({ title, children }: any) {
  console.log();
  return (
    <div className="app-card">
      <CardHeader title={title}></CardHeader>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

Card.propType = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default Card;