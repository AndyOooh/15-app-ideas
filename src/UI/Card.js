import classes from './Card.module.css';

const Card = props => {
  const cardClasses = props.extraClasses
    ? `${classes.card} ${[...props.extraClasses]}`
    : classes.card;

  return <div className={cardClasses}>{props.children}</div>;
};
export default Card;
