import React from 'react';

const ProductPage = () => {
    return (
        <>
            <div className="product" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#fff' }}>
                <div className="product-section" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="src/assets/displayCard5.png" alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="content-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: '#fff', textAlign: 'center' }}>
                        {/* Add your content here */}

                        {/* Points to the left */}
                        <div className="left-content" style={{ position: 'absolute', left: '10px', top: '10px', color: 'black', fontWeight: 'bold' }}>
                            <p style={{ marginBottom: '20px' }}> "AI-driven product trials" </p>
                        </div>

                        {/* Points to the right */}
                        <div className="right-content" style={{ position: 'absolute', right: '10px', top: '40%', color: 'black', fontWeight: 'bold' }}>
                            <p style={{ marginBottom: '20px' }}> "products multilingual to cater to everyone's needs." </p>
                        </div>

                        {/* Centered content */}
                        <div className="center-content" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                            <p style={{ marginBottom: '20px' }}> "multilingual to cater to everyone's needs." </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
