import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Card from "../Components/Card";
import { productsData } from "./Data";
import "./Products.css";

function Products() {
    return (
        <>
            <div className="page1">
                <div className="header_container">
                    <div className="header_subtitle">Real software, real users</div>
                    <div className="header_text">
                        <div className="home_title_container">
                            <motion.div initial={{ y: "120%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                                PRODUCTS
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div initial={{ y: "20%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="page2">
                    <div className="card-container products-grid">
                        {productsData.map((data, id) => (
                            <Card data={data} key={id} id={id} />
                        ))}
                    </div>
                    <div className="products_cta">
                        Need something like this built for your team or product?
                        <a className="products_cta_link" href="mailto:jerryjohnthomascareer@gmail.com?subject=Let%27s%20build%20something">
                            Let's talk <GoArrowUpRight className="products_cta_arrow" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Products;
