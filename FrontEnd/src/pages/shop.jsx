import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import { useCart } from '../components/Cart/cart'
import { useEffect, useState } from 'react'; 
import { useSearchParams } from 'react-router-dom';

const products = [
    { id: 1, name: 'Sienna Double-Breasted Blazer', category: 'Blazers', price: '$285', image: '/blazer_01.jpg' },
    { id: 2, name: 'Cedar Tailored Blazer', category: 'Blazers', price: '$310', image: '/blazer_02.jpg' },
    { id: 3, name: 'Terracotta Boyfriend Blazer', category: 'Blazers', price: '$295', image: '/blazer_03.jpg' },
    { id: 4, name: 'Ivory City Blazer', category: 'Blazers', price: '$325', image: '/blazer_04.jpg' },
    { id: 5, name: 'Sage Relaxed Blazer', category: 'Blazers', price: '$275', image: '/blazer_05.jpg' },
    { id: 6, name: 'Noir Cropped Blazer', category: 'Blazers', price: '$260', image: '/blazer_06.jpg' },
    { id: 7, name: 'Rosewood Cropped Blazer', category: 'Blazers', price: '$245', image: '/blazer_07.jpg' },
    { id: 8, name: 'Indigo Paisley Shirt', category: 'Shirts', price: '$145', image: '/shirt_01.jpg' },
    { id: 9, name: 'Cloud Cotton Shirt', category: 'Shirts', price: '$120', image: '/shirt_02.jpg' },
    { id: 10, name: 'Denim Studio Shirt', category: 'Shirts', price: '$135', image: '/shirt_03.jpg' },
    { id: 11, name: 'Clay Satin Shirt', category: 'Shirts', price: '$155', image: '/shirt_04.jpg' },
    { id: 12, name: 'Midnight Silk Shirt', category: 'Shirts', price: '$175', image: '/shirt_05.jpg' },
    { id: 13, name: 'Pastel Stripe Shirt', category: 'Shirts', price: '$130', image: '/shirt_06.jpg' },
    { id: 14, name: 'Checkmate Blouse', category: 'Shirts', price: '$150', image: '/shirt_07.jpg' },
    { id: 15, name: 'Pearl Slip Gown', category: 'Gowns', price: '$340', image: '/gown_01.jpg' },
    { id: 16, name: 'Sage Halter Gown', category: 'Gowns', price: '$365', image: '/gown_02.jpg' },
    { id: 17, name: 'Velvet Wine Gown', category: 'Gowns', price: '$420', image: '/gown_03.jpg' },
    { id: 18, name: 'Champagne Draped Gown', category: 'Gowns', price: '$390', image: '/gown_04.jpg' },
    { id: 19, name: 'Bluebell Off-Shoulder Gown', category: 'Gowns', price: '$410', image: '/gown_05.jpg' },
    { id: 20, name: 'Lavender Wrap Gown', category: 'Gowns', price: '$375', image: '/gown_06.jpg' },
    { id: 21, name: 'Rosewater Evening Gown', category: 'Gowns', price: '$445', image: '/gown_07.jpg' },
];

const Shop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchParams, setSearchParams] = useSearchParams();
    const requestedCategory = searchParams.get('category');
    const validCategories = ['All', 'Blazers', 'Shirts', 'Gowns'];
    const initialCategory = validCategories.includes(requestedCategory) ? requestedCategory : 'All';
    const [activeTab, setActiveTab] = useState(initialCategory);
    const [message, setMessage] = useState(false);
    const { addItem } = useCart();
    const filteredProducts = activeTab === 'All'
        ? products
        : products.filter((product) => product.category === activeTab);

  return (
    <>
        <Navbar/>
        <div className='ShopContainer'>
        {/* Header Section */}
        <div className='ShopHeader'>
            <h1>SHOP THE COLLECTION</h1>
            <p>Everyday fashion, elevated.</p>
        </div>

        {/* Filter Tabs */}
        <div className='ShopTab'>
            {['All', 'Blazers', 'Shirts', 'Gowns'].map((tab) => (
            <button
                key={tab}
                onClick={() => {
                    setActiveTab(tab);
                    setSearchParams(tab === 'All' ? {} : { category: tab });
                }}
                style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '2px solid #000000' : '2px solid transparent',
                color: activeTab === tab ? '#000000' : '#777777',
                fontWeight: activeTab === tab ? '600' : '400',
                paddingBottom: '4px',
                cursor: 'pointer',
                }}
            >
                {tab}
            </button>
            ))}
        </div>


        {/* Product Grid */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '32px',
        }}>
            {filteredProducts.map((product) => (
            <div key={product.id}>
                <div className='ShopCards' style={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '20px',
                    aspectRatio: '3/4',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
                </div>
                <div style={{
                    marginTop: '16px',
                    display: 'flex',
                    flexDirection:'column',
                    padding:'10px',
                    height:'150px',
                    justifyContent: 'space-evenly',
                    alignItems: 'baseline',
                    padding: '0 4px',
                }}>
                    <button
                        className="ShopAddButton"
                        type="button"
                        onClick={() => {
                            addItem(product);
                            setMessage(true)
                            setTimeout(() => setMessage(false), 3000)
                        }}
                    >
                        Add to cart
                    </button>
                <h3 style={{
                    fontFamily: 'serif',
                    fontSize: '18px',
                    color: '#111111',
                    margin: 0,
                }}>{product.name}</h3>
                <span style={{                
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333333',
                }}>{product.price}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#888888', margin: '4px 0 0 4px' }}>{product.category}</p>
            </div>
            ))}
        </div>
        </div>
        {message && (
            <div className="CartMessage">
                <p role="status">
                    Item Added to Cart
                </p>
            </div>
        )}        
        <Footer/>
    </>
  );
}
export default Shop;