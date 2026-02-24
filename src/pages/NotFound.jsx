import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white font-['Outfit'] flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 -z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-50/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-0" />

            <div className="text-center space-y-8 relative z-10">
                <div className="text-[10rem] md:text-[15rem] font-bold tracking-tighter leading-none text-black/5 selection:text-[#f4aa38]/20">404</div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-black lowercase">page not found</h1>
                    <p className="text-xl md:text-2xl font-light text-black/40 lowercase max-w-md mx-auto">
                        oops! the page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <Link
                    to="/"
                    className="inline-flex items-center gap-4 text-black font-medium text-xl md:text-2xl tracking-tight lowercase hover:text-[#f4aa38] transition-colors group mt-10"
                >
                    <span className="translate-x-0 group-hover:-translate-x-3 transition-transform text-[#f4aa38]">←</span> go back home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
