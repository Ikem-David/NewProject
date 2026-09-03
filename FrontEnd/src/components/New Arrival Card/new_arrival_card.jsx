const ArrivalCard = ({image, text}) => {
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
        <div className="arrival-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{backgroundImage : `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '400px',
                    width: '400px',
                    marginLeft:'50px',
                    marginRight:'50px',
                    borderRadius:'40px',
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