import { motion } from "framer-motion";

const ProductsHeader = () => {
    return (
        <div className="relative z-10 max-w-[1540px] w-full my-4 px-10 md:px-20 mx-auto">
            <div className="flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center flex flex-col items-center"
                >
                    <p className="text-[#f4aa38] tracking-[0.2em] font-medium uppercase mb-6 text-sm">
                        Our Products
                    </p>

                    <h2 className="text-[3rem] md:text-[5rem] font-medium leading-[1] tracking-tighter text-black">
                        Engineered For{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4aa38] to-yellow-500">
                            Modern
                        </span>{" "}
                        Living
                    </h2>

                </motion.div>
            </div>
        </div>
    );
};

export default ProductsHeader;
