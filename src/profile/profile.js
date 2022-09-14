import PropTypes from 'prop-types';

export const Person = ({fullName = "Ahmed Esmat",bio = "A hard working engineering student",profession = "Student",children}) => {
    const divStyle = {
        width: '50%',
        margin: 'auto',
        textAlign: 'center'
    };
    const imageStyle = {
        width: "200px",
        borderRadius: "10%"
    };
    const handleName = () => {
        alert(fullName);
    };
    return (
        <div style = {divStyle}>
            <h1>{fullName}</h1>
            <h4>{bio}</h4>
            <h4>{profession}</h4>
            <img style = {imageStyle} src={children} alt="profile image"/>
            <h4><a href="/" onClick={handleName}>Click me!</a></h4>
        </div>
    );
};

Person.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.string
};