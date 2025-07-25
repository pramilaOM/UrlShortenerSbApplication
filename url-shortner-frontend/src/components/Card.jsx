import React from 'react'
import { motion } from 'framer-motion';

const Card = ({ title, desc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shadow-md border border-gray-200 rounded-lg p-5 bg-white">
            <h3 className="font-semibold text-lg text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </motion.div>


    )
}

export default Card