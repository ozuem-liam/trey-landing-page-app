import PropTypes from 'prop-types';

const Button = ({ onAdd }) => {
    return (
        <>
        <button className="callToActionButton" onClick={onAdd}>
            BUY LANDED PROPERTY NOW
        </button>
        </>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button;