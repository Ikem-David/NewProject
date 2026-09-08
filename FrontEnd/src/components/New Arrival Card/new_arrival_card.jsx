import './new_arrival_card.css'
import { useNavigate } from 'react-router-dom';

const ArrivalCard = ({image, text}) => {
    const navigate = useNavigate();

    const handleMouseMove = (event) => {
        const card = event.currentTarget;
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;

        card.style.setProperty('--shadow-x', `${(0.5 - x) * 24}px`);
        card.style.setProperty('--shadow-y', `${(0.5 - y) * 24}px`);
        card.style.setProperty('--shadow-blur', '34px');
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;

        card.style.setProperty('--shadow-x', '0px');
        card.style.setProperty('--shadow-y', '14px');
        card.style.setProperty('--shadow-blur', '24px');
    };

    return (
        <div
            className="arrival-card"
            onClick={() => navigate(`/shop?category=${encodeURIComponent(text)}`)}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    navigate(`/shop?category=${encodeURIComponent(text)}`);
                }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex={0}
            style={{backgroundImage : `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '400px',
                    width: '400px',
                    marginLeft:'50px',
                    marginRight:'50px',
                    borderRadius:'90px',
                    '--shadow-x':'0px',
                    '--shadow-y':'14px',
                    '--shadow-blur':'24px'}}
                    >
                <p style={{textAlign:'center',fontSize:'30px',fontFamily:'Roboto, sans-serif',
                    padding:'10px'
                }}>{text}</p>
        </div>
    );
}
 
export default ArrivalCard;