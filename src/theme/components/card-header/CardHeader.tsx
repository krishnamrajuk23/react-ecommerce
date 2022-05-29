import PropTypes from'prop-types';

function CardHeader({ title }: any) {
  return (
  <div className="card-header">
    <h4>{title}</h4>
  </div>
  )
}

CardHeader.propType = {
  title: PropTypes.string
}

export default CardHeader;