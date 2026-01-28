import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ background: 'linear-gradient(135deg, #100C0B 0%, #1C1B17 50%, #171614 100%)' }}>
            <div className="text-center space-y-8">
                <div className="text-9xl font-bold" style={{ color: 'rgba(247, 126, 13, 0.2)' }}>404</div>

                <h1 className="text-4xl font-bold text-white">Page Not Found</h1>

                <p className="text-lg max-w-md" style={{ color: '#99A57D' }}>
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #F77E0D, #E94604)', boxShadow: '0 10px 40px rgba(247, 126, 13, 0.25)' }}
                >
                    ← Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
