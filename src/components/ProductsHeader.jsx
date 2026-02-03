const ProductsHeader = () => {
    return (
        <div className="relative z-10 max-w-[1540px] w-full my-4 px-10 md:px-20 mx-auto">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <div className="text-[0.7rem] font-medium tracking-tight text-[#f4aa38] mb-3 uppercase flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                        Products
                    </div>
                    <h2 className="text-5xl md:text-6xl font-medium text-black tracking-tight leading-tight">
                        Our Product Ecosystem
                    </h2>
                </div>
                <div className="hidden md:block max-w-md text-right">
                    <p className="text-base text-black/40 font-medium leading-relaxed">
                        Innovative solutions crafted by M2H to transform businesses through cutting-edge technology, AI, and intelligent automation.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductsHeader;
